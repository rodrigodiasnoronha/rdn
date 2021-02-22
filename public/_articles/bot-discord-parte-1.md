---
titulo: Discord Bot - parte 1 - Estruturando o BOT
descricao: Desenvolvendo um Bot para Discord
autor: Rodrigo Dias Noronha
slug: bot-discord-parte-1
data: Sun Feb 21 2021 19:19:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa_400x400.jpg
---

Fala, pessoal! Saudações!

Aqui tentarei explicar para vocês como dar um `start` no desenvolvimento de um Bot para Discord utilizando TypeScript. Deixei separado algumas anotações sobre nosso projeto:

-   Utilizaremos a [API do Discord para javascript](https://discord.js.org/#/) para desenvolver nosso BOT.
-   Utilizaremos TypeScript
-   Utilizaremos o TypeORM para armazenar nossos dados (será abordado mais pra frente)
-   Também deixaremos ele com internacionalização (vamos estruturar isso mais a frente também)

Lógico, este conteúdo irá conter somente a criação do bot, pretendo colocar a estruturação e conexão com database usando TypeORM em outros artigos.

Se você nunca teve contato com criação de Bots para Discord, sugiro dar uma olhada no [guia oficial da API do Discord.js](https://discordjs.guide/), nele contém algumas informações importantes acerca de vários tópicos que interessantes na hora de desenvolver. Caso você se aventure a fundo no desenvolvimento, pode ter este guia como base para futuros problemas (que sempre aparecem).

### Vamos lá

Muito provavelmente vocês já possuem uma conta no [Discord](discord.com/). Caso não tenham, recomendo criar, será necessário para darmos prosseguimento.

Próximo passo: [Acessar o site do portal de Desenvolvedores do Discord](https://discord.com/developers/applications) com sua conta do Discord (caso ainda não esteja logado) e clicar no botão `new application` (ou `nova aplicação`), no canto superior direito da sua tela.

![imagem_1](https://raw.githubusercontent.com/rodrigodiasnoronha/rdn/master/public/images/criando-bot-discord-part-1/imagem_1.PNG)

Será solicitado o nome da sua aplicação (não o nome do BOT em si), é como se fosse o nome do seu projeto, preencha e coloque de acordo com o que queira.

Você será redirecionado para a tela `dashboard` do seu projeto, não configure nada, apenas clique em `Bot` no menu lateral.

![imagem_2](https://raw.githubusercontent.com/rodrigodiasnoronha/rdn/master/public/images/criando-bot-discord-part-1/imagem_2.PNG)

Clique em `add bot`;

Pronto. Você criou um Bot. Nesta nova tela que abriu, você pode configurar a imagem dele e o nome dele, para caso queira mudar mais a frente.

Recomendo copiarem o `token` abaixo do campo de `username`. Vamos usa-lo mais a frente.

![imagem_3](https://raw.githubusercontent.com/rodrigodiasnoronha/rdn/master/public/images/criando-bot-discord-part-1/imagem_3.PNG)

### Adicionando o BOT em um servidor.

Sim, este passo é importante. Geralmente, quando você desenvolve um BOT, você testa se esta tudo ok em um servidor de desenvolvimento. Eu recomendo você criar um novo servidor no Discord.

Em seguida, na nossa tela de gerenciamento do BOT, clique em `OAuth2` no menu lateral, desça a página até as seguintes opções.

![imagem_4](https://raw.githubusercontent.com/rodrigodiasnoronha/rdn/master/public/images/criando-bot-discord-part-1/imagem_4.PNG)

Selecione a opção `BOT` e copie o link abaixo dela.

Mas perai, repare no link que você copiou, ele possui uma parte `permissions=0`. Isso é referente as permissões do BOT dentro do servidor. O valor `0` quer dizer que o BOT não tem nenhuma permissão especial, logo ele não conseguiria banir um membro, por exemplo. Nós não queremos isso, se você descer um pouco mais a página, verá que tem um outro campo com várias opções, selecione a opção `Administrador`. Assim que você selecionar, verá que o `permissions=0` mudou para `permissions=8`. Isso quer dizer que a permissão do seu BOT será de `administrador` em qualquer servidor que ele for adicionado.

Você pode usar essas configurações e ver qual agrada mais o propósito do seu BOT. Eu gosto de colocar `administrador` para evitar que os usuários do bot reclamem que o bot não está funcionando, pois está sem permissão de enviar mensagens, ou qualquer problema relacionado.

Enfim, vamos prosseguir.

### Iniciando o projeto

Bem, se você está aqui, provavelmente já tem o [Node](https://nodejs.org/en/) instalado e alguma editor de código, tipo o [VSCode](https://code.visualstudio.com/), o editor de código da Microsoft.

Vamos criar um diretório e acessar ele

```bash
  $ mkdir discord-bot && cd discord-bot
```

Agora, as dependências do nosso projeto. Precisaremos instalar o TypeScript, a lib do Discord.js e o dotenv, para usarmos variáveis de ambiente no nosso projeto e o ts-node-dev, para usarmos não precisarmos ficar parando e executando a aplicação a cada mudança no código. Eis o código de instalação abaixo:

```bash
  $ npm i discord.js dotenv && npm i typescript -D
```

ou, caso você use o `yarn`

```bash
  $ yarn add discord.js dotenv && yarn add typescript -D
```

Tá, mãos ao código, vamos seguir alguns passos:

Vamos criar um arquivo `.env` na raiz do projeto. Vamos criar uma váriavel chamada `BOT_TOKEN` e adicionar o token do BOT que você copiou.

```env
BOT_TOKEN=cole_seu_token_aqui
```

Criar uma pasta `src` e criar um arquivo chamado `index.ts` dentro.

Nosso arquivo `src/index.ts` será o arquivo de entrada de nosso BOT, então o passo vai ser o seguinte: vamos criar uma classe que será responsável por dar um `start` no nosso bot.

```ts
// src/index.ts

import 'dotenv/config'; // faz a gente ser capaz de usar as váriaveis de ambiente.
import { Client } from 'discord.js';

class Bot {
    token = process.env.BOT_TOKEN as string; // token do bot
    client = new Client(); // instância do client do nosso BOT

    // este método inicia o bot
    async start() {
        await this.client.login(this.token); // inicia o client do BOT (inicia o BOT)
    }
}

const bot = new Bot();
bot.start();
```

Bom, esta classe tem a única responsabilidade de iniciar o nosso BOT, ela possui as propriedades `client` e `token` pois são essenciais para iniciarmos nosso BOT.

Em nosso arquivo `package.json`, vamos adicionar a linha um comando para iniciar o nosso BOT. Lembre-se de adiciona-lo dentro da propriedade `scripts`

```json
{
    "dev": "ts-node-dev src/index.ts"
}
```

Feito isso, abra um terminal no diretório do projeto e execute o comando abaixo:

```bash
  $ npm run dev
```

ou

```bash
  $ yarn dev
```

Abra o navegador em que seu BOT esta e voalá, ele estará online.

No próximo tutorial irei mostrar como adicionar um comando nele, mesmo que seja simples. Vou pensar em um comando bacana. Logo em seguida, iremos deixar uma estrutura bem bacana também, para que a gente tenha uma fácil manutenção no nosso BOT.

Até a próxima!
