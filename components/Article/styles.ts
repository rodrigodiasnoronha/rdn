import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid transparent;
  border-top-color: var(--lucyPure2);

  padding-top: 15px;
  display: flex;

  .title {
    flex: 5;
  }

  .title a {
    color: #333;
    font-size: 28px;
    font-family: Jost, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }

  .title a:hover {
    color: var(--lucyOrange);
    transition: color 0.5s;
  }

  .date {
    flex: 1;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date time {
    color: var(--textGray);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    padding: 10px;
    padding-top: 15px;

    .title {
      padding: 5px;
    }

    .title a {
      font-size: 1.2rem;
    }

    .date time {
      font-size: 0.8rem;
    }
  }
`;
