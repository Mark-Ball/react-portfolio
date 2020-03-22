import React, { Component } from 'react';
import { Popup } from './styles';

class NavPopup extends Component {
    render() {
        const { showPopup } = this.props;

        return (
            <Popup className={showPopup && 'open'}>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
                <p>Download CV</p>
            </Popup>
        )
    }
}

export default NavPopup;