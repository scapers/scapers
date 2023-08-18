import {Card, Row, Col} from 'react-bootstrap';
import {Player} from '../../interfaces';
import moment from 'moment';
import DropImage from '../utils/drop-image';

const PlayerRecentActivity = ({activity}: Player) => {
    return (
        <Card bg="dark-subtle">
            <Card.Title className="text-center">
                Recent Activity
            </Card.Title>
            <Card.Body>
                {activity ? activity.map((a, idx) =>
                        <Row className="mb-2" key={idx + 'RecentActivity'}>
                            <Col xs={3}>
                                <DropImage text={a.text}
                                           skill={a.skill}
                                           type={a.type}/>
                            </Col>
                            <Col xs={9}>
                                <h6 className="mb-1">{a.text}</h6>
                                <small className="text-muted">{moment(a.date).format('YYYY-DD-MM HH:mm')}</small>
                            </Col>
                        </Row>) : <div>No data found</div>
                }
            </Card.Body>
        </Card>
    );
}

export default PlayerRecentActivity;