import {ClanMeta} from '../../interfaces';
import {Card} from 'react-bootstrap';
import Link from 'next/link';

const ClanLeaders = ({highestRanks}: ClanMeta) => {
    highestRanks = highestRanks.sort((a,b) => b.rank - a.rank)
    return (
        <Card bg="dark-subtle">
            <Card.Body>
                <h3 className="d-inline-flex me-4">Leaders</h3>
                {highestRanks.map((player, idx) =>
                    <div className="d-inline-flex me-3" key={idx + `ClanLeaders`}>
                        <span className="me-2">{player.rank}</span> <Link
                        href={`/players/${player.name}`}>{player.name}</Link>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default ClanLeaders;