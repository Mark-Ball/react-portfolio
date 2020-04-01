import React, { Component } from 'react';
import { Topbar, Title } from './styles';
import Hamburger from '../Hamburger/Hamburger';
import NavPopup from '../NavPopup/NavPopup';

class Navbar extends Component {
    state = {
        showPopup: false
    }

    togglePopup = () => {
        this.setState(state => ({
            showPopup: !state.showPopup
        }));
    }
    
    render() {
        const { showPopup } = this.state;

        return (
            <Topbar>
                <Title>Mark Ball</Title>
                <Hamburger togglePopup={this.togglePopup} showPopup={showPopup} />
                <NavPopup showPopup={showPopup} />
            </Topbar>
        )
    }
}

export default Navbar;