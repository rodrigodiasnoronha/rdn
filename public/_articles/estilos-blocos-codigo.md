---
titulo: Estilos em blocos de código 
descricao: Estilos em blocos de código em NextJs
autor: Rodrigo Dias Noronha
slug: estilos-blocos-codigo
data: Sun Feb 14 2021 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail:rodrigodnoronha@gmail.com 
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa.jpg
---



```js

import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}

```
