import {Badge, Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="mb-2">
            <Container fluid>
                <Navbar.Brand href="/">Scapers <Badge bg="danger">beta</Badge></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/players">Players</Nav.Link>
                        <Nav.Link href="/clans">Clans</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;