import React, { useState } from 'react';
import './navbarStyle.css';

function Navbar() {
    const [navbar, Setnavbar] = useState(false);

    return (
        <header>
            <nav>
                <div className="navBar">
                    <div className="leftSide">
                    
                        <div className="links" id={ navbar ? "hidden" : ""}>
                            <a href="/"> Mar.Doce.Lar </a>
                            <a href="/tarifas">Tarifas</a>
                            <a href="/contato">Contato</a>
                            <a target="_blank" href="https://www.instagram.com/mardocelarpousada/">Instagram</a>
                        </div>
                        <img src="https://static.thenounproject.com/png/703781-200.png" onClick={()=>Setnavbar(!navbar)} className="button"></img>
                       
                    </div>
                   
                </div>
            </nav>
        </header>
    )



}

export { Navbar }