import React from 'react'

const Rintrest = ({ languages }) => {
  return (
    <>
      <div class="interests">
        <h3><i class="fa-solid fa-language"></i>Languages</h3>
        <div class="flex langs">
          {languages.map(l => (
            <div class="item">
              <span class='flex justify-center items-center gap-2'>
                <i class="fa-solid fa-circle-dot text-warning"></i>
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Rintrest