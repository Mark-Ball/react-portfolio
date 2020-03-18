import React, { Component } from 'react';
import { Topbar, Title } from './styles';
import Hamburger from '../Hamburger/Hamburger';

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
                <Hamburger />
            </Topbar>
        )
    }
}

export default Navbar;