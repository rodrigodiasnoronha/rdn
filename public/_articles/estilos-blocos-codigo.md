---
titulo: Estilos em blocos de código
descricao: Estilos em blocos de código em NextJS
autor: Rodrigo Dias Noronha
slug: estilos-blocos-codigo
data: Sun Feb 14 2021 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://avatars.githubusercontent.com/u/63525765?v=4
---

Basicamente

Este bloco de código funciona somente no Node, você precisa formatar o html para renderizar corretamente os blocos de código.

Ele utilizar os estilos do PrismJS, logo você também precisa importar o CSS deles no teu front.

```jsx
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}
```
