// ReaderModal.jsx
import { useState } from "react"
export default function ReaderModal({ onClose, onAddNote, type }) {
  const [page, setPage] = useState('')
  const [text, setText] = useState('')

  const addNote = () => {
    if (!page || !text) return
    onAddNote(page, text) // уведомляем родителя
    setPage('')
    setText('')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-10">
      <div className="bg-beige-1 p-6 rounded max-w-lg w-full text-blue flex flex-col gap-2">
        <input
          type="text"
          placeholder="Введите страницу"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <input
          type="text"
          placeholder={`Введите ${type === "note" ? "заметку" :"цитату"}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-8">
          <button onClick={addNote} className="mt-4 btn">
            Добавить
          </button>
          <button onClick={onClose} className="mt-4 btn">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}