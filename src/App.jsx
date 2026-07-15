import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Game from './pages/game/Game'
import GameOver from './pages/gameOver/GameOver'
import NotFound from './pages/notfound/NotFound.jsx'


import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Game/>}/>
                <Route path='/game-over' element={<GameOver/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
