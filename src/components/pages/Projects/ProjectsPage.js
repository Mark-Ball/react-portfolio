import React, { Component } from 'react';
import TrackVisibility from '../../TrackVisibility/TrackVisibility';

class ProjectsPage extends Component {
    render() {
        return (
            <>
                <h1 style={{height: '100vh'}}>Projects</h1>
                <TrackVisibility onVisible={() => {console.log('component visible')}} />
            </>
        )
    }
}

export default ProjectsPage;