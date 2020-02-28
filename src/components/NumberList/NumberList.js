import React, { Component } from 'react';
import './NumberList.css'
import { contacts, contactsNew } from '../../constants/contacts';

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

        const editContact = (contact) => {
            return (
                <span>
                    <div className='col-sm-4'>
                        edit
                    </div>
                    <div className='col-sm-3'>
                        {contact.mob}
                    </div>
                </span>

            );
        }

        const contactSection = this.state.contacts.
            map((contact, index) => {
                return (
                    <div key={index} className='contact row'>
                        {this.state.modifyContact === index ? editContact(contact) : viewContact(contact)}
                        <div onClick={() => { this.modifyContact(index) }} className='col-sm-5 text-right'>
                            Edit
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
            contacts: contactsNew
        }, () => {
            console.log(this.state)
        });
    }
}

export default NumberList;