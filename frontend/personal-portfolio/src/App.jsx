import Home from "./assets/pages/Home"
import Projects from "./assets/pages/Projects"
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
      </Routes>
 
    </Router>
  )
}

export default App
