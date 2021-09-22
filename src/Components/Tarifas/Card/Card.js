import React, { Fragment } from 'react';
import './styleTarifas.css'



function Card(props) {
    return (<div className="allCardSpace">
        <div className="priceSpace">
            <p className="price">{props.price}</p>
        </div>
        <div className="descriptionSpace">
            <ul>
                <li>{props.description}</li>
                <li>Café da manhã</li>
                <li>Piscina</li>
                <li>Wi-fi</li>
            </ul>
        </div>



    </div>);
}

export { Card }
