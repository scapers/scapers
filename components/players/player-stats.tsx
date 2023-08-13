import Image from 'next/image';
import {Card, Col, Row, Table} from 'react-bootstrap';
import {Player} from '../../interfaces';
import {getSkillNameById} from '../../services/skills/skills-service';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';

const PlayerStats = ({id, name, skills, overall}: Player) => {
    const {
        data: deltas,
        error: deltasError
    } = useSWR(id ? `/api/players/${name}/deltas/${id}?timeperiod=1` : null, get);
    if (deltasError) return <div>Failed to load player deltas from RunePixels</div>
    if (!deltas) return <div>Loading deltas from RunePixels</div>

    // TODO: Don't like the overall section being a copy pasta, what can we do?
    return (
        <>
            <Card bg="dark-subtle" className="d-none d-sm-block">
                <Card.Body>
                    <Table striped hover borderless>
                        <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                            <th>Rank</th>
                            <th>Experience</th>
                            <th>Today</th>
                            <th>Yesterday</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Image
                                    src={`/assets/img/skills/overall.png`}
                                    width={20}
                                    height={20}
                                    alt="Overall"
                                    className="mr-2"
                                />
                                Overall
                            </td>
                            <td>
                                {overall.virtualLevel}
                                {overall.levelDelta > 0 ? overall.levelDelta : ''}
                            </td>
                            <td>
                                <span className="me-2">{overall.rank}</span>
                                <span
                                    className={`${overall.rankDelta > 0 ? "text-success" : (overall.rankDelta < 0 ? "text-danger" : "")}`}>
                                            {overall.rankDelta > 0 ? '+' : ''}{overall.rankDelta !== 0 ? overall.rankDelta : ''}
                                        </span>
                            </td>
                            <td>{overall.xp.toLocaleString("en-US")}</td>
                            <td className={`${overall.xpDelta > 0 ? "text-success" : ""}`}>
                                {overall.xpDelta > 0 ? '+' : ''}{overall.xpDelta.toLocaleString("en-US")}
                            </td>
                            <td className={`${deltas[0].xp > 0 ? "text-success" : ""}`}>
                                {deltas[0].xp > 0 ? '+' : ''}{deltas[0].xp.toLocaleString("en-US")}
                            </td>
                        </tr>
                        {
                            skills.map((skill, idx) =>
                                <tr key={idx}>
                                    <td>
                                        <Image
                                            src={`/assets/img/skills/${getSkillNameById(skill.id)}.png`}
                                            width={20}
                                            height={20}
                                            alt={getSkillNameById(skill.id)}
                                            className="mr-2"
                                        />
                                        {getSkillNameById(skill.id)}
                                    </td>
                                    <td>
                                        {skill.virtualLevel}
                                        {skill.levelDelta > 0 ? skill.levelDelta : ''}
                                    </td>
                                    <td>
                                        <span className="me-2">{skill.rank}</span>
                                        <span
                                            className={`${skill.rankDelta > 0 ? "text-success" : (skill.rankDelta < 0 ? "text-danger" : "")}`}>
                                            {skill.rankDelta > 0 ? '+' : ''}{skill.rankDelta !== 0 ? skill.rankDelta : ''}
                                        </span>
                                    </td>
                                    <td>{skill.xp.toLocaleString("en-US")}</td>
                                    <td className={`${skill.xpDelta > 0 ? "text-success" : ""}`}>
                                        {skill.xpDelta > 0 ? '+' : ''}{skill.xpDelta.toLocaleString("en-US")}
                                    </td>
                                    <td className={`${deltas[skill.id + 1].xp > 0 ? "text-success" : ""}`}>
                                        {deltas[skill.id + 1].xp > 0 ? '+' : ''}{deltas[skill.id + 1].xp.toLocaleString("en-US")}
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>

            <div className="d-block d-sm-none">
                {
                    skills.map((skill, idx) => (
                        <Card className="mb-2" bg="dark-subtle" key={idx}>
                            <Card.Header>
                                <Image
                                    src={`/assets/img/skills/${getSkillNameById(skill.id)}.png`}
                                    width={20}
                                    height={20}
                                    alt={getSkillNameById(skill.id)}
                                    className="mr-2"
                                />
                                {getSkillNameById(skill.id)} | {skill.virtualLevel} | {skill.xp.toLocaleString("en-US")}
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className={`${skill.xpDelta > 0 ? "text-success" : ""}`}>
                                            {skill.xpDelta > 0 ? '+' : ''}{skill.xpDelta.toLocaleString("en-US")}
                                        </div>
                                        xp today
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default PlayerStats;