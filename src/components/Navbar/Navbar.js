import React, { Component } from 'react';
import { Topbar, Title } from './styles';

class Navbar extends Component {
    state = {
        showPopup: false
    };

    handleClick = () => {
        this.setState({ showPopup: !this.state.showPopup })
    };
    
    render() {
        return (
            <Topbar>
                <Title>Mark Ball</Title>
                <button onClick={this.handleClick}>hamburger</button>
            </Topbar>
        )
    }
}

export default Navbar;