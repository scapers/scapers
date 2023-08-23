import {Button, Card, Col, Row} from "react-bootstrap";
import {Player} from "../../interfaces";
import Image from 'next/image';
import {faRotate, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocalStorage} from '../../hooks/local-sotrage/useLocalStorage';

const PlayerMeta = ({name, combatLevel, questPoints, overall}: Player) => {
    return (
        <>
            <Card bg="dark-subtle" className="mb-2">
                <Card.Body>
                    <Row xs={2} sm={2} md={4} className="g-4">
                        <Col>
                            <Image src="/assets/img/skills/overall.png"
                                   width={20}
                                   height={20}
                                   className="me-2"
                                   alt="Overall"/>
                            {overall.level} | {overall.virtualLevel}
                        </Col>
                        <Col>
                            <Image src="/assets/img/skills/xp.png"
                                   width={20}
                                   height={20}
                                   className="me-2"
                                   alt="XP"/>
                            {overall.xp.toLocaleString("en-US")}
                        </Col>
                        <Col>
                            <Image src="/assets/img/skills/combat.png"
                                   width={20}
                                   height={20}
                                   className="me-2"
                                   alt="Combat"/>
                            {combatLevel}
                        </Col>
                        <Col>
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
        </>
    );
}

export default PlayerMeta;