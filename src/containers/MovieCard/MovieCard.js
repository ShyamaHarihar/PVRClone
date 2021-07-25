import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import './index.css';
const MovieCard = (props) => {
    return (
        <div>
            <Box maxW="sm" borderWidth="2px" borderRadius="10px" overflow="hidden">
                <Box m="7">

                    <a href={`/movie/${props.movieId}`}>
                        <img style={{ width: '100 %', height: '320px' }}
                            alt="sorry"
                            src={props.image} />
                    </a>
                    <div className="movietitle">{props.moviename}</div>
                    <Text fontSize="sm" >&#11088;{props.vote}</Text>
                </Box>
            </Box>
        </div>
    )
}

export default MovieCard;
