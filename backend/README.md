### Seleção para Auxiliar de Programação - Teste Prático
#### 1. Objetivo

Desenvolver uma agenda de contatos com as seguintes funcionalidades e características:
  - A interface da agenda deve ser disponibilizada por meio de uma página web;
  - A inserção e edição de registros deverá ser através de um modal  ;
  - A interface web (frontend) deve interagir com a aplicação backend   via API REST;
  - Os registros devem ser inseridos em um banco de dados relacional.

##

Os contatos devem ser listados em ordem alfabética pelo nome.
  - Botão "Novo":
      - Localizado no canto superior direito.
      - Abre o modal descrito em 1.2. Tela de Edição/Inserção de Contatos.
  - Botão "Editar":
      - Inicia o modal de edição com os dados do contato selecionado já preenchidos.
  - Botão "Excluir":
      - Solicita confirmação do usuário para exclusão.
      - Em caso de confirmação, remove o contato do banco de dados.
      - Exibe uma notificação de confirmação da exclusão.
      - Atualiza a lista de contatos automaticamente após a exclusão.
##

Apresentada em formato de janela flutuante (modal).
  - Campos do Formulário:
      - Todos são obrigatórios.
      - Campo de telefone com máscara.
      - Validador de e-mail.
      - Campo "Data de Nascimento" com "Date Picker" para seleção de data.
      - O botão “Selecionar Arquivos” deve aceitar apenas arquivos do tipo imagem.
  - Botão "Cancelar":
      - Fecha o modal sem salvar as alterações.
  - Botão "Salvar":
      - Realiza validações de campo.
      - Notifica o usuário se algum campo estiver incompleto ou inválido.
      - Em caso de todos os campos estarem corretos, envia os dados para o servidor.
      - Notifica o usuário sobre o sucesso da operação.
      - Atualiza a lista de contatos na Tela Principal.


Carne de sol+ cheiro verde, calabresa +cheiro verde e doce sem queijo.