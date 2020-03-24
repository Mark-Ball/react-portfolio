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
        const { firstname,lastname, email, message } = this.state;

        return (
            <CForm>
                <h1>How can I help?</h1>
                <Divider />
                <div className='flex'>
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
                <FormField 
                    name={['message', message]} 
                    handleInputChange={this.handleInputChange} 
                />
                <input type='submit' value='Send' />
            </CForm>
        )
    }
}

export default ContactForm;