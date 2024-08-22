import itens from '../dataset/Carrosel';
import listarAnimal from '../dataset/Bichos'; // Caminho para listarAnimal
import animais from '../dataset/Pets'; // Caminho para animais
import Carrosel from './Carrosel';
import ServicoCard from './ServicoCard';
import { useState } from 'react';
import AdotarTable from './AdotarTable';

const Main = () => {
  const [animaisData] = useState(animais); // Dados para ServicoCard
  const [animaisDisponiveis] = useState(listarAnimal); // Dados para AdotarTable

  return (
    <main>
      <Carrosel itens={itens} />
      <ServicoCard animais={animaisData} />
      <AdotarTable animais={animaisDisponiveis} />
    </main>
  );
};

export default Main;
