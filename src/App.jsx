import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/game-over' element={<GameOver />} />
        <Route path='*' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
