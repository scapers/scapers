import { Card, Col, Row } from "react-bootstrap";
import { Player } from "../../interfaces";
import Image from 'next/image';

const PlayerMeta = ({combatLevel, questPoints, overall}: Player) => {
    return (
        <Card bg="dark-subtle">
            <Card.Body>
                <Row>
                   <Col sm={6} md={3}>
                       <Image src="/assets/img/skills/overall.png"
                              width={20}
                              height={20}
                              className="me-2"
                              alt="Overall"/>
                       {overall.level} | {overall.virtualLevel}
                   </Col>
                    <Col sm={6} md={3}>
                        <Image src="/assets/img/skills/xp.png"
                               width={20}
                               height={20}
                               className="me-2"
                               alt="XP"/>
                        {overall.xp.toLocaleString("en-US")}
                    </Col>
                    <Col sm={6} md={3}>
                        <Image src="/assets/img/skills/combat.png"
                               width={20}
                               height={20}
                               className="me-2"
                               alt="Combat"/>
                        {combatLevel}
                    </Col>
                    <Col sm={6} md={3}>
                        <Image src="/assets/img/skills/quest_points.png"
                               width={20}
                               height={20}
                               className="me-2"
                               alt="Quest Points"/>
                        {questPoints}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PlayerMeta;