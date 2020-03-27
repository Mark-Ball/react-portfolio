import React, { Component } from 'react';
import { TransitionDiv } from './styles';

class TrackVisibility extends Component {
    state = {
        visible: false    
    }
    ref = React.createRef();
    
    onVisible = () => {
        this.setState({ visible: true })
    }

    componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 1) {
                    this.onVisible()
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0
            }
        )

        if (this.ref.current) {
            observer.observe(this.ref.current)
        }
    }
    
    render() {
        const { visible } = this.state;

        return (
            <TransitionDiv
                className={visible ? 'visible' : undefined} 
                ref={this.ref}
            >
                hello
            </TransitionDiv>
        )
    }
}

export default TrackVisibility;