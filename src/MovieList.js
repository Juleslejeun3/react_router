import {useState, useEffect} from 'react'
import CasaDePapel from './Poster/Casa de papel.jpg'
import Gladiator from './Poster/Gladiator.jpg'
import GOT from './Poster/GOT.jpg'
import PrisonBreak from './Poster/Prison Break.jpg'
import Suits from './Poster/Suits.jpg'
import Transporteur from './Poster/Transporteur.jpg'
import HarryPotter from './Poster/HarryPotter.jpg'
import { Route, Routes, Link } from 'react-router-dom'


function MovieList() {
     const [movie,setMovie] = useState([{title:'Casa de Papel',poster:CasaDePapel, description:'Un film de bracage intelligent', rating:1},{title:"Game Of Throne",poster:GOT, description:"Un film d'aventur où plusieurs famille sont à la conquête du trone de fer", rating:2},{title:'Gladiator', description:"Un folm de combat de gladiateurs", poster:Gladiator, rating:3},{title:'Suits', description:"Un fil d'avocats", poster:Suits, rating:4},{title:'Prison Break', description:"Un film de prisonniers fugitifs", poster:PrisonBreak, rating:5},{title:'Transporteur', description:"Un film de missionnaire driver", poster:Transporteur, rating:6},{title:'Harry Potter', description:"Un film de Sorciers", poster:HarryPotter, rating:7}])

    useEffect(() => {
        setMovie(movie)
    }, [])
    return (
        <div className='movie'>
        <ul>
        <li><Link to='/game_of_throne'><img src={GOT} alt="GOT film" /></Link></li>
        <li><Link to='/casa_de_papel'><img src={CasaDePapel} alt="casa de papel film" /></Link></li>
        <li><Link to='/gladiator'><img src={Gladiator} alt="gladiator film" /></Link></li>
        <li><Link to='/suits'><img src={Suits} alt="suits film" /></Link></li>
        <li><Link to='/harry_potter'><img src={HarryPotter} alt="harry potter film" /></Link></li>
        <li><Link to='/transporteur'><img src={Transporteur} alt="transporteur film" /></Link></li>
        <li><Link to='/prison_break'><img src={PrisonBreak} alt="prison break film" /></Link></li>
    </ul>
        </div>
    )
}

export default MovieList
