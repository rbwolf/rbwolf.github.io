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
      <hr style={{ backgroundColor: '#99A9D1', width: '48px', height: '3px', marginLeft: 0 }}/>
    </div>
  )
}

export default Title