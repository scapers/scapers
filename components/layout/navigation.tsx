import {Badge, Button, Card, Col, Container, Modal, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import moment from 'moment';
import {useState} from 'react';

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fromNow = (target) => {
        const now = moment().utc();
        if (target.isAfter(now)) {
            return target.fromNow()
        }
        return target.add(1, 'd').fromNow();
    }

    return (
        <>
            <Navbar expand="lg" className="mb-2">
                <Container fluid>
                    <Navbar.Brand href="/">Scapers <Badge bg="danger">beta</Badge></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/players">Players</Nav.Link>
                            <Nav.Link href="/clans">Clans</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={handleShow}>Tracker Resets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Tracker Resets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card bg="dark-subtle">
                                <Card.Title className="text-center">Daily Reset</Card.Title>
                                <Card.Body
                                    className="text-center">
                                    5AM GMT
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="dark-subtle">
                                <Card.Title className="text-center">Weekly Reset</Card.Title>
                                <Card.Body
                                    className="text-center">
                                    Sunday's @ 5AM GMT
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="dark-subtle">
                                <Card.Title className="text-center">Monthly Reset</Card.Title>
                                <Card.Body
                                    className="text-center">
                                    Day 1 @ 5AM GMT
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="dark-subtle">
                                <Card.Title className="text-center">Yearly Reset</Card.Title>
                                <Card.Body
                                    className="text-center">
                                    Jan 1 @ 5AM GMT
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Navigation;