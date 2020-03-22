import React, { Component } from 'react';
import { Topbar, Title, Box } from './styles';
import Hamburger from '../Hamburger/Hamburger';
import NavPopup from '../NavPopup/NavPopup';

class Navbar extends Component {
    state = {
        showPopup: false,
        titleHovered: false
    };

    togglePopup = () => {
        this.setState({ showPopup: !this.state.showPopup })
    };

    handleMouseEnter = () => {
        this.setState({ titleHovered: true })
    };

    handleMouseLeave = () => {
        this.setState({ titleHovered: false });
    }
    
    render() {
        const { showPopup, titleHovered } = this.state;

        return (
            <Topbar>
                <Title 
                    className={titleHovered && 'titleHovered'} 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    Mark Ball
                </Title>
                <Hamburger togglePopup={this.togglePopup} showPopup={showPopup} />
                <NavPopup showPopup={showPopup} />
            </Topbar>
        )
    }
}

export default Navbar;