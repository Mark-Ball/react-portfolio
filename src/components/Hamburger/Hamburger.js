import React, { Component } from 'react';
import { HamburgerIcon, Bar } from './styles';

class Hamburger extends Component {
    state = {
        open: false
    };

    handleClick = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };
    
    render() {
        const { open } = this.state;

        return (
            <HamburgerIcon className={open && 'open'} onClick={this.handleClick}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </HamburgerIcon>
        )
    }
}

export default Hamburger;
/*
            <HamburgerIcon className={open && 'open'} onClick={this.handleClick}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </HamburgerIcon>
*/