import React from 'react'
import jinguLogo from '../assets/jingu.png'

export default function JinguLogo(){
    return(
        <img src={jinguLogo} style={{
            width: 200,
            height: 200,
            borderRadius: 200,
            marginLeft: 'auto',
            display: 'block'
        }}/>
    )
} 