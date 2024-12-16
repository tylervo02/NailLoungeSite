import React, {Component, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Slide } from 'react-slideshow-image'

import Logo from '../Images/101-logo.png'
import OutsidePhoto1 from '../Images/IMG_E2484.JPG';
import OutsidePhoto2 from '../Images/IMG_E2485.JPG';
import DesignPhoto1 from '../Images/IMG_0761.JPG';
import DesignPhoto2 from '../Images/DesignImage3.jpg';
import '../output.css';
import 'react-slideshow-image/dist/styles.css';

function HomePage() {
    const navigate = useNavigate();

    const toMenu = () => {
        navigate('/Menu')
    }
    //Images for designs
    const slideImages = [
        {
            url: OutsidePhoto1,
            caption: 'Slide 1'
        },
        {
            url: OutsidePhoto2,
            caption: "Slide 2"
        },
        {
            url: DesignPhoto1,
            caption: "Slide 3"
        },
        {
            url: DesignPhoto2,
            caption: "Slide 4"
        }
    ];

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
        backgroundSize: 'contain',
        height: '200px',
        backgroundRepeat: 'no-repeat'
      }

    //Add photos here
    return (

        <body class = "flex flex-col min-h-screen">
            
            {/* Top Navigation Bar*/}


            <header class="bg-white">
                <Link to='/'><img src={Logo} alt ="Logo"/></Link>
                {/*Slideshow with interior of shop and selected designs*/}
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))} 
                </Slide>
                
                
            </header>


            <br/>
            <div>
                {/*Placeholder story, might replace later*/}
                <h1>Who We Are</h1>
                <p>We are a local nail salon facing the beach of Encinitas. Hope you can visit us soon.</p>
                <button class="text-white bg-purple-600 hover:bg-purple-900 font-bold py-2 px-4 border-purple-600 rounded" onClick={toMenu}>Our Menu</button>
            </div>
            
            {/*This goes at the bottom*/}
            <footer class="bg-purple-800 text-white mt-auto">
                <h3>Address</h3>
                <p>541 South Coast Highway 101, Encinitas, CA 92058</p>
            
                <br/>

                <h3>Phone Number</h3>
                <a>
                    (760)-621-8888
                </a>

                <br/>
                
                
            </footer>

            <br/>

        </body>
    );
}

export default HomePage;