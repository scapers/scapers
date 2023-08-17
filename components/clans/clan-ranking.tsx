import {ClanMeta} from '../../interfaces';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Card, Form, Table} from 'react-bootstrap';
import Link from 'next/link';
import {useState} from 'react';
import SkillsDropdown from '../utils/skills-dropdown';

const ClanRanking = ({id, name}: ClanMeta) => {
    const [timeperiod, setTimeperiod] = useState(0);
    const {
        data: rankings,
        error: rankingsError
    } = useSWR(id ? `/api/clans/${name}/players/ranking/${id}?timeperiod=${timeperiod}&playertype=0&playersubtype=0&skill=overall` : null, get);

    if (rankingsError) return <div>Failed to load clan rankings from RunePixels</div>
    if (!rankings) return <div>Loading clan rankings from RunePixels</div>

    const changeTimeperiod = (event) => {
        setTimeperiod(event.target.value);
    }

    return (
        <>
            <Card bg="dark-subtle" className="d-none d-lg-block">
                <Card.Title className="px-2 pt-2 mb-0">
                    <Form.Select value={timeperiod} onChange={changeTimeperiod}>
                        <option value="0">Today</option>
                        <option value="1">Yesterday</option>
                        <option value="2">Week</option>
                        <option value="5">Last Week</option>
                        <option value="3">Month</option>
                        <option value="6">Last Month</option>
                        <option value="4">Year</option>
                        <option value="7">Last Year</option>
                    </Form.Select>
                    <SkillsDropdown></SkillsDropdown>
                </Card.Title>
                <Card.Body>
                    <Table striped hover borderless>
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Experience</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rankings.map((player, idx) =>
                            <tr key={idx + 'ClanRanking'}>
                                <td>
                                    <Link href={`/players/${player.name}`}>{player.name}</Link>
                                </td>
                                <td>
                                    {player.xp.toLocaleString('en-US')}
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default ClanRanking;