# Sistema de Armazenamento de Informações do Projeto Lexim

## Descrição do Projeto

Este sistema tem como objetivo armazenar, organizar e gerenciar informações relacionadas às impressões do projeto Lexim. Ele permite registrar dados sobre projetos, impressões realizadas, usuários responsáveis e status do projeto, garantindo acessibilidade e eficiência no acompanhamento dessas informações.

---

## Funcionalidades Principais

1. **Gerenciamento de Projetos**:
   - Cadastro, edição e exclusão de projetos.
   - Armazenamento de detalhes como nome, descrição, data de criação e responsável.

2. **Registro de Impressões**:
   - Registro de novas impressões associadas a projetos.
   - Atualização de status e descrição das impressões realizadas.

3. **Gerenciamento de Usuários**:
   - Cadastro de usuários com controle de autenticação (login/senha).
   - Associação de usuários aos projetos.

4. **Relatórios e Consultas**:
   - Listagem de projetos e impressões com filtros por status e data.
   - Relatórios sobre a atividade dos projetos e seus responsáveis.

---

## Divisão de Tarefas da Equipe

| Membro          | Função                                     |
|------------------|-------------------------------------------|
| Arnaldo Filho    | Projects e Arquitetura de Classes                  |
| Francisco Ameson |  Revisão de funcionalidades e testes finais     |
| Gustavo Abreu    | Configuração do Banco de Dados                  |
| Lívia Coelho     | Design e prototipação de telas no Figma   |
| Olavo Levir      | Integração Backend com Frontend |
| Thiago Sales     | Design e prototipação de telas no Figma   |


## Tecnologias Utilizadas

- **Frontend**: ReactJS e Axios.
- **Backend**: Node.js.
- **Banco de Dados**: Estruturação para armazenamento eficiente das entidades principais do sistema.

---

## Protótipo

O protótipo do sistema foi desenvolvido no Figma e apresenta:
- TELA 1- Login(Livia)
- TELA 2- Principal(Thiago)
    -  Barra de navegação (Logo, Perfil, estoque,barra de pesquisa,filtro)
    - Feed com Relatório das Impressões (em andamento e finalizadas)
    - Ícone de ADD impressões, Ícone de ADD relatórios
- TELA 3- Perfil(Livia)
    - Informações da conta
- TELA 3- Perfil (Adm)(Livia)
    - Informações da conta
    - Cadastrar colaboradores (tela 4)
    - Visualizar colaboradores (editar e excluir)
    - CRUD estoque
- TELA 4- Cadastro(Livia)
    - Add matrícula
    - Opção de Bolsista
- TELA 5-RUD Colaboradores (ADM) (Thiago)
    - Visualizar
    - Editar
    - Excluir
- TELA 6- Add impressões(Thiago)
    - Estoque visualizar
    - Nome
    - Material
    - Arquivo
- TELA 7- Agenda das impressoras(Thiago)
    - Calendário
- TELA 8- Meus Relatórios (Livia)
- TELA 9- CRUD estoque(Thiago)

Link para o protótipo [Usuario](https://www.figma.com/proto/PRsqPPyF5Lc6yoO5i8BI7H/Projeto-Integrador-2?page-id=2%3A2&node-id=12-80&p=f&viewport=502%2C101%2C0.12&t=6VW1OgGm0QOJmoQG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12%3A80&show-proto-sidebar=1)

Link para o protótipo [Administrador](https://www.figma.com/proto/PRsqPPyF5Lc6yoO5i8BI7H/Projeto-Integrador-2?page-id=55%3A2&node-id=85-1817&p=f&viewport=502%2C233%2C0.06&t=wVOuXSw2RZBPLefN-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=85%3A1817 )

---


## Diagrama de Classes 

### 1. Projeto

**Atributos:**
- `idProjeto`: Identificador único do projeto.
- `nome`: Nome do projeto de impressão.
- `descricao`: Descrição detalhada do projeto.
- `dataCriacao`: Data de criação do projeto.
- `responsavel`: Nome do responsável pelo projeto.

**Métodos:**
- `salvarProjeto()`: Salva as informações de um projeto no sistema.
- `visualizarProjeto()`: Exibe as informações detalhadas do projeto.


### 2. Usuario

**Atributos:**
- `idUsuario`: Identificador único do usuário.
- `nome`: Nome do usuário.
- `email`: Endereço de e-mail do usuário.
- `senha`: Senha de acesso do usuário.
- `tipoUsuario`: Tipo do usuário (comum ou administrador).

**Métodos:**
- `login()`: Realiza o login do usuário no sistema.
- `logout()`: Realiza o logout do usuário no sistema.


### 3. Administrador

**Métodos:**
- `gerenciarUsuarios()`: Permite ao administrador adicionar, editar ou remover usuários.
- `visualizarLogSistema()`: Exibe o log de eventos do sistema.
- `gerenciarProjetos()`: Permite ao administrador gerenciar os projetos de impressão, como editar ou excluir.


### 4. UsuarioComum

**Métodos:**
- `visualizarProjetos()`: Permite ao usuário comum visualizar os projetos disponíveis.
- `visualizarHistorico()`: Exibe o histórico de impressões realizadas pelo usuário.
- `editarPerfil()`: Permite que o usuário comum edite suas informações pessoais.

### 5. Sistema

**Atributos:**
- `listaUsuarios`: Lista de todos os usuários registrados no sistema.
- `listaProjetos`: Lista de todos os projetos de impressão registrados.
- `listaNotificacoes`: Lista de todas as notificações geradas pelo sistema.
- `statusSistema`: Indica o status atual do sistema (ex: "ativo", "inativo").
- `usuarioAtual`: O usuário que está atualmente logado no sistema.

**Métodos:**
- `gerenciarUsuarios()`: Gerencia as operações relacionadas a usuários (adicionar, remover, editar).
- `gerenciarProjetos()`: Gerencia as operações relacionadas aos projetos de impressão.
- `gerenciarImpressoes()`: Gerencia as operações de impressão (iniciar, parar, verificar status).
- `gerenciarNotificacoes()`: Gerencia as notificações (criar, visualizar, excluir).
- `configurarSistema()`: Realiza configurações gerais do sistema.


### 6. Impressao

**Atributos:**
- `idImpressao`: Identificador único da impressão.
- `dataImpressao`: Data e hora em que a impressão foi realizada.
- `status`: Status da impressão (ex: "em andamento", "concluída", "erro").
- `descricao`: Descrição do processo de impressão ou do projeto impresso.


### 7. Notificacao

**Atributos:**
- `idNotificacao`: Identificador único da notificação.
- `mensagem`: Texto da notificação (ex: "Impressão concluída").
- `tipoNotificacao`: Tipo da notificação (ex: "sucesso", "erro").
- `lida`: Indica se a notificação foi lida (true ou false).

**Métodos:**
- `gerarNotificacao()`: Cria uma nova notificação com base em uma mensagem e tipo.
- `exibirNotificacao()`: Exibe a notificação para o usuário.
- `marcarComoLida()`: Marca a notificação como lida.
- `obterNotificacao()`: Retorna uma notificação com base no seu identificador.

---

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Realize as alterações desejadas.
4. Envie suas alterações: `git push origin minha-feature`.
5. Abra um Pull Request explicando sua contribuição.

---

## Equipe de Desenvolvimento

- **Coordenador:** Prof. Arnaldo
- **Equipe:** Arnaldo Filho, Francisco Ameson, Gustavo Abreu, Lívia Coelho, Olavo Levir e Thiago Sales.

---
