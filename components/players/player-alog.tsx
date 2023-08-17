import {Player} from '../../interfaces';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Button, Card, Col, Dropdown, Row} from 'react-bootstrap';
import moment from 'moment';
import DropImage from '../utils/drop-image';
import {useEffect, useState} from 'react';
import {activityTypeToString} from '../../services/enums/enum-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const PlayerAlog = ({id, name}: Player) => {
    const [activityType, setActivityType] = useState(-1);
    const [activityName, setActivityName] = useState('All');
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        console.log('activityType', activityType);
        setActivityName(activityTypeToString(activityType));
    }, [activityType])

    const {
        data: activities,
        error: activitiesError,
    } = useSWR(id ? `/api/players/${name}/activities/${id}?timeperiod=-1&activitytype=${activityType}&skip=${skip}` : null, get);

    if (activitiesError) return <div>Failed to load player activities from RunePixels</div>
    if (!activities) return <div>Loading activities from RunePixels</div>

    const onSelect = async (eventKey, event) => {
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        setActivityType(eventKey);
    }

    const back = () => {
        if (skip >= 100) {
            setSkip(skip - 100);
            window.scrollTo(0,0)
        }
    }

    const forward = () => {
        setSkip(skip + 100);
        window.scrollTo(0,0)
    }

    return (
        <div>
            <Card bg="dark-subtle" className="mb-4">
                <Card.Body>
                    <Row>
                        <Col>
                            <h4>{activityName} Entries</h4>
                        </Col>
                        <Col className="d-flex justify-content-end">
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
                                {moment(activity.date).utc().fromNow()}
                            </Card.Footer>
                        </Card>
                    </Col>
                ) : <div>No data found</div>}
            </Row>
            {activities ?
                <Row>
                    <Col>
                        <Button variant="primary" disabled={skip < 100} onClick={back}>
                            <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
                            Previous
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="primary" onClick={forward}>
                            Next
                            <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                        </Button>
                    </Col>
                </Row>
                :
                <></>}
        </div>)
}
;

export default PlayerAlog;