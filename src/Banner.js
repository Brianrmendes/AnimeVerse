import React, {useEffect, useState} from "react";
import "./Banner.css";
import axios from './axios';
import requests from './Request';

function Banner(){

    const [anime, setAnime] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchMystery);
            setAnime(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }

        fetchData();
        
    }, []);

    console.log(anime);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...': string;

    }

    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${anime?.backdrop_path}")`,
            backgroundPosition: "center center",

        }}
        >
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">

        </link>  

        <div className="banner__contents">
        <h1 className="banner__title animate__fadeInDown">
            {anime?.title || anime?.name || anime?.original_name}
        </h1>
        {/* <div className="banner__buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div> */}
        
        <h1 className="banner__description animate__fadeInUp">
            {truncate(
            anime?.overview
                ,300)}
        </h1>
        </div>

        <div className="banner--fadeBottom"/>
        
        </header>

    );
    

}

export default Banner;