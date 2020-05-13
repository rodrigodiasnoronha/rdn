import React from 'react';
import Link from 'next/link';
import { Post } from '../../types';
import { Entry } from 'contentful';
import { Container } from './styles';

interface Props {
  data: Entry<Post>;
}

const Article: React.FC<Props> = ({ data }) => {
  function formatDay(dateReceived: string) {
    return new Date(dateReceived).getDate();
  }

  function formatMonth(dateReceived: string) {
    const month = new Date(dateReceived).getMonth() + 1;

    switch (month) {
      case 1:
        return 'JAN';

      case 2:
        return 'FEB';

      case 3:
        return 'MAR';

      case 4:
        return 'APR';

      case 5:
        return 'MAY';

      case 6:
        return 'JUN';

      case 7:
        return 'JUL';

      case 8:
        return 'AUG';

      case 9:
        return 'SEP';

      case 10:
        return 'OCT';

      case 11:
        return 'NOV';

      case 12:
        return 'DEC';

      default:
        return String(month);
    }
  }

  function formatYear(dateReceived: string) {
    return new Date(dateReceived).getFullYear();
  }

  return (
    <Container>
      <div className="title">
        <Link href={`/${data.fields.alias}`}>
          <a>{data.fields.title}</a>
        </Link>
      </div>

      <div className="date">
        <time>
          {formatMonth(data.fields.createdAt)}{' '}
          {formatDay(data.fields.createdAt)}
          {', '}
          {formatYear(data.fields.createdAt)}
        </time>
      </div>
    </Container>
  );
};

export default Article;
