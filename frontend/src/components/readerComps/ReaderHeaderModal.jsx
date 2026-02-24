import React from 'react'
import { Link } from 'react-router-dom'
export default function ReaderHeaderModal() {
  return (
    <div className="fixed right-2 mt-5 flex items-left z-10">
        <div className="bg-beige-2 p-6 rounded-2xl border border-accent-1 max-w-lg w-full text-blue flex flex-col gap-2">
            <ul className='flex flex-col items-start gap-2'>                
                <li>Участники</li>
                <li>Настройки</li>
                <Link to="/"><li>Выйти из сессии</li></Link>
            </ul>
        </div>
    </div>
  )
}
