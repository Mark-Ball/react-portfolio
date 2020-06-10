import React, { useState } from 'react';
import { Card } from './styles';

const ProjectCard = props => {
    const [showText, setShowText] = useState(false);
    const { img, text, link } = props;

    return (
        <Card 
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        />
    )
}

export default ProjectCard;