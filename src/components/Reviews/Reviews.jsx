import React,{Component} from 'react';
import axios from 'axios'
import  style from './reviews.module.css'

class Reviews extends Component {
    constructor(props) {
       super(props)
        this.state = {
            MovieReview:[]
           
        }
     }

     componentDidMount() {
        //get movies id dynamically
        const moviesId = this.props.match.params.id
        let url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US`
        axios.get(url)
            .then(res => {
                this.setState({MovieReview:res.data.results})
            }
            )
            .catch()

    }

  
     renderTableHeader() {
        let header = ["Author","Excerpt","More"]
        return header.map( v => {
           return <th key={v+1}>{v}</th>
        })
     }
  
     renderTableData() {
        return this.state.MovieReview.map(v => {
           const { id, author, content, url } = v 
           let a = 1;
           return (
              <tr key={id}>
                 <td>{author}</td>
                 <td 
                 className={style.multilineLabelTd}>
                    {content}
                    </td>
                 <td><a href={url} >Full Review </a></td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div className={style.container}>
              <div className={style.centerAlign}>
                 {
                 
                 this.state.MovieReview && this.state.MovieReview.length > 0? 
              <table id='movies' className={style.tableStyling}>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
              : <div className={style.noReviewsFound}> No reviews Found </div>
     }
           </div>
           </div>
        )
     }
  }
  
  export default Reviews;