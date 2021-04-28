---
titulo: Beautify code in your Next.js blog
descricao: code in your Next.js blog
autor: Rodrigo Dias Noronha
slug: beautiful-code-in-your-nextjs-project
data: Sun Feb 14 2021 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://avatars.githubusercontent.com/u/63525765?v=4
---

It definitely took me way too long to get code blocks correctly highlighted on my blog. Next.js seems to have less tutorials out there in general, especially for specific use cases like these. I hope to fix that, at least a little bit, with my own blog. As I experience issues and overcome each challenge, my plan is to write up a post about it. Here's #1!

### Quick Background

As a starting point, I want to outline the architecture of my website. As Next.js goes, I have page components in the /pages directory. Blog posts are generated dynamically via the `/pages/blog/[slug].tsx` page, where the getInitialProps function pulls content from the .md files located in the /posts folder.

### Before Highlight.js

For a visual, below is what the BlogPostTemplate component looked like before I did anything fancy. I will only include the relevant code to keep it short, but feel free to view the entire file in the repo.

```jsx
<article className="mb-10 markdown">
    <header>
        <h1 className="text-5xl">{frontmatter.title}</h1>
    </header>
    <div className="mb-5 my-auto text-sm font-semibold text-neutral-400">{reformatDate(frontmatter.date)}</div>
    <div>
        <ReactMarkdown source={markdownBody} />
    </div>
</article>
```

Notice that this code simply applies a title, date, and the contents of the .md file. By default, inline code and code blocks were not nicely styled, and of course I wasn't satisfied with that. Luckily, react-markdown takes an optional parameter called renderers where we can provide a custom style to HTML tags of our choosing. This is where it got confusing - I had to dive into the source code to figure out what exactly I needed to pass to it.

```jsx
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/nord.css';
```

After a lot of trial and error, I realized I needed to create a custom component to pass to renderers. I'm sure there are other ways to do this, but this made the most sense to me, and it worked quite nicely.
