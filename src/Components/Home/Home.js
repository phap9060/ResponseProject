import React, { Fragment, useState, useEffect } from "react"
import { Navbar } from '../../shared/navbar/navbar';
import { Bimage } from './BackImage/Bimage'
import { Card } from './Card/Card'
import Carousel from './Carousel/Carousel'
import { Map } from './Maps/maps'

const Home = () => {
    const [cards, setCards] = useState([
        {
            url_img: "https://i.pinimg.com/originals/c3/6e/a4/c36ea4eb6b5af4332c7f1f11eff88015.png",
            description: "Pet Friendly",
    
        },
        {
            url_img: "https://img2.gratispng.com/20180210/tte/kisspng-hot-tub-swimming-pool-room-icon-blue-plane-simple-exercise-swimming-5a7f1725264f16.9752259615182784371569.jpg",
            description: "Piscina",
    
    
        },
        {
            url_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhqGUCxPYToeW5J80ZPZn04GrtRsJUh0L2Q&usqp=CAU",
            description: "Free Wifi",
    
        }
    
    
    ])
    return (
        <div>
             <Fragment>
            < div >
                <Navbar />
                <Bimage />
                <div className="cardMargin">
                <div className="cardSpace">
                    {cards.map((card) =>
                        <Card
                            url_img={card.url_img}
                            description={card.description}
                        />
                    )}
                </div>
                </div>
                <Carousel />
                <Map />
                <hr />
            </div >
        </Fragment>
            
        </div>
    )
}

export default Home
