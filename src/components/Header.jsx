import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <img 
            src="/wallpaper_1920x1080.png" 
            alt="PetsAdoption" 
            className="logo"
          />
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="#home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sobre">
                Sobre
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
