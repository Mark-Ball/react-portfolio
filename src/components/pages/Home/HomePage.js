import React from 'react';
import { Container, Title, WebSpan, Background } from './styles';

const HomePage = () => {
    return (
        <>
            <Container>
                <Background image='home-office.jpg' />
                <Title>
                    FULL
                    <br/>
                    STACK
                    <br/>
                    <WebSpan>Web</WebSpan>
                    <br/>
                    DEVELOPER
                </Title>
            </Container>
        </>
    )
}

export default HomePage;