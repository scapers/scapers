import {Card, Col, Row} from 'react-bootstrap';
import {ClanMeta} from '../../interfaces';

const ClanCard = ({ name }: ClanMeta) => {
    return (
        <Card bg="dark-subtle">
            <Card.Body>
                <Row>
                    <Col className="text-center">
                        <div className="img-container">
                            <img className="img-fluid" src={`https://secure.runescape.com/m=avatar-rs/${name.replace(/ /g, '+')}/clanmotif.png`}
                                 alt="Clan Banner"/>
                            <h1 className="img-overlay-center">{name}</h1>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ClanCard;