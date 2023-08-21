import Link from 'next/link';
import {Card, Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import PlayersRankings from '../components/players/players-rankings';
import ClanRankings from '../components/clans/clan-rankings';

const Index = () => {
    return (
        <div className="push-up-half">
            <Row className="justify-content-center mb-5">
                <Col sm={6}>
                    <FloatingLabel controlId="floatingInput" label="Seach for a player or clan..." className="mb-3">
                        <Form.Control type="string" placeholder="Maximized" size="lg"></Form.Control>
                    </FloatingLabel>
                </Col>
            </Row>

            <Card bg="dark">
                <Card.Body>
                    <Row>
                        <Col>
                            <h5>Today's Top Players</h5>
                            <PlayersRankings></PlayersRankings>
                        </Col>
                        <Col>
                            <h5>Today's Top Clans</h5>
                            <ClanRankings></ClanRankings>
                        </Col>
                        <Col></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Index;