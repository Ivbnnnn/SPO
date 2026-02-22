import React from 'react'
import Progressbar from './Progressbar'
export default function LibraryBook({src, name, author, progress}) {
  return (
    <div className='flex rounded-2xl bg-beige-2 p-4 my-6'>
        <img src="" alt="" />
        <div className='w-full'>
            <h2 className='text-2xl text-blue'>{name}</h2>
            <h3 className='text-sm'>{author}</h3>      
            <Progressbar progress={progress}/>      
            <div>                
            </div>
            <div className='flex justify-end'>
              <button className='bg-accent-1    
              text-beige-1
              rounded-2xl
              px-4 py-1 hover:cursor-pointer'
              >Перейти</button>
            </div>
        </div>
    </div>
  )
}
