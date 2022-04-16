import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieCard from './MovieCard';
import CasaDescript from './MovieDescription/CasaDePapel'
import GladiaDescript from './MovieDescription/Gladiator'
import TransDescript from './MovieDescription/Transporteur'
import HarryDescript from './MovieDescription/HarryPotter'
import PrisonDescript from './MovieDescription/PrisonBreak'
import GameDescript from './MovieDescription/GameOfThrone'
import SuitsDescript from './MovieDescription/CasaDePapel'

function App() {
  return (
    <div className="App">
    <div>
      <Link to='/'>
      <h1>Home</h1>
      </Link>
      </div>
     <Routes>
    <Route path='/' element={ <MovieCard/>}/>
    <Route path='/game_of_throne' element={<GameDescript/>}/>
    <Route path='/casa_de_papel' element={<CasaDescript/>}/>
    <Route path='/gladiator' element={<GladiaDescript/>}/>
    <Route path='/suits' element={<SuitsDescript/>}/>
    <Route path='/harry_potter' element={<HarryDescript/>}/>
    <Route path='/transporteur' element={<TransDescript/>}/>
    <Route path='/prison_break' element={<PrisonDescript/>}/>
    </Routes>
    </div>
  );
}

export default App;