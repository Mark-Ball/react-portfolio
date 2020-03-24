import React, { Component } from 'react';
import { InputTextArea } from './styles';

class FormTextArea extends Component {
    render() {
        const { name, handleInputChange } = this.props;

        return (
            <InputTextArea>
                <textarea 
                    name={name[0]}
                    onChange={handleInputChange}
                    className={name[1] && 'focused'}
                />
                <span>{name[0]}</span>
            </InputTextArea>
        )
    }
}

export default FormTextArea;