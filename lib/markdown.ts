import { micromark } from 'micromark';

export default async function markdownToHtml(markdown: string | any) {
    return micromark(markdown)
}
