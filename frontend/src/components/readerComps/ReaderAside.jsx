import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ReaderNote from './ReaderNote'
import ReaderModal from './ReaderModal'
import notesJson from './notes.json'
import phrazesJson from './phrazes.json'
export default function ReaderAside() {

    const [modalOpen, setModalOpen] = useState(false)
    const [currentType, setType] = useState('note')
    const [notesList, setNotesList] = useState([])
    const [phrazesList, setPhrazesList] = useState([])

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

     // колбэк для добавления заметки из ReaderModal
    const handleAddNote = (page, text) => {
        const key = Date.now()        
        if (currentType === "note"){
            const newNotes = { ...Object.fromEntries(notesList), [key]: { page, text } }
            localStorage.setItem('notes', JSON.stringify(newNotes))
            setNotesList(Object.entries(newNotes))
        }else{
            const newNotes = { ...Object.fromEntries(phrazesList), [key]: { page, text } }
            localStorage.setItem('phrazes', JSON.stringify(newNotes))
            setPhrazesList(Object.entries(newNotes))
        }
        
        
    }

    useEffect(() => {
        // Notes
        const savedNotes = JSON.parse(localStorage.getItem('notes'))
        if (savedNotes) {
            setNotesList(Object.entries(savedNotes))
        } else {
            // Если нет, используем notes.json и сохраняем в LocalStorage
            localStorage.setItem('notes', JSON.stringify(notesJson))
            setNotesList(Object.entries(notesJson))
        }

        // Phrazes
        const savedPhrazes = JSON.parse(localStorage.getItem('phrazes'))
        if (savedPhrazes) {
            setPhrazesList(Object.entries(savedPhrazes))
        } else {
            localStorage.setItem('phrazes', JSON.stringify(phrazesJson))
            setPhrazesList(Object.entries(phrazesJson))
        }
    }, [])
  return (
    <div className='
    max-w-[15vw] min-w-[15vw]
    flex flex-col bg-gray text-beige-1'>
        <h2 className='px-2 ml-2'>Найти в книге:</h2>
        <select
            value={currentType}
            onChange={(e) => setType(e.target.value)}
            className="ml-2 px-2 rounded-xl bg-accent-2 text-beige-1
                    focus:outline-none  focus:border-transparent
                    cursor-pointer"
            >
            <option value="note">Заметку</option>
            <option value="phraze">Цитату</option>
        </select>
        <div className='h-[80%] overflow-y-auto flex flex-col gap-8'>
            {currentType === "note" && notesList.map( ([key, values]) => (<ReaderNote key={key} {...values}/>))}
            {currentType === "phraze" && phrazesList.map( ([key, values]) => (<ReaderNote key={key} {...values}/>))}
        </div>
        <button 
            onClick={()=>{
                openModal(1, "123")
            }}
            
            className=' mx-4 relative bg-accent-1 text-beige-1 rounded-xl h-fit py-2 px-8 pl-10 cursor-pointer'>
                Добавить
            <svg className='absolute  ml-2 left-6 top-1/2 -translate-y-1/2 w-5 h-5'
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>    
        </button>
        {modalOpen && (
            <ReaderModal
            onClose={closeModal}
            onAddNote={handleAddNote}
                />
        )}
    </div>
  )
}
