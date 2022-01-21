import React, { useState } from 'react'
import { Icon, Image } from 'semantic-ui-react'


//components
import ResumeData from '../data/ResumeData'
import UseStyles from './UseStyles'

function DetailedResume() {
  const classes = UseStyles();
  //states
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)
  //const [activeItem, setActiveItem] = useState(value)

  const { role, dates, duties, title, img, certifications, frameworks } = jobs[value]
  return (
    <>
      <div>
        {jobs.map((item, index) => {
          return (
            <button
              style={{ margin: '2px' }}
              className={` ui  button medium   ${index === value && 'ui  button primary large '}`}
              onClick={() => setValue(index)} key={item.id}
            >
              {item.role}
            </button>
          )
        })}
      </div>

      {/* <div><Image fluid src={img} rounded bordered centered /></div> */}

      <h3>
        <Icon circular size="large" className={classes.darkColor} name='address card' />
        {" "} {title}
      </h3>


      <p ><i>{dates}</i></p>
      {duties.map((duty, index) => {
        return (
          <div key={index} >
            <p><Icon className={classes.darkColor} name="angle right" />{duty}</p>
          </div>
        )
      })}

      <h3>
        <Icon circular size="large" className={classes.darkColor} name='cogs' />
        {" "}Hands-On Experience
      </h3>
      {frameworks.map((framework, index) => {
        return (
          <div key={index} >
            <p><Icon className={classes.darkColor} name='angle right' />{framework}</p>
          </div>
        )
      })}

      <h3>
        <Icon circular size="large" className={classes.darkColor} name='trophy' />
        {" "}Qualifications & Certifications
      </h3>
      {certifications.map((certificate, index) => {
        return (
          <div key={index} >
            <p><Icon className={classes.darkColor} name='angle right' />{certificate}</p>
          </div>
        )
      })}
    </ >
  )
}

export default DetailedResume;
