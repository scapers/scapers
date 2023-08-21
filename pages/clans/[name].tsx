import {useRouter} from 'next/router';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Col, Nav, Row, Spinner, Tab} from 'react-bootstrap';
import ClanLeaders from '../../components/clans/clan-leaders';
import ClanCard from '../../components/clans/clan-card';
import ClanRanking from '../../components/clans/clan-ranking';
import ClanHiscore from '../../components/clans/clan-hiscore';
import ClanRecentActivity from '../../components/clans/clan-recent-activity';
import ClanStatistics from '../../components/clans/clan-statistics';

const ClanPage = () => {
    const {query} = useRouter();
    const {data: clan, error: clanError} = useSWR(query.name ? `/api/clans/${query.name}` : null, get);

    if (clanError) return <div>Failed to load clan from RunePixels</div>
    if (!clan) return <div><Spinner animation="border" variant="primary"/></div>

    return (
        <div className="push-up-clan">
            <Row className="mb-5 justify-content-center">
                <Col sm={4}>
                    <ClanCard name={clan.name}/>
                </Col>
            </Row>
            <Row class="mb-4">
                <Col>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <ClanStatistics citadelLevel={clan.citadelLevel}
                                    totalLevelAverage={clan.totalLevelAverage}
                                    totalXP={clan.totalXP}
                                    totalMembers={clan.totalMembers}
                                    descriptionTitle={clan.descriptionTitle}
                                    description={clan.description}
                    />
                </Col>
                <Col sm={8}>
                    <ClanLeaders highestRanks={clan.highestRanks}/>
                    <Tab.Container defaultActiveKey="home">
                        <Nav className="justify-content-center mb-3" defaultActiveKey="home">
                            <Nav.Item>
                                <Nav.Link eventKey="home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="hiscore">Hiscore</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="home">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <ClanRecentActivity id={clan.id}
                                                            name={clan.name}/>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ClanRanking id={clan.id}
                                                     name={clan.name}/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="hiscore">
                                <Row>
                                    <Col>
                                        <ClanHiscore id={clan.id}
                                                     name={clan.name}/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>

        </div>
    );
};

export default ClanPage;