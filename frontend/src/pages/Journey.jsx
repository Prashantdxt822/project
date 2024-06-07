import React from 'react'

const Journey = () => {
  const [offices,setOffices]=useState([]);
  return (
    <div  className='font-semibold mt-6'>
        <h1 className='text-center '>Book the Journey</h1>
        <div className='flex flex-col align-center w-[20%] gap-6 m-10'>
            <input type='text' placeholder='Enter Address' className='border-2 '/>
            <input type='text' placeholder='Enter Pincode' className='border-2 '/>
        </div>
        <div>
            {
              offices.map((office)=>(
                <div> </div>
              ))
            }
        </div>
    </div>  
  )
}

export default Journey