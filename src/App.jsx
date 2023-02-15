import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import ReactModal from 'react-modal';
import './App.css';

// Chamar SCORM Provider

// Components
import Navbar from './components/Navbar';

// Rotas
import Home from './pages/Home'

// Import SCORM Hook
import useScorm from './hooks/useScorm'


function App() {
  const { scorm } = useScorm()
  
  
  useEffect(() => {
    
    (async function() {
      await scorm.init()
    })()
    
    scorm.setScore('100')
  }, [scorm])
  
  useEffect(() => {
    ReactModal.setAppElement('.App')
  }, [])

  return (
    <div className="App" id='app'>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
