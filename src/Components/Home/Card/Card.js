import React, { Fragment } from 'react';
import './style.css'



function Card(props) {
    return (
        <div className="centralized">
            <div className="allCardSpace">

                <img className="imageSpace" src={props.url_img}></img>
                <p className="textSpace"><strong>{props.description}</strong></p>


            </div> 
        </div>)
}

export { Card }
