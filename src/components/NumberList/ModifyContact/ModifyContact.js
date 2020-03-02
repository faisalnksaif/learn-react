import React from 'react';

const modifyContact = (props) => {
    return (
        <span>
            <div className='col-sm-4'>
                <input style={{ width: '200px' }}
                    className='form-control'
                    onChange={(event) => { props.changed(event, props.index, 'name') }}
                    onBlur={props.blurred.bind(this, -1)}
                    value={props.contact.name}></input>
            </div>
            <div className='col-sm-3'>
                {props.contact.mob}
            </div>
        </span>
    );
}

export default modifyContact;