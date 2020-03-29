import React, { Component } from 'react';
import { Div } from './styles';
import IntersectionObs from '../IntersectionObs/IntersectionObs';

class TransitionScroller extends Component {
    state = { 
        visible: false
    }

    onVisible = () => {
        this.setState({ visible: true });
    }
    
    render() {
        const { visible } = this.state;

        return (
            <Div className={visible ? undefined : 'unseen'}>
                <IntersectionObs onVisible={this.onVisible}>
                    {this.props.children}
                </IntersectionObs>
            </Div>
        )
    }
}

export default TransitionScroller;