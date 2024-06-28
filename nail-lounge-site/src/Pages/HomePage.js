import React, {Component, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    const toMenu = () => {
        navigate('/Menu')
    }
    //Add photos here
    return (

        <body>
            <header>
                <a>
                    101 Nail Lounge
                </a>
            </header>

            <br/>

            <div>
                <h3>Address</h3>
                <p>541 South Coast Highway 101, Encinitas, CA 92058</p>
            
                <br/>

                <h3>Phone Number</h3>
                <a>
                    (760)-621-8888
                </a>

                <br/>
                
                <Link to= "/menu">Menu</Link>
            </div>

            <br/>

        </body>
    );
}

export default HomePage;