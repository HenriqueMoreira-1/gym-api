# APP

# RFs (Requisitos Funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [] Deve ser possível o usuário realizar check-ins em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [] Deve ser possível cadastrar uma academia;

# RNs (Regras de Negócio)

- [] O usuário não deve poder se cadastrar com um email duplicado;
- [] O usuário não pode fazer dois check-ins no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O check-in só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;

# RNFs (Requisitos Não Funcionais)

- [] A senha do usuário precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostreSQL;
- [] Todas listas de dados precisam estar paginadas com 20 items por página;
- [] O usuário deve ser identificado por um JWT;
