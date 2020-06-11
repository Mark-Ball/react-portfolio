import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { Title } from './styles';

const projects = [
    { 
        name: 'Javascript Short Circuit Evaluator',
        description: 'Timed quizzes for Javascript logic built with Express',
        url: 'http://jsshortcircuit.herokuapp.com/'
    },
    {
        name: 'Magic: The Gathering Marketplace',
        description: 'Two-sided marketplace for Magic cards built with Ruby on Rails',
        url: null
    },
    {
        name: 'Cinema Guide',
        description: 'CRUD resource for movies built with Angular',
        url: null
    }
]

class ProjectsPage extends Component {
    render() {
        return (
            <>
                <Title>Projects</Title>
                <Divider />
                <ProjectCard
                    name={projects[0].name}
                    description={projects[0].description}
                    url={projects[0].url}
                />
            </>
        )
    }
}

export default ProjectsPage;