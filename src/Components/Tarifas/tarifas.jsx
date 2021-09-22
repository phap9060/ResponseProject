import React,{useState} from 'react'
import {Navbar} from '../../shared/navbar/navbar'
import {Card} from './Card/Card'

const Tarifas = () => {
    const[priceCard,SetPriceCard]=useState([
        {
         price:"R$230",
         description:"Quarto para casal"

        },
        {
            price:"R$280",
            description:"Quarto Triplo"
        },
        {
            price:"R$330",
            description:"Quarto Quadruplo"
        }
    ])
    
        
    return (
        <div>
            <Navbar/>
            <div className="cardPriceSpace">
                    {priceCard.map((card) =>
                        <Card
                            price={card.price}
                            description={card.description}
                        />
                    )}
                </div>
        </div>
    )
}

export default Tarifas
