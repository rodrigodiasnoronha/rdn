import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';
import {mdx} from 'micromark-extension-mdx'


export default async function markdownToHtml(markdown: string | any) {
    return micromark(markdown, {
        allowDangerousHtml: true,
        allowDangerousProtocol: true,
        extensions: [gfm(), mdx()],
        htmlExtensions: [gfmHtml()],
    });
}
