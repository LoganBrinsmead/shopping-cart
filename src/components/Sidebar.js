import React from 'react';
import { Button } from 'react-bootstrap';


export default function Sidebar(props) {

    return (
        <>
        <ul className="sidebar">
            { props.genres.map( (item) => <li key={item.i}> { item.genre } </li> ) }
        </ul>
        </>
    );
}