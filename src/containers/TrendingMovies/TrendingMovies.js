import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../config/config";
import TopMovie from "./TopMovie"
const TrendingMovies = () => {
    const [trendingmovie, setTrendingmovie] = useState([])
    useEffect(() => {
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setTrendingmovie(response.results)
            })
    }, [])
    return (
        <div>
            {
                trendingmovie[0] &&
                <TopMovie image={`${IMAGE_URL}w1280${trendingmovie[0].backdrop_path}`}
                    title={trendingmovie[0].original_title}
                    text={trendingmovie[0].overview}
                    vote={trendingmovie[0].vote_average}
                    date={(trendingmovie[0].release_date)}

                />
            }
        </div>
    )
}

export default TrendingMovies
