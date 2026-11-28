import React from 'react'
import Upside from './Upside'
import Downside from './Downside'

const Homepage = () => {
  return (
    <div className='Container flex flex-col justify-center items-center' >
    <div><Upside/></div>
    <div><Downside/></div>
    </div>
  )
}

export default Homepage