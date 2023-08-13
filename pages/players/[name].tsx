import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Col, Row, Spinner} from 'react-bootstrap';
import {get} from '../../services/fetcher/fetcher';
import PlayerCard from '../../components/players/player-card';
import PlayerMeta from '../../components/players/player-meta';
import PlayerStats from '../../components/players/player-stats';
import PlayerRecentActivity from '../../components/players/player-recent-activity';

const PlayerPage = () => {
    const {query} = useRouter();
    const {data: player, error: playerError} = useSWR(query.name ? `/api/players/${query.name}` : null, get);

    if (playerError) return <div>Failed to load player from RunePixels</div>
    if (!player) return <div><Spinner animation="border" variant="primary"/></div>

    return (
        <div>
            <Row>
                <Col sm={4} className="mb-4">
                    <PlayerCard name={player.name} />
                </Col>
                <Col sm={8} className="mb-4">
                    <PlayerMeta combatLevel={player.combatLevel}
                                overall={player.overall}
                                questPoints={player.questPoints} />
                </Col>
            </Row>
            <Row>
                <Col sm={3} className="mb-4">
                    <PlayerRecentActivity activity={player.activity} />
                </Col>
                <Col sm={9} className="mb-4">
                    <PlayerStats    id={player.id}
                                    name={player.name}
                                    overall={player.overall}
                                    skills={player.skills}
                        />
                </Col>
            </Row>
        </div>
    );
};

export default PlayerPage;