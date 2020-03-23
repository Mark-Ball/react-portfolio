import React, { Component } from 'react';
import { Pane } from './styles';

class BackgroundPane extends Component {
    render() {
        const { image } = this.props;
        
        return (
            <Pane></Pane>
        )
    }
}

export default BackgroundPane;