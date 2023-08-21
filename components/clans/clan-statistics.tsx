import {ClanMeta} from '../../interfaces';
import {Card, Col, Row} from 'react-bootstrap';

const ClanStatistics = ({ totalLevelAverage, totalXP, totalMembers, citadelLevel, descriptionTitle, description }: ClanMeta) => {
    return (
        <>
            <Card bg="dark-subtle" className="mb-4">
                <Card.Title className="text-center">Clan Stats</Card.Title>
                <Card.Body>
                    <Row>
                        <Col lg={6} className="mb-2">
                            {totalLevelAverage}<br/>
                            <small>total level (avg)</small>
                        </Col>
                        <Col lg={6} className="mb-2">
                            {totalXP.toLocaleString('en-US')}<br/>
                            <small>total xp</small>
                        </Col>
                        <Col lg={6} className="mb-2">
                            {totalMembers}<br/>
                            <small>members</small>
                        </Col>
                        <Col lg={6} className="mb-2">
                            {citadelLevel}<br/>
                            <small>citadel level</small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ClanStatistics;