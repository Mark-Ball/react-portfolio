import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popup } from './styles';

class NavPopup extends Component {
    render() {
        const { showPopup } = this.props;

        return (
            <Popup className={showPopup && 'open'}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                <p>Download CV</p>
            </Popup>
        )
    }
}

export default NavPopup;