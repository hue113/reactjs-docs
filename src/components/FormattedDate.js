import React from 'react';

function FormattedDate(props) {
    return (
        <div className='FormattedDate'>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default FormattedDate;
