import React from 'react'
import './MyWork.css'

const TimelineEntry = ({ index, title, duration, details }) => {
  return (
    <div className={'mb-5'}>
      <div className={'mb-2'}>
        <div className={'d-flex align-items-center'}>
          <h4>
            {title}
          </h4>
        </div>
        <div className={'d-flex align-items-center'}>
          <h1 className={`bullet ${index === 0 ? 'first' : index === 2 ? 'last' : ''}`}>•</h1>
          <h6>{duration}</h6>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget sodales diam. Morbi sit amet sagittis lacus, et elementum nunc. Aenean venenatis cursus ante, egestas bibendum mauris gravida id.
        </p>
      </div>
    </div>
  )
}

export default TimelineEntry