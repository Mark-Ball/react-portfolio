import React, { Component } from 'react';
import IntersectionObs from '../../IntersectionObs/IntersectionObs';

class ProjectsPage extends Component {
    render() {
        return (
            <>
                <h1 style={{height: '100vh'}}>Projects</h1>
                <IntersectionObs />
            </>
        )
    }
}

export default ProjectsPage;