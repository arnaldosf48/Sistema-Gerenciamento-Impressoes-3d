# Sistema de Armazenamento de Informações do Projeto Lexim

## Descrição do Projeto

Este sistema tem como objetivo armazenar, organizar e gerenciar informações relacionadas às impressões do projeto Lexim. Ele permite registrar dados sobre projetos, impressões realizadas, usuários responsáveis e status das operações, garantindo acessibilidade e eficiência no acompanhamento dessas informações.

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


Link para o protótipo: *(Adicionar link ao finalizar)*

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
