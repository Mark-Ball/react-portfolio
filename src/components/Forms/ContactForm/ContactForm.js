import React, { Component } from 'react';
import axios from 'axios';
import { CForm } from './styles';
import Divider from '../../Divider/Divider';
import FormInput from '../../FormField/FormInput';
import FormTextArea from '../../FormField/FormTextArea';

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

    handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        try {
            axios({
                method: 'POST',
                url: process.env.REACT_APP_EMAIL,
                data
            });
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { firstname, lastname, email, message } = this.state;

        return (
            <CForm onSubmit={this.handleFormSubmit}>
                <h1>Get in touch</h1>
                <Divider />
                <div className='flex'>
                    <FormInput 
                        name={['firstname', firstname]} 
                        handleInputChange={this.handleInputChange} 
                    />
                    <FormInput 
                        name={['lastname', lastname]} 
                        handleInputChange={this.handleInputChange} 
                    />
                    <FormInput
                        name={['email', email]} 
                        handleInputChange={this.handleInputChange} 
                    />
                </div>
                <FormTextArea 
                    name={['message', message]} 
                    handleInputChange={this.handleInputChange} 
                />
                <input type='submit' value='Send' />
            </CForm>
        )
    }
}

export default ContactForm;