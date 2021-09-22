import React, { Fragment, useState, useEffect} from "react"
import Iframe from 'react'
import './style.css'



const Map = () => {
   return( 
     <div >
       <iframe loading="lazy" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65624.66269976414!2d-41.64643694074966!3d-2.880138034921114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2399143c60a7%3A0x4578fc69a248c6b3!2sLu%C3%ADs%20Correia%2C%20PI!5e0!3m2!1spt-BR!2sbr!4v1630603900979!5m2!1spt-BR!2sbr"></iframe>
   </div>
   )
       
   
    
}

export {Map}