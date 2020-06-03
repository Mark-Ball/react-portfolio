import React, { useState } from 'react';
import { Row } from './styles';

export default function SkillsRow(props) {
    const { name, percentage } = props;
    const [fill, setFill] = useState(0);

    setTimeout(() => {
        if (!fill) {
            setFill(percentage);
        };
    }, 500);
    

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