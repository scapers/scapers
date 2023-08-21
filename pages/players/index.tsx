import PlayersRankings from '../../components/players/players-rankings';
import useSWR from 'swr';
import {Spinner} from 'react-bootstrap';
import Link from 'next/link';

const PlayersIndex = () => {
    return (
        <div>
            <h3>Test accounts</h3>
            <Link href="/players/sync">To Sync</Link>
        </div>
    )
}

export default PlayersIndex;