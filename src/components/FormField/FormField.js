import React, { Component } from 'react';
import { InputBox } from './styles';

class FormField extends Component {    
    render() {
        const { name, handleInputChange } = this.props;

        return (
            <InputBox>
                <input 
                    name={name[0]}
                    onChange={handleInputChange}
                    className={name[1] && 'focused'}
                />
                <span>{name[0]}</span>
            </InputBox>
        )
    }
}

export default FormField;