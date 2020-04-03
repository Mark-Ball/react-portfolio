import React from 'react';
import SkillsRow from '../SkillsRow/SkillsRow';
import { Container } from './styles';

export default function SkillsTable(props) {
    const { skills } = props;
    
    return (
        <Container>
            {skills.sort((a, b) => (b.percentage - a.percentage)).map(item => (
                <SkillsRow 
                    key={item.name}
                    name={item.name}
                    percentage={item.percentage}
                />
            ))}
        </Container>
    )
};