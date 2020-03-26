import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import { Title } from './styles';

class AboutPage extends Component {
    render() {
        return (
            <>
                <Title>About</Title>
                <Divider />
                <AboutCard
                    imageUrl={'gears_icon.png'}
                    title={'Efficiency'}
                    content={'Fast loading and best practice'}
                />
            </>
        )
    }
}

export default AboutPage;