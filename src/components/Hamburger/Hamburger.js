import React, { Component } from 'react';
import { HamburgerIcon } from './styles';

class Hamburger extends Component {
    render() {
        const { togglePopup, showPopup } = this.props;

        return (
            <>
                <HamburgerIcon 
                    className={showPopup && 'open'}
                    onClick={togglePopup}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </HamburgerIcon>
            </>
        )
    }
}

export default Hamburger;