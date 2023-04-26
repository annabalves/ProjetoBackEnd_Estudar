import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Cabecalho() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes/">Populares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Em cartaz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Top Rated</NavDropdown.Item>
              </NavDropdown>
          <Nav className="me-auto">
            <Nav.Link href="#home">Atores</Nav.Link>
            <Nav.Link href="#link">Gêneros</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;

