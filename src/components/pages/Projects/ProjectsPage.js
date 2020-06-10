import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { Title } from './styles';

class ProjectsPage extends Component {
    render() {
        return (
            <>
                <Title>Projects</Title>
                <Divider />
                <ProjectCard />
            </>
        )
    }
}

export default ProjectsPage;