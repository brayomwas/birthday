import React from 'react';

export default function Heading(props) {
    return (
        <h1 className={props.classes}>{props.text}</h1>
    )
}