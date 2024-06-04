import React from 'react'
import {Link} from 'react-router-dom'

const BottomWarning = ({label,buttonText,to}) => {
  return (
    <>
    <div className='mx-4'>
        
        <span>{label}</span>
        <Link to ={to} className='pointer underline' >
            {buttonText}
        </Link>
    </div>
    </>
  )
}

export default BottomWarning