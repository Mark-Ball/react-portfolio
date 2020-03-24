import React, { Component } from 'react';
import { CForm } from './styles';
import FormField from '../../FormField/FormField';
import Divider from '../../Divider/Divider';

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
        const { firstname,lastname, email } = this.state;

        return (
            <CForm>
                <h1>How can I help?</h1>
                <Divider />
                <div>
                    <FormField 
                        name={['firstname', firstname]} 
                        handleInputChange={this.handleInputChange} 
                    />
                    <FormField 
                        name={['lastname', lastname]} 
                        handleInputChange={this.handleInputChange} 
                    />
                </div>
                <FormField 
                    name={['email', email]} 
                    handleInputChange={this.handleInputChange} 
                />
            </CForm>
        )
    }
}

export default ContactForm;