import React, { Component } from 'react';
import { CForm } from './styles';
import FormField from '../../FormField/FormField';

class ContactForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { firstname } = this.state;

        return (
            <CForm>
                <h1>How can I help?</h1>
                <FormField 
                    name={['firstname', firstname]} 
                    handleInputChange={this.handleInputChange} 
                />
            </CForm>
        )
    }
}

export default ContactForm;