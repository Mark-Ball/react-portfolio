import React, { Component } from 'react';
import { HamburgerIcon, Bar } from './styles';

class Hamburger extends Component {
    render() {
        const { togglePopup, showPopup } = this.props;

        return (
            <>
                <HamburgerIcon 
                    className={showPopup && 'open'}
                    onClick={togglePopup}
                >
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </HamburgerIcon>
            </>
        )
    }
}

export default Hamburger;