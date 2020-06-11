import React, { useState } from 'react';
import { Card } from './styles';

const ProjectCard = props => {
    const [hovered, setHovered] = useState(false);
    const { name, description, url } = props;

    return (
        <a href={url} style={{ textDecoration: 'none', color: 'black' }}>
            <Card 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <p>{hovered ? description : name}</p>
            </Card>
        </a>
    )
}

export default ProjectCard;