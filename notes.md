## Styled Components :art: 

<br> 

<b>Por que usar?</b> 

Em várias bibliotecas do front-end é comum e vantajoso usar uma estratégia onde é possível utilizar o CSS dentro de arquivos Javascript. Essa estratégia é chamada de ``` CSS-in-JS```. 

A grande vantagem de usar essa estratégia está na organização. Através desta estratégia é possível criar componentes que são estilizados e diminuir a atribuição de ```classnames=””``` tornando o código mais limpo, escalável e de fácil manutenção. 

Styled-components suporta encadeamento de estilos assim como o Sass. :+1: 

> Em uma aplicação com muita estilização, é essencial utilizar essa estratégia para não se perder nas classes atribuídas no CSS, pois a estilização fica no escopo e se torna mais fácil de manusear e controlar. 

<br> 

<b>Como instalar?</b> 

``` yarn add styled-components ```  

> Biblioteca de CSS-in-JS mais utilizada no mercado atualmente. 

<br> 

<b> Como utilizar? </b> 

- Primeiro passo será necessário realizar o import dentro do arquivo: 
```import styled from ‘styled-components``` 

-Segundo passo é criar um component estilizavel: 

```const Componente = styled.TAG-HTML`` ``` 

-Terceiro passo é envolver o componente criado no elemento: 

```<componente></componente>``` 
<br> 

> Exemplo: Colocar color em um title: 

 
```bash
 
const Title = styled.h1 ` 

	Color: Red; 

	Font-size: 16px; 

` 

<title>Hello World</title> 

``` 

> Usarmos template literals no inicio ( `` ) e as chaves ( {} ) no encadeamento. Exemplo:

```bash
 
const Title = styled.h1 ` 

	Color: Red; 

	Font-size: 16px; 
    
    button {
        color: purple;
    }

` 

<title>Hello World</title> 

``` 

> Polished é um pacote que tem funções e helpers para trabalhar com cores.

```yarn add polished ```

Exemplo de uso:

```import {darken} from 'polished'```

``` border-color: ${darken(0.1, '#fff')}; ```

> Nesse exemplo, border-color vai escurecer 10% a cor #FFF.

Documentação: https://github.com/styled-components/polished

<br>

## Criando front-end sem um back-end :flushed:

<br> 

<b>Problema</b>: 

Na maioria das vezes, existirá uma API-Rest ou uma API-GraphQL servindo dados para o front-end porém, em alguns casos, podemos nos deparar com situações em que o back-end não estará pronto portanto devemos criar soluções, pois sabemos que consumir uma API é bem diferente de produzir uma aplicação com dados estáticos. 

<br> 

<b>Solução</b>: 

Existem algumas ferramentas que podemos usar no desenvolvimento front-end para simular API’s. Entre elas: 

> Tais ferramentas podem ser utilizadas em ambientes de desenvolvimento e teste, porém em produção o ideal é ter um back-end. 

- Json-server https://www.npmjs.com/package/json-server 

- MirageJs  https://miragejs.com/ 

- Mock Service Work (msw) https://mswjs.io/ 

<br> 

<b>Configurando MirageJS</b>:

```yarn add mirajs -D```

- Realizar o import dentro do component:

``` import { createServer } from 'miragejs' ```

- A partir de um fecth definir rota ficticia:

```  fetch(`https://localhost:3000/api/transactions`) ```

- Chamar a função createServer definindo as rotas e seu retorno. Exemplo:

```bash
createServer({
	routes() {
		this.namespace='api'; 
		this.get('/transactions', ()=> {
			return [
				{
					id: 1,
					title: 'transaction1',
					amount: 400,
					type: 'deposit'
				}
			]
		})
	}
})
```

> Lendo essa linha de código:
> chamando a função createServer em /api...
> quando existir requisição na rota /transactions...
> retorne o seguinte vetor...

<br>

## Axios, por quê te quero? :smirk:

<b>O que é?</b>?

Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js

<b>Por quê usar</b>?

- Intercepta requisições e respostas (request & response);

- Transforma respostas em JSON automaticamente. Adeus: ``` .then(response => response.json()) ```

- Faz requisições http.

- Criação de instâncias.

- Suporte a requisições assíncronas.

<b>Como usar</b>?

<ol>
<li>Instalação: ```yarn add axios```.</li><br>

<li>Criar pasta com para colocar o axios: ```src/... mkdir services```.</li><br>

<li>Criar e configurar arquivo: ``` /src/services/api.ts ```.</li><br>

> Essa pasta tem o intuito de ser o serviço de dados, todos os lugares onde eu posso buscar dados e enviar dados pode ser alocado nela.

<li>Dentro desse arquivo importar e instanciar o axios:

```bash
 import axios from `axios`;

 const api = axios.create({
	 baseURL: `https://localhost:3000/api`,
 })
```

> Criar uma instância no Axios: Configurar informações padrões para todas as requisições que vamos fazer.

</li><br>

<li>Ao invés de usar fetch vamos usar a const api criada e utilizar o método get, exemplo:</li>

```bash
    useEffect (() => {
        api.get(`/transactions`)
        .then(response => console.log(response.data))
    }, []);
```
</ol>

## Modal e Forms 

<b>react-modal</b> é uma biblioteca react para construção de modal que trás consigo funcionalidades pré-configuradas de acessibilidade.

> Documentação: https://github.com/reactjs/react-modal







