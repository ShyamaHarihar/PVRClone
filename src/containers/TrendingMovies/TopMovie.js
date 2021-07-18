import React from 'react'
import { Text } from "@chakra-ui/react";
const TopMovie = (props) => {
    return (
        <div style={{
            background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${props.image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <Text fontSize="3xl">{props.title}</Text>
                    <p style={{ color: 'white', fontSize: '1rem' }}>{props.text}</p>
                    <p style={{ color: 'yellow', fontSize: '1rem' }}>{"Rating " + props.vote}</p>
                    <p style={{ color: 'white', fontSize: '1rem' }}>{"Release Date " + props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default TopMovie;
