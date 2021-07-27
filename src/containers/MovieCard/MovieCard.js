import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css';
const MovieCard = (props) => {
    if (props.actor) {
        return (
            <div>
                <Box boxShadow="rgba(255, 255, 255, 0.7) 0px 5px 10px 0px;"
                    maxW="sm"
                    borderWidth="0px"
                    borderRadius="5px"
                    overflow="hidden">
                    <Box m="7">
                        {/* <img style={{ width: '100%', height: '400px' }}
                            alt="poster not available"
                            src={props.image} /> */}
                        <LazyLoadImage
                            alt={"this is an image"}
                            width='100%'
                            height='400px'
                            effect="blur"
                            src={props.image} />
                    </Box>
                </Box>
            </div>
        )
    }
    else {
        return (
            <div>
                <Box boxShadow="rgba(255, 255, 255, 0.7) 0px 5px 10px 0px;"
                    maxW="sm"
                    borderWidth="0px"
                    borderRadius="5px"
                    overflow="hidden">
                    <Box m="7">
                        <a href={`/movie/${props.movieId}`}>
                            <LazyLoadImage
                                style={{ width: '100%', height: '400px' }}
                                alt="poster not available"
                                effect="blur"
                                src={props.image} />
                        </a>
                        <Box m="3" className="movietitle">{props.moviename}</Box>
                        <Text fontSize="sm" >&#11088;{props.vote}</Text>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default MovieCard;
