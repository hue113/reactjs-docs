import React from 'react';
import ListItem from './ListItem';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map( (number) =>
        /* Correct! Key should be specified inside the array. */
        // <li key={number.toString()}>
        //     {number}
        // </li>
        <ListItem key={number.toString()} value={number} />

        /* If render {number} like this, there will be warning -> must assign key to fix issue*/
        // <li> {number} </li>
    );
    return (
        <div>
            <ul>{listItems}</ul>

            {/* We can also embed map() inline like this: */}
            {/* <ul>
                {numbers.map( (number) =>
                    <ListItem key={number.toString()}
                              value={number} />
                )}
            </ul> */}
            
        </div>
    );
}

export default NumberList;