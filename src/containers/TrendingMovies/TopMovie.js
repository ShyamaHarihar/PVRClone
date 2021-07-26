import React from 'react'
import { Text } from "@chakra-ui/react";
const TopMovie = (props) => {
    return (
        <div style={{
            backgroundImage: `url('${props.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
            opacity: '0.6',
            position: 'relative'//to place text on image
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem', fontFamily: "Roboto,sans-serif" }}>
                    <Text fontSize="3xl" fontFamily="Roboto,sans-serif"> {props.title}</Text>
                    <p style={{ color: 'yellow', fontSize: '1rem' }} >{"Rating " + props.vote}</p>
                    <p style={{ color: 'white', fontSize: '1rem' }} >{"Release Date " + props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default TopMovie;
