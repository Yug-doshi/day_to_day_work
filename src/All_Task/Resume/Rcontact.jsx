import React from 'react'

const Rcontact = ({address, phone, email}) => {
  return (
      <>
        <div class="contact">
      <h3>Contact Me</h3>
      <div class="call"><a href={"tel:"+ phone}><i class="fas fa-phone"></i><span>{phone}</span></a></div>
      <div class="address"><i class="fas fa-map-marker"></i><span>{address}</span>
      </div>
      <div class="email"><a href={"mailto:"+ email}><i class="fas fa-envelope"></i><span>{email}</span></a></div>
      <div class="website"><a href="http://astronaomical.com/" target="_blank"> <i class="fas fa-home"></i><span>astronaomical.com</span></a></div>
    </div>
      </>
  )
}

export default Rcontact