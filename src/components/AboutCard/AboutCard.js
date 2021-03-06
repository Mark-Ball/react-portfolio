import React, { Component } from 'react';
import { Card, IconContainer } from './styles';

class AboutCard extends Component {
    state = {
        showContent: false
    }
    
    handleClick = () => {
        this.setState(state => ({
            showContent: !state.showContent
        }));
    }
    
    render() {
        const { img, title, content } = this.props;
        const { showContent } = this.state;
        
        return (
            <Card>
                <IconContainer 
                    src={img}
                    onClick={this.handleClick}
                />
                <h1>{title}</h1>
                <p className={showContent ? 'show' : undefined}>{content}</p>
            </Card>
        )
    }
}

export default AboutCard;