import {Card, Row, Col} from 'react-bootstrap';
import {Player} from '../../interfaces';
import {getSkillNameById} from '../../services/skills/skills-service';
import Image from 'next/image';

const PlayerRecentActivity = ({activity}: Player) => {
    return (
        <Card bg="dark-subtle">
            <Card.Title className="text-center">
                Recent Activity
            </Card.Title>
            <Card.Body>
                {activity.map((a, idx) =>
                        <Row>
                            <Col xs={3}>
                                img
                            </Col>
                            <Col xs={9}>
                                {a.text}
                            </Col>
                        </Row>
                )
                }
            </Card.Body>
        </Card>
    );
}

export default PlayerRecentActivity;