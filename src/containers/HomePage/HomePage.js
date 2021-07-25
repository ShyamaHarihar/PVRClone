import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Button } from "@chakra-ui/react";
import './index.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const Slideshow = () => {
        const images = [
            { url: 'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_1500,w_3500/v1626527749/popcorn2.jpg' },
            { url: 'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_1500,w_3500/v1626528959/moviehall.jpg' },
            { url: 'https://res.cloudinary.com/drgemwb6e/image/upload/c_scale,h_800,w_2800/v1626529302/arlinda-1CfBmk3VD2o-unsplash_1_kfhwkj.jpg' }
        ];


        return (
            <div>
                <SimpleImageSlider
                    width={"100%"}
                    height={500}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>

        )
    }

    const navbar = () => {
        return (
            <div className="nav-style">
                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    className="popularmovies"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <Link to='/trendingmovies'>POPULAR MOVIES</Link>
                </Button>
                <Button
                    colorScheme="white"
                    height="2.5rem"
                    variant="outline"
                    className="login"
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
                    className="signup"
                    fontWeight="light"
                    borderRadius="5px"
                    borderWidth="1.8px"
                >
                    <Link to='/signup'>SIGN UP</Link>
                </Button>
            </div>



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
