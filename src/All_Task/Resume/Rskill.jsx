import React from "react";

const Rskill = ({ skills }) => {
  return (
    <>
      <div className="skills-prog">
        <h3>
          <i className="fas fa-code"></i>Programming Skills
        </h3>
        <ul>
          {skills.map((s, index) => (
            // Use "index" to provide unique keys
            <li key={index} data-percent={s.percent}>
              <span>{s.name}</span>
              <div className="skills-bar">
                <div className="bar" style={{ width: `${s.percent}%` }}>
                  {s.percent}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rskill;
