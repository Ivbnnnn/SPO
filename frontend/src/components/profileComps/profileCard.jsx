import React from 'react'

export default function ProfileCard() {
  return (
    <div className='flex w-full bg-beige-2 rounded-2xl p-4 m-2'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
        </div>
        <div className='mx-10 min-w-[20vw] m-auto'>
            <div className='text-2xl m-2'>Гольскун Иван</div>
            <div className='border border-accent-1 rounded-2xl bg-beige-1 py-2 px-4 m-2'>ilya.golkyn@gmail.com</div>
        </div>
        <div className='flex items-start justify-end w-full'>
          <button
            className='bg-beige-1 rounded-2xl px-4 py-2 text-gray-400'
          >Редактировать</button>
        </div>
    </div>
  )
}
