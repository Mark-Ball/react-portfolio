import React, { Component } from 'react';
import { Topbar, Title } from './styles';
import Hamburger from '../Hamburger/Hamburger';

class Navbar extends Component {
    state = {
        showPopup: false,
        titleHovered: false
    };

    handleClick = () => {
        this.setState({ showPopup: !this.state.showPopup })
    };

    handleMouseEnter = () => {
        this.setState({ titleHovered: true })
    };

    handleMouseLeave = () => {
        this.setState({ titleHovered: false });
    }
    
    render() {
        const { titleHovered, hamburgerHovered } = this.state;

        return (
            <Topbar>
                <Title 
                    className={titleHovered && 'titleHovered'} 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    Mark Ball
                </Title>
                <Hamburger />
            </Topbar>
        )
    }
}

export default Navbar;