import React, { useState, useEffect } from 'react'
import { Button, Segment, Icon } from 'semantic-ui-react'

//components

import ResumeData from '../data/ResumeData'



function DetailedResume() {

  //state
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)
  //const [activeItem, setActiveItem] = useState(value)

  const { company, dates, duties, title, image } = jobs[value]
  return (
    <>
      <div>
        {jobs.map((item, index) => {
          return (
            <button
              class={` ui medium button ui basic button  ${index === value && 'ui large button ui blue button  '}`}
              onClick={() => setValue(index)} key={item.id}
            >{item.company}
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
    </ >
  )
}

export default DetailedResume;
