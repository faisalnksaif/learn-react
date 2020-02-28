import React, { Component } from 'react';
import './NumberList.css'
import { contacts } from '../../constants/contacts';

class NumberList extends Component {
    state = {
        contacts: contacts,
        modifyContact: -1
    }

    render() {
        const viewContact = (contact) => {
            return (
                <div>
                    <div className='col-sm-4'>
                        {contact.name}
                    </div>
                    <div className='col-sm-3'>
                        {contact.mob}
                    </div>
                </div>
            );
        }

        const editContact = (contact, index) => {
            return (
                <span>
                    <div className='col-sm-4'>
                        <input
                            className='form-control'
                            onChange={this.handleValueChange.bind(this, index, 'name')}
                            onBlur={this.modifyContact.bind(this, -1)}
                            value={contact.name}></input>
                    </div>
                    <div className='col-sm-3'>
                        {contact.mob}
                    </div>
                </span>

            );
        }

        const contactSection = this.state.contacts
            .map((contact, index) => {
                return (
                    <div key={index} className='contact row'>
                        {this.state.modifyContact === index ? editContact(contact, index) : viewContact(contact)}
                        <div onClick={this.modifyContact.bind(this, index)} className='col-sm-5 text-right'>
                            {this.state.modifyContact === -1 ? 'Edit':''}
                        </div>
                    </div>
                )
            });

        return (
            <div className='d-flex justify-content-center'>
                <div className='NumberList w-50'>
                    <h4>Contacts</h4>
                    {contactSection}
                </div>
            </div>
        );
    }

    modifyContact = (index) => {
        this.setState({
            modifyContact: index,
        }, () => {
            console.log(this.state)
        });
    }

    handleValueChange(i, key, e) {
        const contacts = [...this.state.contacts];
        const contactIndex = contacts.findIndex((contact, index) => index === i);
        contacts[contactIndex][key] = e.target.value;

        this.setState({ contacts: [...contacts] });
    }
}

export default NumberList;