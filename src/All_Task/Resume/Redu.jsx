import React from 'react'

const Redu = ({ education }) => {
  return (
      <>
          <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>
          {education.map(e => (
              <li><span>{e.title}</span><small>{e.subtitle}</small><small>{e.tofrom}</small></li>
        ))}
      </ul>
    </div>
      </>
  )
}

export default Redu