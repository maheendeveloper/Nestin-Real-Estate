
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Agents from './pages/Agents';


function App() {
 

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/findanagent' element={<Agents/>}/>
     </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
