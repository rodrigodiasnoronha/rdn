---
titulo: Colinha: Estilizando HTML do NextJS
descricao: Uma breve explicação de como estilizar o HTML do NextJS
autor: Rodrigo Dias Noronha
slug: colinha-estilizando-html-do-nextjs
data: Wed Feb 24 2021 12:26:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa_400x400.jpg
---

Boa tarde, leitor!

Estou deixando abaixo uma cola de como estilizar o HTML do Nestjs, para consulta quando eu (ou você) esquecer de como configurar.

Até porque, senhores, não tem como decorar todo código que se faz e se vê por aí! 

PS: É o arquivo `_document.tsx` no diretório `pages`. Por questão de recomendação da equipe do NextJS, é recomendado criar este componente em formato de classe.

```tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 *
 * É carregado somente uma vez na aplicação
 *
 * Retorna o HTML da página (importando a tag  HTML, Head, Main e NextScript) de dentro do Next/document
 *
 * recomendao colocar links globais do head aqui
 *
 */

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="favicon.png" type="image/png" />

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

```

Até a próxima!
