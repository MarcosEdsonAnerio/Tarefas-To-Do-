import React, { createContext, useState } from 'react';
import uuid from 'react-native-uuid';

export const TarefaContext = createContext();

export const TarefaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (descricao, detalhes = '') => {
    const novaTarefa = {
      id: uuid.v4(),
      descricao,
      detalhes,
      concluida: false,
    };
    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);
  };

  const alternarConclusao = (id) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const excluirTarefa = (id) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((tarefa) => tarefa.id !== id)
    );
  };

  const atualizarTarefa = (id, novosDados) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, ...novosDados } : tarefa
      )
    );
  };

  return (
    <TarefaContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        alternarConclusao,
        excluirTarefa,
        atualizarTarefa,
      }}
    >
      {children}
    </TarefaContext.Provider>
  );
};
