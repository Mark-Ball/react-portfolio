import React, { Component } from 'react';
import { Card } from './styles';

class AboutCard extends Component {
    render() {
        const { backgroundColour, title, content } = this.props;
        
        return (
            <Card style={{backgroundColor: backgroundColour}}>
                <h1>{title}</h1>
                <p>{content}</p>
            </Card>
        )
    }
}

export default AboutCard;