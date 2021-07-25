import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { FormControl, Select, Button } from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons';
import './index.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const Slideshow = () => {
        const images = [
            'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_1500,w_3500/v1626527749/popcorn2.jpg',
            'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_1500,w_3500/v1626528959/moviehall.jpg',
            'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_1500,w_3500/v1626529302/arlinda-1CfBmk3VD2o-unsplash_1_kfhwkj.jpg'
        ];

        const zoomInProperties = {
            indicators: true,
            scale: 1.4
        }
        return (
            <div>
                <Zoom {...zoomInProperties}>
                    {images.map((each, index) => (
                        <div key={index} style={{ width: "100%" }}>
                            <img style={{ objectFit: "cover", width: "100%" }} src={each} alt="could not load" />
                        </div>
                    ))}
                </Zoom>
            </div>
        )
    }

    const navbar = () => {
        return (
            <div className="nav-style" background_color="black">

                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    width="15rem"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <TriangleUpIcon color="white.500" boxSize={5} />
                    <FormControl id="country">
                        <Select
                            placeholder="Enter location"
                            size="md"
                            variant="flushed"
                            className="dropdown"
                            focusBorderColor="none">
                            <option>Chennai</option>
                            <option>Coimbatore</option>
                            <option>Mumbai</option>
                        </Select>
                    </FormControl>
                </Button>
                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    width="10rem"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <Link to='/trendingmovies'>TRENDING NOW</Link>
                </Button>
                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    width="7rem"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <Link to='/login'>LOG IN</Link>
                </Button>
                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    width="7rem"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <Link to='/signup'>SIGN UP</Link>
                </Button>
            </div >



        )
    }

    return (
        <div>
            {navbar()}
            {Slideshow()}
        </div>
    )
}
export default HomePage;
