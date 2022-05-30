import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

// Chamar SCORM Provider

// Components
import Navigation from './components/navigation';

// Rotas
import Home from './pages/Home'
import TesteRota from './pages/TesteRota'

// Import SCORM Hook
import useScorm from './hooks/useScorm'

function App() {
  const { scorm } = useScorm()

  useEffect(() => {
    (async function() {
      await scorm.init()
    })()
  }, [scorm])

  return (
        <div className="App">
          <Navigation />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/testerota' element={<TesteRota />} />
          </Routes>
        </div>
  );
}

export default App;
