import React from 'react'

const Rskill = ({ skills }) => {
  return (
      <>
          <div class="skills-prog">
      <h3><i class="fas fa-code"></i>Programming Skills</h3>
      <ul>
          {skills.map(s => (
            <li data-percent={s.percent}><span>{s.name}</span>
              <div class="skills-bar">
                <div class="bar"></div>
              </div>
            </li>
))}
      </ul>
    </div>
      </>
  )
}

export default Rskill