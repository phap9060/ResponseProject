import React,{useState} from 'react'
import './style.css'
import {images} from '../../../Helpers/CarouselDataFile'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'


const Carousel = () => {
    const [currImg,SetCurrImg]=useState(0)
    
    
    
    return (
        <div className="carouselSpace">
            <div className="carousel" >
                <h2>Um pouquinho do nosso cantinho</h2>
                <div className="carouselInner" 
                style={{ backgroundImage: `url(${images[currImg].img})` }}>
                    <div className="left" onClick={()=>{if(currImg>0){ SetCurrImg(currImg -1 )}} }>
                        <ArrowBackIosIcon />
                    </div>
                    <div className="center"></div>
                    <div className="right" onClick={()=> {if(currImg < 4){ SetCurrImg(currImg + 1 )}} }>
                    <ArrowForwardIosIcon />
                    </div>
                   

                </div>
            </div>
        </div>
    );
}

export default Carousel
