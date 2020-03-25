import React, { Component } from 'react';
import AboutCard from '../../AboutCard/AboutCard';

class AboutPage extends Component {
    render() {
        return (
            <>
                <AboutCard 
                    backgroundColour={'white'}
                    title={'What we value determines who we are'}
                />
                <AboutCard
                    backgroundColour={'#f7f7f7'}
                    title={'Courage'}
                    content={'Elegant user interfaces with reusable components'}
                />
                {/* backend */}
                {/* before web dev */}
            </>
        )
    }
}

export default AboutPage;