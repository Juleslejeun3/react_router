import { Component } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';
class MovieCard extends Component {
  state = {show : false  }

  handleShow=()=>this.setState({show:true})
  handleCached=()=>this.setState({show:false})
  render(){
    let show = this.state.show;
    let Button;
    if (show) {
      Button = <button onClick={this.handleCached}>Fermer Liste Films</button>;
    } else {
      Button = <button onClick={this.handleShow}> Ouvrir Liste Films</button>;
    }
   
  return (
    <div className="MovieCard">
    <div>
    <Filtre/>
</div>
    <div>
    {Button}
    </div>
    {show?<MovieList/> : null}
    </div>

  );
}
}


export default MovieCard;