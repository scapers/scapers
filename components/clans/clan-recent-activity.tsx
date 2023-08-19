import {ClanMeta} from '../../interfaces';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Accordion, Card, Col, Row, Spinner} from 'react-bootstrap';
import DropImage from '../utils/drop-image';
import moment from 'moment';
import Link from 'next/link';

const ClanRecentActivity = ({name, id}: ClanMeta) => {
    const {
        data: activities,
        error: activityError
    } = useSWR(name && id ? `/api/clans/${name}/${id}/players/activities/latest?activitytype=-1` : null, get);

    if (activityError) return <div>Failed to load clan activity from RunePixels</div>
    if (!activities) return <div>Loading activities from RunePixels</div>

    return (
        <Card bg="dark-subtle">
            <Card.Title className="text-center">
                Recent Activity
            </Card.Title>
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    {activities ? activities.map((a, idx) =>
                        <div className="mb-2" key={idx + 'ClanRecentActivity'}>
                            <Row>
                                <Col xs={3}>

                                </Col>
                                <Col xs={9}>
                                    <h5>
                                        <Link href={`/players/${a.playerName}`}>{a.playerName}</Link>
                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <DropImage text={a.text}
                                               skill={a.skill}
                                               type={a.type}/>
                                </Col>
                                <Col xs={9}>
                                    <h6 className="mb-1">{a.text}</h6>
                                    <small className="text-muted">{moment(a.date).format('YYYY-DD-MM HH:mm')}</small>
                                </Col>
                            </Row>
                        </div>) : <div>No data found</div>
                    }

                </Accordion>
            </Card.Body>
        </Card>
    )
};

export default ClanRecentActivity;