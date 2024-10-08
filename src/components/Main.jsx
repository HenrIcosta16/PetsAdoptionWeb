import itens from '../dataset/Carrosel';
import listarAnimal from '../dataset/Bichos'; 
import animais from '../dataset/Pets'; 
import Carrosel from './Carrosel';
import ServicoCard from './ServicoCard';
import { useState } from 'react';
import AdotarTable from './AdotarTable';

const Main = () => {
  const [animaisData] = useState(animais); // Dados ServicoCard
  const [animaisDisponiveis] = useState(listarAnimal); // Dados AdotarTable

  return (
    <main>
      <Carrosel itens={itens} />
      <ServicoCard animais={animaisData} />
      <AdotarTable animais={animaisDisponiveis} />
    </main>
  );
};

export default Main;
