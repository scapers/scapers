import {ClanMeta} from '../../interfaces';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {Card, Table} from 'react-bootstrap';
import Link from 'next/link';

const ClanHiscore = ({id, name}: ClanMeta) => {
    const {data: hiscore, error: hiscoreError} =
        useSWR(id ? `/api/clans/${name}/players/hiscore/${id}?playertype=0&playersubtype=0&skill=overall` : null, get);

    if (hiscoreError) return <div>Failed to load clan hiscore from RunePixels</div>
    if (!hiscore) return <div>Loading clan hiscore from RunePixels</div>

    return (
        <>
            <Card bg="dark-subtle" className="">
                <Card.Body>
                    <Table striped hover borderless>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Player</th>
                            <th>Rank</th>
                            <th>Experience</th>
                        </tr>
                        </thead>
                        <tbody>
                        {hiscore.map((player, idx) =>
                            <tr key={idx + 'ClanHiscore'}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <Link href={`/players/${player.name}`}>{player.name}</Link>
                                </td>
                                <td>
                                    {player.rank === 0 ? <span className="text-danger-emphasis">INACTIVE</span> : player.rank.toLocaleString('en-US')}
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
    )
}

export default ClanHiscore;