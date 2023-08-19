import Image from 'next/image';
import {Card, Col, Form, Row, Table} from 'react-bootstrap';
import {Player} from '../../interfaces';
import {getSkillNameById} from '../../services/skills/skills-service';
import useSWR from 'swr';
import {get} from '../../services/fetcher/fetcher';
import {useState} from 'react';

const PlayerStats = ({id, name, skills, overall}: Player) => {
    const [ timeperiod, setTimeperiod ] = useState(1);
    const {
        data: deltas,
        error: deltasError
    } = useSWR(id ? `/api/players/${name}/${id}/deltas?timeperiod=${timeperiod}` : null, get);
    if (deltasError) return <div>Failed to load player deltas from RunePixels</div>
    if (!deltas) return <div>Loading deltas from RunePixels</div>

    const changeTimeperiod = (event) => {
        setTimeperiod(event.target.value);
    }

    // TODO: Don't like the overall section being a copy pasta, what can we do?
    return (
        <>
            <Card bg="dark-subtle" className="d-none d-lg-block">
                <Card.Body>
                    <Table striped hover borderless>
                        <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                            <th>Rank</th>
                            <th>Experience</th>
                            <th>Today</th>
                            <th>
                                <Form.Select value={timeperiod} onChange={changeTimeperiod}>
                                    <option value="1">Yesterday</option>
                                    <option value="2">Week</option>
                                    <option value="5">Last Week</option>
                                    <option value="3">Month</option>
                                    <option value="6">Last Month</option>
                                    <option value="4">Year</option>
                                    <option value="7">Last Year</option>
                                </Form.Select>
                            </th>
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
                                <span className="titlecase">Overall</span>
                            </td>
                            <td>
                                <span className="me-2">{overall.virtualLevel.toLocaleString("en-US")}</span>
                                <span
                                    className={`${overall.levelDelta > 0 ? "text-success" : (overall.levelDelta < 0 ? "text-danger" : "")}`}>
                                            {overall.levelDelta > 0 ? '+' : ''}{overall.levelDelta !== 0 ? overall.levelDelta : ''}
                                        </span>
                            </td>
                            <td>
                                <span className="me-2">{overall.rank.toLocaleString("en-US")}</span>
                                <span
                                    className={`${overall.rankDelta < 0 ? "text-success" : (overall.rankDelta > 0 ? "text-danger" : "")}`}>
                                            {overall.rankDelta < 0 ? '+' : (overall.rankDelta > 0 ? "-" : "")}{overall.rankDelta !== 0 ? Math.abs(overall.rankDelta) : ''}
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
                                        <span className="titlecase">{getSkillNameById(skill.id)}</span>
                                    </td>
                                    <td>
                                        <span className="me-2">{skill.virtualLevel}</span>
                                        <span
                                            className={`${skill.levelDelta > 0 ? "text-success" : (skill.levelDelta < 0 ? "text-danger" : "")}`}>
                                            {skill.levelDelta > 0 ? '+' : ''}{skill.levelDelta !== 0 ? skill.levelDelta : ''}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="me-2">{skill.rank.toLocaleString("en-US")}</span>
                                        <span
                                            className={`${skill.rankDelta < 0 ? "text-success" : (skill.rankDelta > 0 ? "text-danger" : "")}`}>
                                            {skill.rankDelta < 0 ? '+' : (skill.rankDelta > 0 ? "-" : "")}{skill.rankDelta !== 0 ? Math.abs(skill.rankDelta) : ''}
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

            <div className="d-block d-sm-block d-md-block d-lg-none">
                <Card className="mb-4" bg="dark-subtle">
                    <Card.Header>
                        <Image
                            src={`/assets/img/skills/overall.png`}
                            width={20}
                            height={20}
                            alt="Overall"
                            className="mr-2"
                        />
                        <span
                            className="titlecase">overall</span> | {overall.virtualLevel} | {overall.xp.toLocaleString("en-US")}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <div className={`${overall.xpDelta > 0 ? "text-success" : ""}`}>
                                    {overall.xpDelta > 0 ? '+' : ''}{overall.xpDelta.toLocaleString("en-US")}
                                </div>
                                xp today
                            </Col>
                            <Col>
                                <div
                                    className={`${overall.rankDelta < 0 ? "text-success" : (overall.rankDelta > 0 ? "text-danger" : "")}`}>
                                            {overall.rankDelta < 0 ? '+' : (overall.rankDelta > 0 ? "-" : "")}{Math.abs(overall.rankDelta)}
                                </div>
                                rank today
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {
                    skills.map((skill, idx) => (
                        <Card className="mb-4" bg="dark-subtle" key={idx}>
                            <Card.Header>
                                <Image
                                    src={`/assets/img/skills/${getSkillNameById(skill.id)}.png`}
                                    width={20}
                                    height={20}
                                    alt={getSkillNameById(skill.id)}
                                    className="mr-2"
                                />
                                <span
                                    className="titlecase">{getSkillNameById(skill.id)}</span> | {skill.virtualLevel} | {skill.xp.toLocaleString("en-US")}
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className={`${skill.xpDelta > 0 ? "text-success" : ""}`}>
                                            {skill.xpDelta > 0 ? '+' : ''}{skill.xpDelta.toLocaleString("en-US")}
                                        </div>
                                        xp today
                                    </Col>
                                    <Col>
                                        <div
                                            className={`${skill.rankDelta < 0 ? "text-success" : (skill.rankDelta > 0 ? "text-danger" : "")}`}>
                                            {skill.rankDelta < 0 ? '+' : (skill.rankDelta > 0 ? "-" : "")}{Math.abs(skill.rankDelta)}
                                        </div>
                                        rank today
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