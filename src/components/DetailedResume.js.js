import React, { useState, useEffect } from 'react'
import { Button, Segment, Icon } from 'semantic-ui-react'

//components

import ResumeData from '../data/ResumeData.js'

function DetailedResume() {

  //state
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)

  const { company, dates, duties, title } = jobs[value]
  return (
    <>
      <div>
        {jobs.map((item, index) => {
          return (
            <Button onClick={() => setValue(index)} primary key={item.id}>{item.company}</Button>
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
