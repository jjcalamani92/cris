import React from 'react'

export const Alert = () => {
  return (
    <div className='flex items-center p-6 max-w-sm mx-auto bg-white shadow-xl rounded-xl space-x-4' >
      <img className='w-12 h-12' src="https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg" alt="image" />
      <div>
        <div className='text-xl font-medium text-black' >Are you Sure?</div>
        <p className='text-slate-500'>You are about to delete a post</p>
      </div>
    </div>
  )
}
