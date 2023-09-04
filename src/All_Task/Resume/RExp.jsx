import React from 'react'

const RExp = ({ experience }) => {
    return (
        <>
            <div class="work">
                <h3><i class="fa fa-briefcase"></i>Experience</h3>
                <ul>
                    {experience.map(e => (
                        <li><span>{e.title}</span><small>{e.company}</small><small>{e.tofrom}</small></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RExp