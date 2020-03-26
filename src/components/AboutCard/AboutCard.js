import React, { Component } from 'react';
import { Card, IconContainer } from './styles';

class AboutCard extends Component {
    state = {
        showContent: false
    }
    
    handleClick = () => {
        this.setState({ showContent: !this.state.showContent });
    }
    
    render() {
        const { imageUrl, title, content } = this.props;
        const { showContent } = this.state;
        
        return (
            <Card>
                <IconContainer 
                    style={{backgroundImage: `url(${imageUrl})`}}
                    onClick={this.handleClick}
                />
                <h1>{title}</h1>
                <p className={showContent ? 'show' : undefined}>{content}</p>
            </Card>
        )
    }
}

export default AboutCard;