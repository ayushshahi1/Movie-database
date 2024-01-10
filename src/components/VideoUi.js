import React from 'react'
import { useGetMovieVideoQuery } from '../features/movieApi'
import { Carousel } from "@material-tailwind/react";

const VideoUi = ({id}) => {

  const {isError,isLoading,data, error}=  useGetMovieVideoQuery(id)
  if (isLoading){
    return <div className='h-[400px]'>
    <dotlottie-player src="https://lottie.host/27d699a8-8649-487f-b815-942e06d47ffd/N7V5OSMxlt.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
      
    </div>
    }
  console.log("VideoUi",data)
  return (


<div>

    <Carousel className="rounded-xl">
    {data && data.results.map((playList,i)=>{

return <div >

<iframe 
allowFullScreen
className='aspect-video w-full object-cover '
src={`https://www.youtube.com/embed/${playList?.key}`}>
</iframe>
</div>
      })
    }
    
    </Carousel>


    
      
    </div>
  )
}

export default VideoUi
