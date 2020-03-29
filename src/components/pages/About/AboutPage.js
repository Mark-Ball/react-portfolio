import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import TransitionScroller from '../../TransitionScroller/TransitionScroller';
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
                    <Flexbox>
                        <TransitionScroller>
                            <AboutCard
                                imageUrl={'gears_icon.png'}
                                title={'Efficiency'}
                                content={'Fast loading and best practice'}
                            />
                        </TransitionScroller>
                        <TransitionScroller>
                            <AboutCard
                                imageUrl={'gears_icon.png'}
                                title={'Seamless'}
                                content={'Smooth transitions enhance the user\'s experience'}
                            />
                        </TransitionScroller>
                    </Flexbox>
                    <Flexbox>
                        <TransitionScroller>
                            <AboutCard
                                imageUrl={'gears_icon.png'}
                                title={'Intuitive'}
                                content={'Easy to use, learn by doing'}
                            />
                        </TransitionScroller>
                        <TransitionScroller>
                            <AboutCard
                                imageUrl={'gears_icon.png'}
                                title={'Maintainable'}
                                content={'Well-written code, easy to understand'}
                            />
                        </TransitionScroller>
                    </Flexbox>
                </Flexbox>
            </>
        )
    }
}

export default AboutPage;