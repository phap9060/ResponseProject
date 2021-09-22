import React, { Fragment } from 'react';

import './style.css'



function CardContato() {
    return (<div className="ContactCardSpace">
        <div className="logoSpace">
            <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png" whats className="img"/>
        </div>
        <div className="contactSpace">
            <p>Se quiser nos contatatar por whatsapp, clique abaixo:</p>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=559988024533&text=Ol%C3%A1!%20%C3%89%20da%20pousada%20Mar%20Doce%20Lar%3F"><button type="button">Click me!</button></a>
            
        </div>



    </div>);
}

export { CardContato}
