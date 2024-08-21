import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const AdotarTable = ({ animais = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Raça</th>
          <th>Idade</th>
          <th>Tipo</th>
          <th>Disponibilidade</th>
        </tr>
      </thead>
      <tbody>
        {animais.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.id}</td>
            <td>{pet.nome}</td>
            <td>{pet.raca}</td>
            <td>{pet.idade}</td>
            <td>{pet.tipo}</td>
            <td>{pet.disponibilidade ? 'Disponível' : 'Indisponível'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

AdotarTable.propTypes = {
  animais: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      raca: PropTypes.string.isRequired,
      idade: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      disponibilidade: PropTypes.bool.isRequired,
    })
  ),
};

export default AdotarTable;
