import React from 'react';
import SkillsRow from '../SkillsRow/SkillsRow';

export default function SkillsTable(props) {
    return props.skills.map(item => (
        <SkillsRow
            name={item.name}
            percentage={item.percentage}
        />
    ));
};