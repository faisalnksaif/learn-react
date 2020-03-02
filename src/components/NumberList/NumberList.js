import React, { Component } from 'react';
import './NumberList.css'
import { contacts } from '../../constants/contacts';
import ViewContact from './ViewContact/ViewContact'
import ModifyContact from './ModifyContact/ModifyContact'

class NumberList extends Component {
    state = {
        contacts: contacts,
        modifyContact: -1
    }

    render() {
        const contactSection = this.state.contacts
            .map((contact, index) => {
                return (
                    <div key={index} className='contact row'>
                        {this.state.modifyContact === index ?
                            <ModifyContact
                                contact={contact}
                                index={index}
                                changed={this.handleValueChange.bind(this)}
                                blurred={this.modifyContact.bind(this)} /> :
                            < ViewContact contact={contact} />}
                        <div onClick={this.modifyContact.bind(this, index)} className='col-sm-5 text-right'>
                            {this.state.modifyContact === -1 ? 'Edit' : ''}
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
        });
    }

    handleValueChange(e, i, key) {
        const contacts = [...this.state.contacts];
        // const contactIndex = contacts.findIndex((contact, index) => index === i);
        contacts[i][key] = e.target.value;

        this.setState({ contacts: [...contacts] });
    }
}

export default NumberList;