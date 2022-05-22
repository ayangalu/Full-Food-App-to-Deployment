import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import Search from './Components/Search'
import French from './Pages/French'
import Italian from './Pages/Italian'
import Korean from './Pages/Korean'
import Foodid from './Pages/foodId'
import Snacks from './Pages/Snacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/korean' element={<Korean />} />
        <Route path='/italian' element={<Italian />} />
        <Route path='/food/:id' element={<Foodid />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/french' element={<French />} />
      </Routes>
    </div>
  )
}

export default App
