import React from 'react';

function ListItem(props) {
    return (
        /* Wrong! There is no need to specify the key here: */
        // <li key={value.toString()}>          
        //     {value}
        // </li>

        // Correct! There is no need to specify the key here:
        <li>{props.value}</li>
    );
}

export default ListItem;