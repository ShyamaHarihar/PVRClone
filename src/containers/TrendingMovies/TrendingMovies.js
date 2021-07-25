import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../config/config";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from '../MovieCard/MovieCard'
import TopMovie from "./TopMovie"
import { Text, Button } from "@chakra-ui/react";
import './index.css'
const TrendingMovies = () => {
    const [trendingmovie, setTrendingmovie] = useState([]);
    const [currentpage, setCurrentPage] = useState(0);
    const fetchmovies = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setTrendingmovie([...trendingmovie, ...response.results])
                setCurrentPage(response.page)
            })
    }
    useEffect(() => {

        const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        fetchmovies(endpoint)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleload = () => {
        const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentpage + 1}`
        fetchmovies(endpoint)
    }

    return (
        <div>
            {
                trendingmovie[0] &&
                <TopMovie image={`${IMAGE_URL}w1280${trendingmovie[0].backdrop_path}`}
                    title={trendingmovie[0].original_title}
                    vote={trendingmovie[0].vote_average}
                    date={(trendingmovie[0].release_date)}

                />
            }
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Text style={{ color: 'white' }} fontSize="3xl" fontFamily="Roboto,sans-serif">Latest Movies</Text>
                <SimpleGrid columns={[4, 4]} spacingX="40px" spacingY="20px" minChildWidth="360px">
                    {trendingmovie && trendingmovie.map((trendingmovie, index) => (
                        <React.Fragment key={index}>
                            <MovieCard
                                image={trendingmovie.poster_path && `${IMAGE_URL}w500${trendingmovie.poster_path}`}
                                movieId={trendingmovie.id}
                                moviename={trendingmovie.original_title}
                                vote={trendingmovie.vote_average}
                            />
                        </React.Fragment>
                    ))}


                </SimpleGrid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        colorScheme="whiteAlpha"
                        size="xs"
                        onClick={handleload}>
                        Load More
                </Button></div>
            </div>

        </div>
    )
}

export default TrendingMovies;
