import {useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import Image from 'next/image';
import {skills} from '../../services/skills/skills-service';

const SkillsDropdown = ({defaultSkill, changeSkill, placement}) => {
    const [show, setShow] = useState(false);
    const [skill, setSkill] = useState(defaultSkill);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeAndPass = (skill: string) => {
        setShow(false);
        changeSkill(skill);
        setSkill(skill);
    }

    return (
        <>
            <div className="d-grid gap-2">
                <Button variant="outline-primary" onClick={handleShow}>
                    <Image src={`/assets/img/skills/${skill}.png`} alt={`Skill`} height={25} width={25}></Image>
                </Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Skill Select</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary" onClick={() => closeAndPass('overall')}>
                            <Image src={`/assets/img/skills/overall.png`} alt={`overall`} className="pe-2"
                                   height={25}
                                   width={25}></Image>
                            <span className="titlecase">overall</span>
                        </Button>
                        {
                            skills.map((skill) =>
                                <Button variant="outline-primary" onClick={() => closeAndPass(skill)}>
                                    <Image src={`/assets/img/skills/${skill}.png`} alt={`${skill}`} className="pe-2"
                                           height={25}
                                           width={25}></Image>
                                    <span className="titlecase">{skill}</span>
                                </Button>
                            )
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};

export default SkillsDropdown;