import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import './index.css';
const MovieCard = (props) => {
    return (
        <div>
            <Box boxShadow="rgba(255, 255, 255, 0.7) 0px 5px 10px 0px;"
                maxW="sm"
                borderWidth="0px"
                borderRadius="5px"
                overflow="hidden">
                <Box m="7">
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{ width: '100%', height: '400px' }}
                            alt="sorry"
                            src={props.image} />
                    </a>
                    <Box m="3" className="movietitle">{props.moviename}</Box>
                    <Text fontSize="sm" >&#11088;{props.vote}</Text>
                </Box>
            </Box>
        </div>
    )
}

export default MovieCard;
