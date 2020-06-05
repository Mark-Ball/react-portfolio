import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import AboutCard from '../../AboutCard/AboutCard';
import TransitionScroller from '../../TransitionScroller/TransitionScroller';
import SkillsTable from '../../SkillsTable/SkillsTable';
import linkedListSvg from '../../svgs/linkedList.svg';
import efficiencySvg from '../../svgs/efficiency.svg';
import { Title, Flexbox } from './styles';

const skills = [
    { name: 'React', percentage: 90 },
    { name: 'MongoDB', percentage: 90 },
    { name: 'Node.js', percentage: 75 },
    { name: 'CSS', percentage: 75 },
    { name: 'HTML', percentage: 70 },
    { name: 'Angular', percentage: 30 },
    { name: 'Ruby on Rails', percentage: 60 },
    { name: 'C#', percentage: 20 },
    { name: 'Postgres', percentage: 70 },
    { name: 'AWS', percentage: 25 }
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
                                img={efficiencySvg}
                                title={'Efficiency'}
                                content={'Fast loading and best practice'}
                            />
                        </TransitionScroller>
                        <TransitionScroller>
                            <AboutCard
                                img={linkedListSvg}
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
                <TransitionScroller>
                    <SkillsTable skills={skills} />
                </TransitionScroller>
            </>
        )
    }
}

export default AboutPage;