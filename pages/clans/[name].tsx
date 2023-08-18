import {useRouter} from 'next/router';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Col, Nav, Row, Spinner, Tab} from 'react-bootstrap';
import ClanLeaders from '../../components/clans/clan-leaders';
import ClanCard from '../../components/clans/clan-card';
import ClanRanking from '../../components/clans/clan-ranking';
import ClanHiscore from '../../components/clans/clan-hiscore';

const ClanPage = () => {
    const {query} = useRouter();
    const {data: clan, error: clanError} = useSWR(query.name ? `/api/clans/${query.name}` : null, get);

    if (clanError) return <div>Failed to load clan from RunePixels</div>
    if (!clan) return <div><Spinner animation="border" variant="primary"/></div>

    return (
        <div>
            <Row className="mb-4">
                <Col sm={4}>
                    <ClanCard name={clan.name} />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <ClanLeaders highestRanks={clan.highestRanks} />
                </Col>
                <Col sm={9}>
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
                                    <Col>
                                        <ClanRanking id={clan.id}
                                                     name={clan.name} />
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="hiscore">
                                <Row>
                                    <Col>
                                        <ClanHiscore id={clan.id}
                                                     name={clan.name} />
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