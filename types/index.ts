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
