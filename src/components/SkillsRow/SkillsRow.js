import React from 'react';

export default function SkillsRow(props) {
    const { name, percentage } = props;

    return (
        <>
            <div>{name}</div>
            <div></div>
            <div>{percentage}%</div>
        </>
    )
}