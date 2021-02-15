import { Entry } from 'contentful';

export interface Thumbnail {
    title: string;
    description: string;
    file: {
        url: string;
        details: object;
        fileName: string;
        contentType: string;
    };
}

export interface Avatar {
    title: string;
    description: string;
    file: {
        url: string;
        fileName: string;
        contentType: string;
        details: {
            size: number;
        };
    };
}

export interface Author {
    foto: Entry<Avatar>;
    bio: string;
    email: string;
    nome: string;
    twitter: string;
    funcao: string;
}

export interface Post {
    alias: string;
    body: Entry<object>;
    createdAt: Date;
    descricao: string;
    titulo: string;
    thumb: Entry<Thumbnail>;
    autor: Entry<Author>;
}

export interface Article {
    content: string;
    isEmpty: boolean;
    data: {
        slug: string;
        titulo: string;
        descricao: string;
        data: Date;
        autor: string;
        autorEmail: string;
        autorFoto: string;
        twitter?: string;
    };
}
