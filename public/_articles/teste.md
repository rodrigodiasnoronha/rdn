---
titulo: Sharing Layout
descricao: When using an approach that has dynamic routing (e.g. /pages/doc/[slug].js), you can wrap the returned React component with a shared.
autor: Rodrigo Dias Noronha
slug: teste
data: Sun Feb 14 2021 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://spng.pngfind.com/pngs/s/16-168465_aws-simple-icons-non-service-specific-user-default.png
---

## Metadata

Metadata allows you to describe the contents of your Markdown file. For example, adding a title and an author of a blog post. If you're using Markdown, gray-matter allows you to write a YAML front-matter like so:

I **love** using [Next.js](https://nextjs.org/)

```js

import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}

```
