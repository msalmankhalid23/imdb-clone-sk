import React,{Component} from 'react';
import Movie from '../Components/Movie'
import axios from 'axios'

class Main extends Component {

  state = {   
    movies: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US&page=1`)
      .then(res => {
        {console.log(res.data.results)}
        this.customDataParsing(res.data.results)
      })
  }

  customDataParsing(data)
  {
    let movieData = []
    data.forEach(element => {
      let movie = {
        id:element.id,
        popularity:element.popularity,
        language:element.original_language,
        title:element.title,
        overview:element.overview,
        releaseDate:element.release_date,
        rating:element.vote_average,
        imagePath: element.poster_path
      }
      movieData.push(movie)
    });

    this.setState({movies:movieData})
  }

    render()
    {
      return (
        <div style={{ backgroundColor:"#0098ad", minHeight:"100px", overflow:"hidden" }}>
          
            {this.state.movies.map(m => {
              return  <Movie key={m.id} movie={m} />
            })}
       
      </div>
      )
    }
  }
  
  export default Main;