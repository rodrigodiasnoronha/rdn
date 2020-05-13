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
  avatar: Entry<Avatar>;
  bio: string;
  email: string;
  name: string;
  twitter: string;
  instagram?: string;
  facebook: string;
}

export interface Post {
  alias: string;
  body: string;
  createdAt: string;
  description: string;
  views: number;
  title: string;
  thumbnail: Entry<Thumbnail>;
  author: Entry<Author>;
}
