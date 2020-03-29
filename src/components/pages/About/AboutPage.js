import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import IntersectionObs from '../../IntersectionObs/IntersectionObs';
import { Title, Flexbox } from './styles';

class AboutPage extends Component {
    state = {
        visible: false
    }
    
    onVisible = () => {
        this.setState({ visible: true });
    }

    handleClick = () => {
        this.setState(state => ({
            visible: !state.visible
        }))
    }
    
    render() {
        const { visible } = this.state;

        return (
            <>
                <button onClick={this.handleClick}>toggle visible</button>
                <Title>About</Title>
                <Divider />
                <Flexbox>
                    <IntersectionObs onVisible={this.onVisible}>
                        <Flexbox className={visible ? 'visible' : 'invisible'}>
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
                    </IntersectionObs>
                    <Flexbox>
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Intuitive'}
                            content={'Easy to use, learn by doing'}
                        />
                        <AboutCard
                            imageUrl={'gears_icon.png'}
                            title={'Maintainable'}
                            content={'Well-written code, easy to understand'}
                        />
                    </Flexbox>
                </Flexbox>
            </>
        )
    }
}

export default AboutPage;