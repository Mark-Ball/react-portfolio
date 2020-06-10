import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { Title } from './styles';

const projects = [
    { 
        name: 'Javascript Short Circuit Evaluator',
        description: 'Timed quizzes for javascript logic built with Express',
        link: null
    },
    {
        name: 'Magic: The Gathering Marketplace',
        description: 'Two-sided marketplace for Magic cards built with Ruby on Rails',
        link: null
    },
    {
        name: 'Cinema Guide',
        description: 'CRUD resource for movies built with Angular',
        link: null
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
                />
            </>
        )
    }
}

export default ProjectsPage;