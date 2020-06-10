import React, { useState } from 'react';
import { Card } from './styles';

const ProjectCard = props => {
    const [hovered, setHovered] = useState(false);
    const { img, text, link } = props;

    return (
        <Card 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered ? props.description : props.name}
        </Card>

    )
}

export default ProjectCard;