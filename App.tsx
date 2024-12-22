import React from 'react';
import { TarefaProvider } from './components/Tarefa';
import Home from './components/Home';

const App = () => {
  return (
    <TarefaProvider>
      <Home />
    </TarefaProvider>
  );
};

export default App;
