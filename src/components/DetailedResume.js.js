import React, { useState, useEffect } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



//CSS
import '../style.css'
//components

import ResumeData from './ResumeData.js'

function DetailedResume() {
  //const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState(ResumeData)
  const [value, setValue] = useState(0)

  // const fetchJobs = async () => {
  //   const reponse = await fetch(url)
  //   const newJobs = await reponse.json()
  //   setJobs(newJobs)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   fetchJobs()
  // }, [])
  // if (loading) {
  //   return (
  //     <section className="section loading">
  //       <h1>Loading...</h1>
  //     </section>
  //   )
  // }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section style={{ maxHeight: '100vh', OverflowY: 'auto' }} className="section">
      <div className="title">

        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <i><p className="job-date">{dates}</p></i>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <ArrowRightIcon className="job-icon" />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default DetailedResume;
