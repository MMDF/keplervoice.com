import React from 'react'
import "../Servicecard/service.css"
import { Link } from 'react-router-dom'

const ServiceCard = ({icon,heading,paragraph,goto}) => {
  return (
    <div className='service_card'>
        <div className='icon_content_portion'>
            <div className='lcon_service'>
                <img src={icon} alt='' className='icon_class'/>
            </div>
            <h1 className='service_heading'>{heading}</h1>

        </div>
        <p className='service_paragrap'>{paragraph}</p>
       <Link to={goto} className='readmo' ><button className='readmore'>ReadMore</button></Link>
    </div>
  )
}

export default ServiceCard