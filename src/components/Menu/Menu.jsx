import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Menu = () => { 
    return ( 
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">
                    NBA Data
                    <img
                        src="https://images.ctfassets.net/h8q6lxmb5akt/5yGzKAyHmk1HUjLHwPXiwe/d5a76af5c08b42c1c97ba402ca2c5ae1/nba-logo-vector.svg"
                        width="70"
                        className="d-inline-block "
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/teams">Equipos</Nav.Link>
                            <Nav.Link>Jugadores</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     )
}