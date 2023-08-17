import {Card, Col, Row} from 'react-bootstrap';
import {Player} from '../../interfaces';
import Link from 'next/link';

const PlayerCard = ({name, clan}: Player) => {
    return (
        <Card bg="dark-subtle">
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <img src={`https://secure.runescape.com/m=avatar-rs/a=13/${name}/chat.png`}
                             alt="Player Avatar"/>
                    </Col>
                    <Col xs={8}>
                        <h1>{name}</h1>
                        <small>Current Clan: <Link href={`/clans/${clan.name}`}>{clan.name}</Link></small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PlayerCard;