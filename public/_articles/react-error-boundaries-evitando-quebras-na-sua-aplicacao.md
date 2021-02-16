---
titulo: Error Boundaries - Evitando quebras em suas aplicações ReactJS
descricao:  Uma maneira simples de como evitar que sua aplicação quebre em produção
autor: Rodrigo Dias Noronha
slug: react-error-boundaries-evitando-quebras-na-sua-aplicacao
data: Sun Feb 14 2021 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa_400x400.jpg
---


Quebras em producão.

Não é nada amigável para os seus usuários que seja mostrada uma mensagem de erro com vários códigos que eles (provavelmente) não entendam, certo? Pois isso acontece quando sua aplicação React quebra, e eis que a equipe do ReactJS trouxe uma funcionalidade na lib que resolve essa questão: os Error Boundaries.


### O que são?

Na realidade, um Error Boundary nada mais é do que um componente React, que monitoria os erros de seus componentes filhos. Ou seja, ele é capaz de capturar erros da aplicação e fazer um devido tratamento, como enviar um log para o servidor, etc.

### Tá, mas por quê?

Bem, não é nada atraente mostrar erros de crash da sua aplicação, seja no console.log ou no na própria página. Com base nisso, você pode optar por renderizar outro componente, contendo alguma mensagem de erro e evitar, assim, de que seus usuários vejam o que houve por debaixo dos panos.

### Prática

Bem, acredito que deu pra entender o porquê de se utilizar nas suas aplicações. Então partimos para a prática.

Estou criando um projeto React (com next), você pode criar com o CRA normalmente, isso não faz diferença.

```bash

$ npx create-next-app error-boundaries
```
Ou

```bash
$ npx create-react-app error-boundaries
```
Agora, criaremos o componente que encapsulará nossa aplicação e ficará ouvindo erros. Eu criei o boundary.js e coloque o código abaixo nele

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {

    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

export default ErrorBoundary;
```

Um componente normal, que encapsulará nossa aplicação, mas o React possui um método específico para este componente ficar ouvindo os `crashes`, que seria o método `componentDidCatch`. Este método recebe o error e as informações do erro. No caso você poderia fazer alguma tratamento deste erro ou simplesmente renderizar algum componente que evite o erro na tela do usuário. Seria algo assim, no caso:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>Ocorreu um erro. Atualize a página e tente novamente</h2>
                </div>
            );
        }

        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

export default ErrorBoundary;
```



Feito, isso fará a mensagem de erro ser imprimida ao invés de seus filhos com o erro serem mostrados.

Mas lembre-se de encapsular sua aplicação dentro dessa classe. Segue abaixo:

```jsx
import React from 'react';

const Global = (props) => {
    const { Component, pageProps } = props;

    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
};

export default Global;
```
