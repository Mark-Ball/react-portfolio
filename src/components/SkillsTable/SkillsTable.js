import React from 'react';
import SkillsRow from '../SkillsRow/SkillsRow';

export default function SkillsTable(props) {
    const { skills } = props;
    
    return skills.map(item => (
        <SkillsRow key={item.name}
            name={item.name}
            percentage={item.percentage}
        />
    ));
};