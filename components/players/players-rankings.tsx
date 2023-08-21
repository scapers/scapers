import Link from 'next/link';
import useSWR from 'swr';
import {Card, Spinner, Table} from 'react-bootstrap';
import {Rankings} from '../../interfaces';
import { get } from '../../services/fetcher/fetcher';

const PlayersRankings = () => {
    const {
        data: rankings,
        error
    } = useSWR(`/api/rankings/players?timeperiod=0&playertype=0&playersubtype=0&skill=overall&limit=40`, get);

    if (error) return <div>Failed to load clan from RunePixels</div>
    if (!rankings) return <div><Spinner animation="border" variant="primary"/></div>

    return (
        <Card bg="dark-subtle">
            <Card.Body>
                <Table striped hover borderless>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Player</th>
                        <th>Experience</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(rankings as Rankings).ranking.map((p,idx) =>
                        (
                            <tr key={p.name}>
                                <td>{idx + 1}</td>
                                <td><Link href="/players/[display]" as={`/players/${p.name}`}>
                                    {p.name}
                                </Link>
                                </td>
                                <td>{p.xp.toLocaleString('en-US')}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </Table>

            </Card.Body>
        </Card>
    )
}

export default PlayersRankings;