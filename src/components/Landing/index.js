
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faVideo ,faUnlock ,faLock ,faCalendar} from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Carousel,Media} from 'react-bootstrap'
import logo from '../assets/imagem--fundo.png'
import logo_cotic from '../assets/cotic-circulo-branco.png'
import './styles.css'
function Landing() {
  return (
    <>
    
    <Carousel>
  <Carousel.Item>
    <img
      id="block"
      className="d-block w-100"
      src={logo}
      alt="First slide"
      width="100"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id="block"
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id="block"
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
   
   <Container>
     <Row className="top">
       <h1>Veja nossa lista de eventos</h1>
     </Row>
  <Row className="justify-content-md-center">
  <ul className="list-unstyled top">
  <Media as="li" >
    <img
      width={64}
      height={64}
      className="mr-3"
      src={logo_cotic}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5><FontAwesomeIcon icon={faVideo}/> Sala de Aula Virtual - TCC I - 2020.3 - Direito/UNIFAP</h5>
      <h5><FontAwesomeIcon icon={faUnlock}/> Conferência pública</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
<br></br>
<FontAwesomeIcon icon={faCalendar}/> Inicia em: 07 de Dezembro de 2020, 07:30
      </p>

    </Media.Body>
  </Media>

  <Media as="li" className="top">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={logo_cotic}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5><FontAwesomeIcon icon={faVideo}/> Oficina de construção de TR - 05</h5>
      <h5><FontAwesomeIcon icon={faLock}/> Conferência privada</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        <br></br>
        <FontAwesomeIcon icon={faCalendar}/> Inicia em: 07 de Dezembro de 2020, 07:30
      </p>
    </Media.Body>
  </Media>

  <Media as="li"  className="top">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={logo_cotic}
      alt="Generic placeholder"
    />
    <Media.Body>
    <h5><FontAwesomeIcon icon={faVideo}/> Oficina de construção de TR - 05</h5>
      <h5><FontAwesomeIcon icon={faLock}/> Conferência privada</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        <br></br>
        <FontAwesomeIcon icon={faCalendar}/> Inicia em: 07 de Dezembro de 2020, 07:30
      </p>
    </Media.Body>
  </Media>
</ul>
  </Row>
</Container>
    </>
  );
}

export default Landing;
