import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

//components

import ResumeData from '../data/ResumeData'

function DetailedResume() {

  //state
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)
  //const [activeItem, setActiveItem] = useState(value)

  const { role, dates, duties, title, image, certifications, frameworks } = jobs[value]
  return (
    <>
      <div>
        {jobs.map((item, index) => {
          return (
            <button
              class={` ui medium button ui basic button  ${index === value && 'ui large button ui blue button  '}`}
              onClick={() => setValue(index)} key={item.id}
            >
              {item.role}
            </button>
          )
        })}
      </div>
      <h3>{title}</h3>
      {/* <h4>{company}</h4> */}
      <p ><i>{dates}</i></p>
      {duties.map((duty, index) => {
        return (
          <div key={index} >
            <p><Icon disabled name='angle right' />{duty}</p>
          </div>
        )
      })}
      {/* <h4>{company}</h4> */}
      <h3>Hands-On experience</h3>
      {frameworks.map((framework, index) => {
        return (
          <div key={index} >
            <p><Icon disabled name='angle right' />{framework}</p>
          </div>
        )
      })}
      <h3>Certifications</h3>
      {certifications.map((certificate, index) => {
        return (
          <div key={index} >
            <p><Icon disabled name='angle right' />{certificate}</p>
          </div>
        )
      })}
    </ >
  )
}

export default DetailedResume;
