import React, { Component } from 'react';

class IntersectionObs extends Component {
    ref = React.createRef();

    componentDidMount() {
        const { onVisible } = this.props;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 1) {
                    onVisible()
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
        return (
            <div ref={this.ref}>
                {this.props.children}
            </div>
        )
    }
}

export default IntersectionObs;