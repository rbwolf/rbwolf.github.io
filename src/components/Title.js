import React from 'react'

const Title = ({ icon, text }) => {
  return (
    <div>
      <div className={'d-flex align-items-center'}>
        <div>
          {icon}
        </div>
        <h2 className={'ml-3'}>
          {text}
        </h2>
      </div>
      <hr style={{ backgroundColor: '#81E8FF', width: '64px', height: '3px', marginLeft: 0 }}/>
    </div>
  )
}

export default Title