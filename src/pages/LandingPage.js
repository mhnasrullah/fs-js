import React from 'react'
import Header from '../parts/Header'

export default function LandingPage(props) {
    console.log(props);
    return (
        <Header {...props}/>
    )
}
