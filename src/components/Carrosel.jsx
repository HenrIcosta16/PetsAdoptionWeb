import { Carousel, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Carrosel.css';

const Carrosel = ({ itens = [] }) => {
  return (
    <Container fluid="sm" className="p-2">
      <Carousel controls={false}>
        {itens.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image fluid src={item.imagemUrl} />
              <Carousel.Caption>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

Carrosel.propTypes = {
  itens: PropTypes.array,
};

export default Carrosel;