
import libraryItems from "../components/libraryItems.json"

import Header from '../components/mainComps/Header.jsx'
import NavAside from '../components/mainComps/NavAside.jsx'
import { Link } from 'react-router-dom'
import LibraryBook from '../components/libraryComps/LibraryBook.jsx'
import LibraryModal from "../components/libraryComps/LibraryModal.jsx"
import { useState } from "react"
export default function MainView() {
    const [modalOpen, setModalOpen] = useState(false)
    const items = Object.entries(libraryItems)
  return (
    <>
    <Header/>
    <div className='flex'>
      <NavAside/>
      <div className='bg-beige-1 flex flex-col relative
        text-accent-2
        w-screen
        p-10'>
        
        <div className='flex justify-between'>
            {/* типо хедер */}
            <div>
                <h2 className='text-blue text-3xl mb-4'>Моя библиотека</h2>
                <h3 >Ваши книги для личного и совместного просмотра</h3>
            </div>
            {modalOpen && <LibraryModal state={modalOpen} setState={setModalOpen}/>}
            <button className=' relative bg-accent-1 text-beige-1 rounded-xl h-fit py-4 px-8 pl-10 cursor-pointer'
            onClick={()=>setModalOpen(!modalOpen)}
            >
                Добавить
                <svg className='absolute  ml-2 left-3 top-1/2 -translate-y-1/2 w-5 h-5'
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>    
            </button>
        </div>
        <div>            
            <div className='flex flex-col'>    
                {/* книги */}            
                <div className='flex mt-4 border-b-accent-1 border-b pb-4'>
                    {/* сорт книг */}
                    <h2 className='text-accent-2  text-xl'>Сортировать по:</h2>
                    <select
                        className="ml-2 px-2 rounded-xl bg-accent-2 text-beige-1
                                focus:outline-none  focus:border-transparent
                                cursor-pointer"
                        >
                        <option value="date">Дате добавления</option>
                        <option value="name">Названию</option>
                    </select>
                </div>
                <div className="grid grid-cols-4 gap-10">
                    {items.map(([key, values]) => (
                                    <LibraryBook key={key} {...values}/>
                    ))}
                </div>
            </div>
        </div>
        

        </div>
    </div>
    
    </>
  )
}
