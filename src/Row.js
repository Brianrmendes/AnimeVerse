import React,{useEffect,useState} from 'react'
import "./Row.css";
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row({title,fetchUrl,isLargeRow=false}) {
    const[animes,setAnimes]=useState([]);
    const[trailerUrl,setTrailerUrl] =useState("")
    const base_url="https://image.tmdb.org/t/p/w500";

    useEffect(() =>{
    async function fetchData(){
       const request =await axios.get(fetchUrl);
       setAnimes(request.data.results);
       return request;
    }
    fetchData();
},[fetchUrl])
console.log(animes);
const handleTrailer=(anime)=>{
    if(trailerUrl){
        setTrailerUrl("")}
    //  else if(anime.name="Attack on Titan")
    //  {
    //     return <YouTube videoId="M_OauHnAFc8" opts={opts} />;
    //  }
    else{
        movieTrailer(anime?.name || "").then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'));
        }).catch(()=> console.log('Temporarily unavailable'))
    }

}
console.log(trailerUrl);
const opts={
    height:"390",
    width:"100%",
    playerVar:{
        autoplay:1,
    }
}
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
            {animes.map(anime=>(
               (isLargeRow && anime.poster_path) 
                && (
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={anime.id}
                onClick={()=>handleTrailer(anime)}
                 src={`${base_url}${
                    isLargeRow?anime.poster_path :anime.poster_path
                }`} alt={anime.name} />
              
               )
             
            ))}
            </div>
        
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row