import React, { Component } from 'react';
import { HamburgerIcon, Bar } from './styles';

class Hamburger extends Component {
    state = {
        open: false,
        hovered: false
    };

    handleClick = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };

    handleMouseEnter = () => {
        this.setState({ hovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ hovered: false });
    };

    getClasses = () => {
        const { open, hovered } = this.state;

        const classes = [];
        if (open) {
            classes.push('open');
        }
        if (hovered) {
            classes.push('hovered')
        }
        return classes;
    };

    render() {
        const { open } = this.state;

        return (
            <HamburgerIcon 
                className={this.getClasses()}
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </HamburgerIcon>
        )
    }
}

export default Hamburger;