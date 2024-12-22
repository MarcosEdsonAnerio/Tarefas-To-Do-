# Aplicativo de Lista de Tarefas (To-Do) com React Native
Este repositório contém o código-fonte de um aplicativo de lista de tarefas desenvolvido com React Native. O projeto tem como objetivo permitir que os usuários possam adicionar, marcar como concluídas, excluir tarefas e persistir os dados localmente utilizando o AsyncStorage.

## 📌 Objetivo do Projeto

O objetivo principal deste projeto é criar um aplicativo funcional de lista de tarefas (To-Do), com as seguintes funcionalidades:

* Adicionar Tarefas: O usuário pode digitar a tarefa em um campo de entrada e adicioná-la à lista.
* Marcar como Concluída: As tarefas podem ser marcadas como concluídas ou pendentes, proporcionando ao usuário um controle mais eficaz.
* Excluir Tarefas: As tarefas podem ser removidas da lista a qualquer momento.
* Persistir Dados: O estado das tarefas é salvo localmente utilizando o AsyncStorage, garantindo que as tarefas persistam mesmo após o aplicativo ser fechado e reaberto.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

* React Native: Framework para o desenvolvimento de aplicativos móveis.
* Context API: Para gerenciamento do estado global das tarefas.
* Hooks (useState, useEffect): Para controle do estado e carregamento de dados de forma eficiente.
* AsyncStorage: Para armazenar e recuperar dados localmente no dispositivo.
* React Native Reanimated (opcional): Para adicionar animações suaves, como ao marcar uma tarefa como concluída.

## ⚙️ Funcionalidades Principais

* Adicionar Tarefas: O usuário pode inserir tarefas em um campo de entrada e adicioná-las à lista.
* Marcar como Concluída: O usuário pode alternar o estado das tarefas entre concluídas e pendentes.
* Excluir Tarefas: As tarefas podem ser removidas da lista com um simples toque.
* Persistência Local: As tarefas são armazenadas localmente, utilizando o AsyncStorage, e o estado da lista é mantido entre as sessões do aplicativo.

## ⚙️⚙️ Funcionalidades Extras (Opcionais)

* Barra de Filtro: O usuário pode filtrar as tarefas para visualizar todas, apenas as concluídas ou apenas as pendentes.
* Animação de Conclusão: Ao marcar uma tarefa como concluída, uma animação simples é executada para dar um feedback visual ao usuário.

## 📐 Estrutura do Projeto

O projeto é composto pelas seguintes pastas principais:

* components: Contém os componentes principais da interface, como a lista de tarefas, entrada de tarefas e botões.
* contexts: Contém o arquivo de gerenciamento do estado global utilizando a Context API.
* storage: Responsável pela configuração do AsyncStorage para persistir dados localmente.
* App.js: Arquivo principal que configura a navegação e as funcionalidades do aplicativo.

## ✒️ Autores

Este projeto foi desenvolvido como parte das atividades da disciplina de IOT pelos seguintes alunos:

* **Marcos Edson Anerio Dos Santos** - *Desenvolvedor* - [Marcos Edson](https://github.com/MarcosEdsonAnerio)

Professor responsável:

* **Karan Luciano** - [Karan Luciano](https://github.com/Prof-Karan-Luciano)

---

Somente altere os textos, deixe no mesmo sentido, é para criação do github, é desse jeito que faz, faça de acordo com essa atividade feita
