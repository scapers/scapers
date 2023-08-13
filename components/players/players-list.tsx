import Link from 'next/link';

const PlayersList = (props) => {
    if (!props) return (<div>Issue render players list</div>)

    // order list alphabetically
    props.sort((a,b) => a.display.localeCompare(b.display))
    return (
        <div>
            {props.map(p => {
                return (
                    <div key={p.jagexUUID}>
                        <Link href="/players/[display]" as={`/players/${p.display}`}>
                            {p.display}
                        </Link>
                        <br/>
                    </div>
                );
            })}
        </div>
    )
}

export default PlayersList;