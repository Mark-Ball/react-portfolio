import React, { Component } from 'react';
import Divider from '../../Divider/Divider';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { Title, CardContainer } from './styles';

const projects = [
    { 
        name: 'Javascript Short Circuit Evaluator',
        description: 'Timed quizzes for Javascript logic built with Express',
        url: 'http://jsshortcircuit.herokuapp.com/'
    },
    {
        name: 'Magic: The Gathering Marketplace',
        description: 'Two-sided marketplace for Magic cards built with Ruby on Rails',
        url: 'https://mtg-marketplace.herokuapp.com/'
    },
    {
        name: 'Cinema Guide',
        description: 'CRUD resource for movies built with Angular',
        url: 'https://cinema-guide-1f286.web.app/movies'
    }
]

class ProjectsPage extends Component {
    render() {
        return (
            <>
                <Title>Projects</Title>
                <Divider />
                <CardContainer>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                        />
                    ))}
                </CardContainer>
            </>
        )
    }
}

export default ProjectsPage;