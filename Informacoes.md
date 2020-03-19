## Executar o projeto

### API

Coloque a senha para o banco de dados ou coloque outro no arquivo src/server.js.

Entre no projeto e instale as dependências e em seguida execute o comando de produção.

`npm install`

`npm run production`

Caso queira reiniciar a api:

`npm run restart`

## Front

Entre no projeto e instale as dependências e em seguida execute o comando de de build e start:

`npm install`

`npm run build`

`npm run start`


## Algumas informações de adições feitas no projeto

### API

- Fora as rotas pedidas, foi acrescetada mais uma: stores/:storeId. Ela retorna a loja cujo id foi informado.

- Foi acrescentado uma funcionalidade a mais na rota de deletar loja. Quando deleta uma loja, todos os produtos dela são deletados também.

### Front

- Todos os liks internos vão para uma rota genérica e dinâmica que mostra onde o cliente queria ir.

- Foi acrescentada uma página (/produtos) para mostrar todos os produtos, ela pode ser acessada através do link de ver todos a cima do slide.