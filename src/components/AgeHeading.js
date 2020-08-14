import React from 'react';

export default function AgeHeading(props) {
    return (
        <div>
            <h2 className={props.classes}>{props.text}</h2>
        </div>
    )
}