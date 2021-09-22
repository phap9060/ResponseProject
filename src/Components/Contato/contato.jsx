import React from 'react'
import {Navbar} from '../../shared/navbar/navbar'
import {Form} from './Form/index'
import {CardContato} from './Card/CardContato'
import contato from './contato.css'


const Contato = () => {
    return (
        <div>
            <Navbar/>
            <div className="contact">
            <CardContato/>
            <Form/>
            </div>
            
            
            
        </div>
    )
}



export default Contato

