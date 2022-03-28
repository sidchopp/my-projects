import React from 'react'

function Today() {

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div className='font'>
      Hope you are enjoying <i>{days[new Date().getDay()]} !</i>
    </div>
  )
}

export default Today;

