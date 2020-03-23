import React, { Component } from 'react';
import { Container, Title, WebSpan } from './styles';
import BackgroundPane from '../../BackgroundPane/BackgroundPane';

class HomePage extends Component {
    render() {
        return (
            <>
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
                <BackgroundPane />
                <BackgroundPane />
                <BackgroundPane />
                </Container>
            </>
        )
    }
}

export default HomePage;