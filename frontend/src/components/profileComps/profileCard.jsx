import React, { useState } from 'react'

export default function ProfileCard() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [enabledToEdit, setEnabled] = useState(false)
  return (
    <div className='flex w-full bg-beige-2 rounded-2xl p-4 m-2'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
        </div>
        <div className='mx-10 min-w-[20vw] m-auto'>
            <div className='text-2xl m-2 flex text-blue '>
              <input onChange={(e)=>{setName(e.target.value) }} type="text" disabled={!enabledToEdit} value={name} placeholder='Фамилия' className={` ${enabledToEdit ? "border border-accent-1" : "cursor-not-allowed"}  min-w-[10vw] rounded-2xl border p-2 mr-4`}/>
              <input onChange={(e)=>{setLastName(e.target.value) }} type="text" disabled={!enabledToEdit} value={lastName} placeholder='Имя' className={` ${enabledToEdit ? "border border-accent-1" : "cursor-not-allowed"}  min-w-[10vw] rounded-2xl border p-2 mr-4`}/>
            </div>
            <div className='m-2'>
              <input onChange={(e)=>{setEmail(e.target.value) }} type="email" disabled={!enabledToEdit} value={email} placeholder='email' className={` ${enabledToEdit ? "border border-accent-1" : "cursor-not-allowed"}  min-w-[10vw] rounded-2xl border p-2 mr-4`}/>
              </div>
        </div>
        <div className='flex items-start justify-end w-full'>
          <button onClick={ ()=>{ setEnabled(!enabledToEdit)}}
            className= {` ${enabledToEdit ? "border border-accent-1" : null}   cursor-pointer bg-beige-1 rounded-2xl px-4 py-2 text-blue`}
          >Редактировать</button>
        </div>
    </div>
  )
}
