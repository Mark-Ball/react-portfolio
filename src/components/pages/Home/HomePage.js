import React, { Component } from 'react';
import { Container, Title, WebSpan } from './styles';

class HomePage extends Component {
    render() {
        return (
            <Container>
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
        )
    }
}

export default HomePage;