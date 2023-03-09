import Carousel from 'react-bootstrap/Carousel';
import '../styles/caroussel.css'

const Caroussels = ({slides}) => {
    return (
    <div>
        <Carousel className='caroussel-slide'>
            {slides && Array.isArray(slides) && slides.map((element) => (
        <Carousel.Item key={element.src}>
            <img
                className="d-block w-100"
                src={element.src }
                alt={element.alt }
            />
        </Carousel.Item>
    ))}
        </Carousel>
    </div>
    );
}

export default Caroussels;
