import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput, Animated } from 'react-native';
import { TarefaContext } from './Tarefa';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const [descricao, setDescricao] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [filtro, setFiltro] = useState('Todas');

  const { tarefas, adicionarTarefa, alternarConclusao, excluirTarefa } = useContext(TarefaContext);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [tarefas]);

  const adicionarComAnimacao = () => {
    if (descricao.trim()) {
      adicionarTarefa(descricao);
      setDescricao('');
      setModalVisivel(false);
    }
  };

  const excluirComAnimacao = (id) => {
    excluirTarefa(id);
  };

  const cancelarAdicionarTarefa = () => {
    setDescricao('');
    setModalVisivel(false);
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'Todas') return true;
    if (filtro === 'Concluídas') return tarefa.concluida;
    if (filtro === 'Pendentes') return !tarefa.concluida;
  });

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botões */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisivel(true)}>
          <Text style={styles.addButtonText}>+ Nova Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => {
          const filtros = ['Todas', 'Concluídas', 'Pendentes'];
          const indiceAtual = filtros.indexOf(filtro);
          const proximoFiltro = filtros[(indiceAtual + 1) % filtros.length];
          setFiltro(proximoFiltro);
        }}>
          <Text style={styles.filterButtonText}>Filtro: {filtro}</Text>
        </TouchableOpacity>
      </View>

      {/* O  modal de Adicionar Tarefa */}
      <Modal visible={modalVisivel} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Digite a tarefa"
              value={descricao}
              onChangeText={setDescricao}
            />
            <TouchableOpacity style={styles.button} onPress={adicionarComAnimacao}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCancel} onPress={cancelarAdicionarTarefa}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Aqui é a lista de Tarefas */}
      <FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View style={[styles.tarefaContainer, { opacity: fadeAnim }]}>
            <View style={styles.tarefaRow}>
              <TouchableOpacity
                onPress={() => alternarConclusao(item.id)}
                style={[styles.tarefa, item.concluida && styles.tarefaConcluida]}
              >
                <Text style={[styles.tarefaTexto, item.concluida && styles.tarefaTextoConcluida]}>
                  {item.descricao}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirComAnimacao(item.id)}>
                <Ionicons name="trash-bin" size={24} color="#FF6F61" />
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  filterButton: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  filterButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 15,
    width: '85%',
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonCancel: {
    backgroundColor: '#FF6F61',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#FF6F61',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tarefaContainer: {
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  tarefaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  tarefa: {
    flex: 1,
  },
  tarefaTexto: {
    fontSize: 16,
    color: '#333',
  },
  tarefaTextoConcluida: {
    textDecorationLine: 'line-through',
    color: '#B0B0B0',
  },
  tarefaConcluida: {
    backgroundColor: '#E0FFE0',
  },
});

export default Home;
