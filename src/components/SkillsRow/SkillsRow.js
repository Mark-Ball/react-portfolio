import React from 'react';
import { Row } from './styles';

export default function SkillsRow(props) {
    const { name, percentage } = props;

    return (
        <Row>
            <p>{name}</p>
            <div>
                <span style={{width: `${percentage}%`}} className='bar'></span>
            </div>
            <span>{percentage}%</span>
        </Row>
    )
}