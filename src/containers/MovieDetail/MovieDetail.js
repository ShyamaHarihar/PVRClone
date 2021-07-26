import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../config/config";
import TopMovie from "../TrendingMovies/TopMovie"
import MovieCard from "../MovieCard/MovieCard"
import './index.css'
import {
    Table,
    Tbody,
    Tr,
    Td,
    SimpleGrid,
    Text,
    Button
} from "@chakra-ui/react"
const MovieDetail = (props) => {
    const [moviedetail, setMoviedetail] = useState([])
    const [actors, setActors] = useState([])
    const [actortoggleview, setActortoggleview] = useState(false);
    // const movie_Id = props.match.params.movieId
    useEffect(() => {
        const movie_Id = props.match.params.movieId;
        fetch(`${API_URL}movie/${movie_Id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => { setMoviedetail(response); console.log(response) })

        fetch(`${API_URL}movie/${movie_Id}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                setActors(response.cast)
                console.log(response.cast)
            })
        // eslint-disable-next-line
    }, [])
    const handleloadactors = () => {
        setActortoggleview(!actortoggleview);
    }
    return (
        <div>
            {/*This is the Top Movie component*/}
            {moviedetail &&
                <TopMovie image={`${IMAGE_URL}w1280${moviedetail.backdrop_path}`}
                    title={moviedetail.original_title}
                    vote={moviedetail.vote_average}
                    date={(moviedetail.release_date)}

                />
            }
            {/*The information about the movie as table*/}
            <Text fontSize="3xl" fontFamily="Roboto" as="kbd">About the Movie</Text>
            <Table size="md" variant="unstyled" className="tableclass">
                <Tbody>
                    <Tr>
                        <Td>Title</Td>
                        <Td>{moviedetail.original_title}</Td>
                    </Tr>
                    <Tr>
                        <Td>Status</Td>
                        <Td>{moviedetail.status}</Td>
                    </Tr>
                    <Tr>
                        <Td>Release Date</Td>
                        <Td>{moviedetail.release_date}</Td>
                    </Tr>
                    <Tr>
                        <Td>Revenue</Td>
                        <Td>{moviedetail.revenue}</Td>
                    </Tr>
                    <Tr>
                        <Td>Runtime</Td>
                        <Td>{moviedetail.runtime}</Td>
                    </Tr>
                    <Tr>
                        <Td>Popularity</Td>
                        <Td>{moviedetail.popularity}</Td>
                    </Tr>
                    <Tr>
                        <Td>Vote Count</Td>
                        <Td>{moviedetail.vote_count}</Td>
                    </Tr>
                    <Tr>
                        <Td>Vote Average</Td>
                        <Td>{moviedetail.vote_average}</Td>
                    </Tr>
                </Tbody>
            </Table>
            {/*To view the actors as a grid*/}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
                <Button
                    colorScheme="yellow"
                    variant="solid"
                    style={{ align: "center" }}
                    onClick={handleloadactors}>CAST</Button>
            </div>

            {
                actortoggleview &&
                <SimpleGrid columns={[4, 4]} spacingX="40px" spacingY="20px" minChildWidth="360px">
                    {actors && actors.map((actor, index) => (
                        <React.Fragment key={index}>
                            {actor.profile_path &&
                                <MovieCard
                                    actor image={`${IMAGE_URL}w500${actor.profile_path}`}
                                />
                            }

                        </React.Fragment>
                    ))}


                </SimpleGrid>
            }


        </div>
    )
}

export default MovieDetail;
