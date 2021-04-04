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
