import React,{Component} from 'react';
import {Movie} from '../../components'
import axios from 'axios'

class Main extends Component {

  state = {   
    movies: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US&page=1`)
      .then(res => {
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
        language:this.populateLanguageFullName(element.original_language),
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

  populateLanguageFullName(language)
  {
      if(language === "en")
      {
        return "English"
      }
      else if (language === "ko")
      {
        return "Korean"
      }
      else if (language === "es")
      {
        return "Spanish"
      }
       return language
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