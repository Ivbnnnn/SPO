import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({src, name, author, members, notes}) {
  return (
    <div className='flex rounded-2xl bg-beige-2 p-4 my-6'>
        <img src="" alt="" />
        <div className='w-full'>
            <h2 className='text-2xl text-blue'>{name}</h2>
            <h3 className='text-sm'>{author}</h3>            
            <div>
                {members} участника, {notes} заметок
            </div>
            <div className='flex justify-end'>
              <Link to="reader">
              <button className='bg-accent-1    
              text-beige-1
              rounded-2xl
              px-4 py-1 hover:cursor-pointer'
              >Перейти</button></Link>
            </div>
        </div>
    </div>
  )
}
