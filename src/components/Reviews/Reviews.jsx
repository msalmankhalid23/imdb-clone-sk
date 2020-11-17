import React, { useState, useEffect } from 'react';
import axios from 'axios'
import style from './reviews.module.css'

const Reviews = (props) => {

   const [movieReview, setMovieReview] = useState([])
   //get movies id from dynamic routing
   const moviesId = props.match.params.id
   useEffect(() => {

      let url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US`
      axios.get(url)
         .then(res => {
            setMovieReview(res.data.results)
         }
         )
         .catch()
   }, [moviesId])


   const renderTableHeader = () => {
      let header = ["Author", "Excerpt", "More"]
      return header.map(v => {
         return <th key={v + 1}>{v}</th>
      })
   }

   const renderTableData = () => {
      return movieReview.map(v => {
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

   return (
      <div className={style.container}>
         <div className={style.centerAlign}>
            {

               movieReview && movieReview.length > 0 ?
                  <table id='movies' className={style.tableStyling}>
                     <tbody>
                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                     </tbody>
                  </table>
                  : <div className={style.noReviewsFound}> No reviews Found </div>
            }
         </div>
      </div>
   )
}


export default Reviews;