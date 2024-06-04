import React from 'react'

const Button = ({label,onPress}) => {
  return (
    <div className='m-4'>
        <button onClick={onPress} className='bg-black text-white text-center w-full p-2 rounded-md' >
            {label}
        </button>
    </div>
  )
}

export default Button