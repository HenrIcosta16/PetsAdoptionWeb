import dog2 from '../assets/img/dog2.jpg';
import catvacina from '../assets/img/catvacina.jpg';
import banho from '../assets/img/banho.jpg';

let animais = [
  {
    id: '1',
    imagemUrl: banho,
    titulo: 'Banho e Tosa',
    descricao: 'Serviço completo de banho e tosa para cães e gatos.',
    disponivel: 'disponivel',
  },
  {
    id: '2',
    imagemUrl: catvacina,
    titulo: 'Vacinação',
    descricao: 'Aplicação de vacinas para cães e gatos.',
    disponivel: 'disponivel',
  },
  {
    id: '3',
    imagemUrl: dog2,
    titulo: 'Consulta Veterinária',
    descricao: 'Consultas veterinárias com diagnóstico completo.',
    disponivel: 'disponivel',
  },
];

export default animais;
