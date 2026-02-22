
import sessionItems from '../components/sessionItems.json'

import Header from '../components/mainComps/Header.jsx'
import NavAside from '../components/mainComps/NavAside.jsx'
import { Link } from 'react-router-dom'
import SessionItem from '../components/sessionsComps/sessionItem.jsx'
export default function SessionsView() {
    const items = Object.entries(sessionItems)
  return (
    <>
    <Header/>
    <div className='flex'>
      <NavAside/>
      <div className='bg-beige-1 flex flex-col
        text-accent-2
        w-screen
        p-10'>
        
        <div className='flex justify-between'>
            {/* типо хедер */}
            <div>
                <h2 className='text-blue text-3xl mb-4'>Мои сессии</h2>                
            </div>
            <button className=' relative bg-accent-1 text-beige-1 rounded-xl h-fit py-4 px-8 pl-10 cursor-pointer'>
                Создать сессию
                <svg className='absolute  ml-2 left-3 top-1/2 -translate-y-1/2 w-5 h-5'
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>    
            </button>
        </div>
        <div>            
            <div className='flex '>    
                {/* книги */}            
                <div className='grid grid-cols-2 mt-4 border-b-accent-1 border-b pb-4 w-full gap-10'>     
                    {items.map(([key, values]) => (
                                    <SessionItem key={key} {...values}/>
                    ))}    
                </div>
                
            </div>
        </div>
        

        </div>
    </div>
    
    </>
  )
}
