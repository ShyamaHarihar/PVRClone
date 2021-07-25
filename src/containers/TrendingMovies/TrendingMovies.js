import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../config/config";
import { Grid, GridItem } from "@chakra-ui/react";
import TopMovie from "./TopMovie"
import { Text } from "@chakra-ui/react";
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
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Text style={{ color: 'white' }} fontSize="3xl">Latest Movies</Text>

            </div>
        </div>
    )
}

export default TrendingMovies
