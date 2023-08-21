import {Button, Card, Col, Row} from 'react-bootstrap';
import {Player} from '../../interfaces';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRotate, faStar} from '@fortawesome/free-solid-svg-icons';
import {useLocalStorage} from '../../hooks/local-sotrage/useLocalStorage';
import moment from 'moment';

const PlayerCard = ({name, clan, lastActivity}: Player) => {
    const [favorites, setFavorites] = useLocalStorage(
        'favoritePlayers',
        localStorage.getItem('favoritePlayers') || []
    );

    const toggleFavorite = () => {

    }

    const update = () => {

    }

    return (
        <>
            <Card bg="dark-subtle" className="mb-2">
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
            <div className="d-grid gap-2 d-flex justify-content-center">
                <Button variant="outline-primary" onClick={toggleFavorite}>
                    <FontAwesomeIcon icon={faStar}/>
                </Button>
                <span className="fst-italic">{moment(lastActivity).utc().fromNow()}<br/>Last Updated</span>
                <Button variant="outline-primary" onClick={update}>
                    <FontAwesomeIcon icon={faRotate}/>
                </Button>
            </div>
            <small>^^these buttons do nothing rn^^</small>
        </>
    );
}

export default PlayerCard;