import React, {Component, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Menu {
    const navigate = useNavigate();

    const toHomepage = () => {
        navigate("/HomePage");
    }

    // I want some dropdown boxes here.    
    return (
        <div>
            <h2>Our Specialty</h2>

            <p>Full Set With Gel Color………………...$45 <br/>
            Full Set With Regular Color……………$41 <br/>
            Fill With Gel Color……………………..$39 <br/>
            Fill With Regular Color………………...$45 <br/>
            Long Nails, 3 Colors or more……...$5 extra <br/>
            </p>

            <h2>Gel Manicure</h2>

            <p>With Soak-Off…………………………..$40 <br/>
            Without Soak-Off……………………….$42 <br/>
            With Extended Nails……………………$52 <br/>
            </p>

            <h2>Regular Manicure</h2>

            <p>SeaSpray Mani………………………….$19 <br/>
            SeaBreaze Deluxe Mani………………...$31 <br/>
            Includes sugar scrub and paraffin wax <br/>
            </p>

            <h2>Pedicure</h2>
            
        </div>
    );
}