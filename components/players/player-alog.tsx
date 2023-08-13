import {Player} from '../../interfaces';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Card, Col, Dropdown, Row} from 'react-bootstrap';
import moment from 'moment';
import DropImage from '../utils/drop-image';

const PlayerAlog = ({id, name}: Player) => {
    let activitytype = -1;
    const {
        data: activities,
        error: activitiesError,
        mutate
    } = useSWR(id ? `/api/players/${name}/activities/${id}?timeperiod=-1&activitytype=${activitytype}&skip=0` : null, get);
    if (activitiesError) return <div>Failed to load player activities from RunePixels</div>
    if (!activities) return <div>Loading activities from RunePixels</div>

    const onSelect = async (eventKey, event) => {
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        activitytype = eventKey;
        // await mutate(`/api/players/${name}/activities/${id}?timeperiod=-1&activitytype=${eventKey}&skip=0`);
        console.log(eventKey);
    }

    return (
        <div>
            <Card bg="dark-subtle" className="mb-4">
                <Card.Body>
                    <Row>
                        <Col>
                            <h4>{activitytype}</h4>
                        </Col>
                        <Col>
                            <Dropdown onSelect={onSelect}>
                                <Dropdown.Toggle variant="dark" id="alog-category">Category</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="-1">All</Dropdown.Item>
                                    <Dropdown.Item eventKey="0">Achievement</Dropdown.Item>
                                    <Dropdown.Item eventKey="1">Skills</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Pets</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Drops</Dropdown.Item>
                                    <Dropdown.Item eventKey="4">Kills</Dropdown.Item>
                                    <Dropdown.Item eventKey="5">Quests</Dropdown.Item>
                                    <Dropdown.Item eventKey="6">Clue Scrolls</Dropdown.Item>
                                    <Dropdown.Item eventKey="7">Misc</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Row>
                {activities ? activities?.map((activity, idx) =>
                    <Col xs={6} lg={3} className="mb-3" key={idx + 'Alog'}>
                        <Card bg="dark-subtle">
                            <Card.Body>
                                <Row>
                                    <Col xs={12} sm={4}>
                                        <DropImage text={activity.text}
                                                   type={activity.type}
                                                   skill={activity.skill}/>
                                    </Col>
                                    <Col xs={12} sm={8}>{activity.text}</Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                {moment(activity.date).fromNow()}
                            </Card.Footer>
                        </Card>
                    </Col>
                ) : <div>No data found</div>}
            </Row>
        </div>)
};

export default PlayerAlog;