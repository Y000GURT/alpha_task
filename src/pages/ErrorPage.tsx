import React from 'react'
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

interface Error {
    statusText: string;
    message: string;
}

const ErrorPageContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
`
const Title = styled.h1`
    font-size: 3rem;
`
const ErrorText = styled.p`
    font-style: italic;
    font-size: 2rem;
    color: #b9b9b9;
`
function ErrorPage() {
    const error = useRouteError() as Error

    return ( 
        <ErrorPageContainer>
            <Title>Уупс! Что-то пошло нет так</Title>
            <ErrorText>{error.statusText || error.message}</ErrorText>
        </ErrorPageContainer>
    );
}

export default ErrorPage;