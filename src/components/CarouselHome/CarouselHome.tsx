import { Carousel } from "react-bootstrap";


const CarouselHome = () => {
  return (
    <Carousel>

    <Carousel.Item>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="/assets/images/banner1.jpg" alt="slide1" />
      <Carousel.Caption>
        <h3>Potencia tu negocio con nuestras soluciones personalizadas</h3>
        <p>
            Desarrollamos software a medida para satisfacer tus necesidades empresariales específicas.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="/assets/images/programando-1000x365.png" alt="slide2" />
      <Carousel.Caption>
        <h3> Los mejores expertos del país </h3>
        <p>
            Trabajamos con las útimas tecnologías del Front y Back cada día.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="/assets/images/RHTV-MB0829_Web-Cloud-Computing.png" alt="slide3" />
      
      <Carousel.Caption>
        <h3> Somos el mejor equipo de Aplicaciones Agiles </h3>
        <p>
        Te brindamos todo el asesoriamiento en Desarrollo de Software
        </p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  )
}

export default CarouselHome
