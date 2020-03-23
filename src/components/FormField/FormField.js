import React, { Component } from 'react';
import { InputBox } from './styles';

class FormField extends Component {
    render() {
        const { name } = this.props;
        
        return (
            <InputBox>
                <input name='firstname' />
                <span>name</span>
            </InputBox>
        )
    }
}

export default FormField;