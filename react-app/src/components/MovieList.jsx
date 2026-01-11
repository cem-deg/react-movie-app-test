import Movie from './Movie';
import { movie_list } from '../data';

export default function MovieList() {
  const movie_list = [
    {
    id : 1,
    image : "1.jpg",
    title : "Kaptan Amerika",
    description : "Guzel bir film.",
    is_active : true,
    is_new : true,
    },
    {
    id : 2,
    image : "2.jpg",
    title : "Araba Hırsızlari",
    description : "Guzel bir film.",
    is_active : true,
    is_new : true,
    },
    {
    id : 3,
    image : "3.jpg",
    title : "The Codes of War",
    description : "Guzel bir film.",
    is_active : true,
    is_new : false,
    },
    {
    id : 4,
    image : "4.jpg",
    title : "Moana 2",
    description : "Guzel bir film.",
    is_active : true,
    is_new : true,
    },
  ]
  
  return (
    <div className='container'>
      <h2 className='title'>Movie List</h2>

      {
        movie_list.filter(m => m.is_active).length == 0 ? (
          <div>Film bulunamadi.</div>
        ) : (
          <div id="movie-list" className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4'>
          {movie_list.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
        )}
    </div>
  );
}