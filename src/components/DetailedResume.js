import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'


//components
import ResumeData from '../data/ResumeData';

function DetailedResume() {
  //states
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)
  //const [activeItem, setActiveItem] = useState(value)

  const { role, dates, duties, title, title2, dates2, duties2, img, certifications, frameworks } = jobs[value]
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
              <span className='font'> {item.role}</span>
            </button>
          )
        })}
      </div>

      {/* <div><Image fluid src={img} rounded bordered centered /></div> */}

      <h3>
        <Icon circular size="large" name='address card' />
        {" "}<span className='font'>{title}</span>
      </h3>
      <p ><i>{dates}</i></p>
      {duties.map((duty, index) => {
        return (
          <div key={index} >
            <p><Icon name="angle right" />{duty}</p>
          </div>
        )
      })}

      {/* Conditional rendering for the 2nd job in same profile */}
      {(title2 && dates2 && duties2) ?
        <>
          <h3>
            <Icon circular size="large" name='address card' />
            {" "} <span className='font'>{title2}</span>
          </h3>
          <p ><i>{dates2}</i></p>
          {duties2.map((duty, index) => {
            return (
              <div key={index} >
                <p><Icon name="angle right" />{duty}</p>
              </div>
            )
          })}
        </>
        :
        <></>
      }

      <h3>
        <Icon circular size="large" name='cogs' />
        {" "}<span className='font'>Hands-On Experience</span>
      </h3>
      {frameworks.map((framework, index) => {
        return (
          <div key={index} >
            <p><Icon name='angle right' />{framework}</p>
          </div>
        )
      })}

      <h3>
        <Icon circular size="large" name='trophy' />
        {" "}<span className='font'>Qualifications & Certifications</span>
      </h3>
      {certifications.map((certificate, index) => {
        return (
          <div key={index} >
            <p><Icon name='angle right' />{certificate}</p>
          </div>
        )
      })}
    </ >
  )
}

export default DetailedResume;
