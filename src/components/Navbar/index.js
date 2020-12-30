import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/cotic-circulo-branco.png'
function Menu() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand>
    <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Link to="/" className="text-white"> Eventos</Link>
      
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/sobre" className="text-white">Sobre</Link></Nav.Link>
     
    </Nav>
  </Navbar>
    </>
  );
}

export default Menu;