import { Routes, Route  } from 'react-router-dom'
import MainView from './pages/MainView'
import LibraryView from './pages/LibraryView'
import ReaderView from './pages/ReaderView'
import SessionsView from './pages/SessionsView'
import ProfileView from './pages/ProfileView'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/library" element={<LibraryView />} /> 
        <Route path="/reader" element={<ReaderView />} /> 
        <Route path="/sessions" element={<SessionsView />} /> 
        <Route path="/profile" element={<ProfileView />} /> 
      </Routes>
    </>
  )
}

export default App
