import {ClanMeta} from '../../interfaces';
import {Card, Col, Row} from 'react-bootstrap';

const ClanMeta = ({ totalLevelAverage, totalXP, totalMembers, citadelLevel, descriptionTitle, description }: ClanMeta) => {
    return (
        <div>
            <Card bg="dark-subtle" className="mb-4">
                <Card.Body>
                    <Row>
                        <Col sm={6} md={3}>
                            {totalLevelAverage}
                        </Col>
                        <Col sm={6} md={3}>
                            {totalXP}
                        </Col>
                        <Col sm={6} md={3}>
                            {totalMembers}
                        </Col>
                        <Col sm={6} md={3}>
                            {citadelLevel}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    )
}

export default ClanMeta;