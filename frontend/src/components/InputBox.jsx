import React from 'react'

const InputBox = ({label,placeholder,onChange}) => {
  return (
    <>
    <div className='m-4'>

        <label className='text-black-600 text-left '>{label}</label>
        <br></br>
        <input onChange={onChange} type='text' placeholder={placeholder} className='text-gray-500 border-2 p-1 h-10 w-full px-2 py-1  rounded border-slate-200 '></input>
        <br></br>
    </div>
    </>
  )
}

export default InputBox