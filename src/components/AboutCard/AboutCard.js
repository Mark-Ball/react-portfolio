import React, { Component } from 'react';
import { Card, IconContainer } from './styles';

class AboutCard extends Component {
    render() {
        const { imageUrl, title, content } = this.props;
        
        return (
            <Card>
                <IconContainer style={{backgroundImage: `url(${imageUrl})`}} />
                <h1>{title}</h1>
                <p>{content}</p>
            </Card>
        )
    }
}

export default AboutCard;