import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Col, Nav, Row, Spinner, Tab} from 'react-bootstrap';
import {get} from '../../services/fetcher/fetcher';
import PlayerCard from '../../components/players/player-card';
import PlayerMeta from '../../components/players/player-meta';
import PlayerStats from '../../components/players/player-stats';
import PlayerRecentActivity from '../../components/players/player-recent-activity';
import PlayerAlog from '../../components/players/player-alog';

const PlayerPage = () => {
    const {query} = useRouter();
    const {data: player, error: playerError} = useSWR(query.name ? `/api/players/${query.name}` : null, get);

    if (playerError) return <div>Failed to load player from RunePixels</div>
    if (!player) return <div><Spinner animation="border" variant="primary"/></div>

    return (
        <div>
            <Row>
                <Col sm={4} className="mb-4">
                    <PlayerCard name={player.name}
                                clan={player.clan}
                        />
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
                    <Tab.Container defaultActiveKey="skills">
                        <Nav className="justify-content-center mb-3" defaultActiveKey="skills">
                            <Nav.Item>
                                <Nav.Link eventKey="skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="alog">Adventurer's Log</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="graphs">Graphs</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="skills">
                                <PlayerStats    id={player.id}
                                                name={player.name}
                                                overall={player.overall}
                                                skills={player.skills}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="alog">
                                <PlayerAlog id={player.id}
                                            name={player.name}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </Col>
            </Row>
        </div>
    );
};

export default PlayerPage;