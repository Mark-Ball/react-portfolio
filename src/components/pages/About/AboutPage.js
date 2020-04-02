import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import TransitionScroller from '../../TransitionScroller/TransitionScroller';
import SkillsTable from '../../SkillsTable/SkillsTable';
import { Title, Flexbox } from './styles';

const skills = [
    { name: 'React', percentage: 90 },
    { name: 'Node.js', percentage: 75 }
]

class AboutPage extends Component {
    render() {
        return (
            <>
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
                <SkillsTable skills={skills} />
            </>
        )
    }
}

export default AboutPage;