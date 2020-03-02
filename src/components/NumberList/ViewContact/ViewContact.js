import React from 'react';

const viewContact = (props) => {
    return (
        <div>
            <div className='col-sm-4'>
                {props.contact.name}
            </div>
            <div className='col-sm-3'>
                {props.contact.mob}
            </div>
        </div>
    );
}

export default viewContact;