import React from 'react'
import "../clientCard/client.css"
import client1 from "../../Assets/cat.jpg"
import client2 from "../../Assets/corona.jpg"
import client3 from "../../Assets/ibm.jpg"
import client4 from "../../Assets/nbc.jpg"

const ClientCard = () => {
  return (
   <div className='client_card'>
    <div className='client_image'>
      <img src={client1} alt='client_logo' className='client_logo'/>
    </div>
    <div className='client_image'>
      <img src={client2} alt='client_logo' className='client_logo'/>
    </div>
    <div className='client_image'>
      <img src={client3} alt='client_log' className='client_logo'/>
    </div>
    <div className='client_image'>
      <img src={client4} alt='client_logo' className='client_logo'/>
    </div>
   </div>
  )
}

export default ClientCard