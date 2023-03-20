# CRUD em React com a finalidade didática
## Inicializar o projeto
### Rode o serviço de backend
<hr/>
Entre na pasta <code>backend</code> e execute o comando npm i para instalar as dependências

```
npm i
```
Após, inicialize o serviço que irá simular o serviço REST
```
npm start
```
Isso irá subir uma API em:  http://localhost:3001/users

### Rode o serviço de frontend
<hr/>
Entre na pasta <code>frontend</code> e execute o comando npm i para instalar as dependências

```
npm i
```
Após, inicialize o serviço que irá simular o serviço REST
```
npm start
```
Abra o browser em:  http://localhost:3000
<hr/>


# Como este projeto foi criado:

## Backend

Dentro da pasta backend, criei um serviço REST para nosso front manipular da seguinte forma: 

### Comando para criar packagejson
```
npm init -y
```
### Comando para adicionar uma dependencia no packjson do json server(simula API REST)

```
npm i --save json-server@0.13.0 -E
```
O comando "npm i --save json-server@0.13.0 -E" é usado para instalar a versão 0.13.0 do pacote "json-server" e salvá-lo como uma dependência em seu arquivo package.json.

A flag "--save" significa que o pacote será adicionado às dependências do seu projeto no arquivo package.json.

A flag "-E" significa que o instalador do npm usará a versão exata especificada (no exemplo, 0.13.0) e não instalará uma versão mais recente que possa ser incompatível com seu código.

Em resumo, esse comando instalará a versão 0.13.0 do pacote "json-server" e a adicionará como uma dependência do seu projeto, garantindo que uma versão diferente não seja instalada inadvertidamente no futuro.

### Crie o arquivo db.json, que irá simular o Banco de dados em uma API REST

No arquivo package.json substitua o script de teste por um de start, ficará da seguinte forma 
```
 "scripts": {
    "start": "json-server --watch db.json --port 3001"
  }
```
Pronto, agora basta inserir um json no db.json que você terá todos os endpoint da API implementados!

 ## FrontEnd

Criar um projeto React:
 ```
 npx create-react-app frontend
```

Entre na pasta frontend que foi criada, abra o package.json e adicione as dependencias:

 ```
    "bootstrap": "^4.1.1",
    "font-awesome": "4.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "4.2.0",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
```
Instale as dependências:
 ```
 npm i
```

----------------------
No Arquivo em <code>./public/index.html</code> foi inserida a fonte: 

```
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">
```

