import React from 'react'
import unicorn from '../assets/unicorn.svg'
export default function UnicornEmoji(){
    return(
        <img src={unicorn} style={{
            width: 200,
            height: 200,
            margin: '0 auto',
            display: 'block'
        }}/>
    )
} 

