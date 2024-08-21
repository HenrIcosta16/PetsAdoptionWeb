import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ServicoCard = ({ animais = [] }) => {
  return (
    <Row className="p-2">
      {animais.map((pets, i) => {
        return (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src={pets.imagemUrl} />
              <Card.Body>
                <Card.Title>{pets.titulo}</Card.Title>
                <Card.Text>{pets.descricao}</Card.Text>
                 {/*primary' para disponivel : 'secondary' para indisponivel */}
                <Button variant={pets.disponivel === 'disponivel' ? 'primary' : 'primary'}>
                  {pets.disponivel === 'disponivel' ? 'Disponível' : 'Disponivel'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ServicoCard.propTypes = {
  animais: PropTypes.array,
};

export default ServicoCard;
