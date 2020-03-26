import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import { Title, Flexbox } from './styles';

class AboutPage extends Component {
    render() {
        return (
            <>
                <Title>About</Title>
                <Divider />
                <Flexbox>
                    <Flexbox>
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Efficiency'}
                            content={'Fast loading and best practice'}
                        />
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Seamless'}
                            content={'Smooth transitions enhance the user\'s experience'}
                        />
                    </Flexbox>
                    <Flexbox>
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Efficiency'}
                            content={'Fast loading and best practice'}
                        />
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Seamless'}
                            content={'Smooth transitions enhance the user\'s experience'}
                        />
                    </Flexbox>
                </Flexbox>
            </>
        )
    }
}

export default AboutPage;