
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Home from './Home.jsx'

function App() {

  return (
    <>
        <div id="container">
      <h1>Color</h1>
      <div id="navbar">
        <Link to="/">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue /> } />
          <Route path="/red" element={<Red /> } />
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
