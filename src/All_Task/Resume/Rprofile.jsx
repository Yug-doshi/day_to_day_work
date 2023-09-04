import React from 'react'

const Rprofile = ({name, email, profilepic}) => {
  return (
      <>
         <div class="profile">
              <div class="photo">
                  <div className="flex">
                      <img src={profilepic} alt='profile' class='pfp' />
                  </div>
      </div>
      <div class="info">
        <h1 class="name">{name}</h1>
        <h2 class="job">{email}</h2>
      </div>
    </div></>
  )
}

export default Rprofile