import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetMovieByCategoryQuery } from '../features/movieApi'
import { baseImage } from '../features/constants';

const MoviePage = () => {

  const nav = useNavigate();
const {category,page} = useParams();
const {isLoading,isError,data,error,isFetching} = useGetMovieByCategoryQuery({
  category:category,
  page: page
})

if (isLoading || isFetching){
  return <div className='h-[400px]'>
  <dotlottie-player src="https://lottie.host/27d699a8-8649-487f-b815-942e06d47ffd/N7V5OSMxlt.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
    
  </div>
  }
  
  if (isError){
  
  }
    return (
      
      <>
      
          <div className='grid grid-cols-4 p-4 gap-4 items-start'>
  
            {data && data.results.map((movie)=>{
              return <div onClick={() => nav(`/movieDetail/${movie.id}`)} key={movie.id} className='space-y-2 cursor-pointer'>
              
                <img className='rounded-md' src={`${baseImage}${movie.poster_path}`} alt="" />
                <h1 className='font-semibold'>{movie.title}</h1>
              </div>
            })}
          </div>
          <div className='flex justify-center space-x-4 pb-2'>
            <button 
            onClick={()=> nav(`/moviePage/${category}/${data.page - 1}`)}
            disabled={data?.page === 1 ? true :false}>Prev</button>
            <h1>{data?.page}</h1>
            {console.log(data?.page)}
            <button
            onClick={()=> nav(`/moviePage/${category}/${data.page + 1}`)}
            disabled = {data?.page === data.total_pages ? true : false}>Next</button>
          </div>
         
      </>
    )
}

export default MoviePage
