import React from 'react';
import { MdSentimentNeutral } from 'react-icons/md';
import Button from '@/components/Button';
import styled from 'styled-components';

interface Props {
    message: string;
}

const Error: React.FC<Props> = ({ message }) => (
    <Container>
        <MdSentimentNeutral style={{ color: '#e02041' }} size={100} color="#e02041" />

        <span>{message}</span>

        <Button onClick={() => window.location.reload()}>Tentar novamente</Button>
    </Container>
);

const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }
`;

export default Error;
