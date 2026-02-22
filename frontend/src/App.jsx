import { Routes, Route  } from 'react-router-dom'
import MainView from './pages/MainView'
import LibraryView from './pages/LibraryView'
import ReaderView from './pages/ReaderView'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/library" element={<LibraryView />} /> 
        <Route path="/reader" element={<ReaderView />} /> 
      </Routes>
    </>
  )
}

export default App
