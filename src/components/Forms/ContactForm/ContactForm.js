import React, { Component } from 'react';
import { CForm } from './styles';
import FormField from '../../FormField/FormField';

class ContactForm extends Component {
    render() {
        return (
            <CForm>
                <h1>How can I help?</h1>
                <FormField />
            </CForm>
        )
    }
}

export default ContactForm;