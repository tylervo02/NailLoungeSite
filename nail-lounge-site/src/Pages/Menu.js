import React, {Component, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../output.css';

function Menu() {
    const navigate = useNavigate();

    const toHomepage = () => {
        navigate("/HomePage");
    }

    // I want some dropdown boxes here.    
    return (
        <body>
            
            <div>
                <Link to="/">Home</Link>
            </div>

            <div>

                <h2>Our Specialty</h2>

                <p>Full Set Acrylics…$50…..Hard Gel …...$55 <br/>
                Fill Acrylics………$40... Hard Gel…….$45 <br/>
                Full Set Dipping………………………...$52 <br/>
                Fill Dipping……………………………..$50 <br/>
                Full Set Gel Extensions……………...….$60 <br/>
                Long Nails, 3 Colors or more…….$10 extra <br/>
                </p>

                <h2>Gel Manicure</h2>

                <p>With Soak-Off…………………………..$40 <br/>
                Without Soak-Off……………………….$35 <br/>
                </p>

                <h2>Regular Manicure</h2>

                <p>SeaSpray Mani………………………….$20 <br/>
                SeaBreaze Deluxe Mani………………...$36 <br/>
                Includes sugar scrub and paraffin wax <br/>
                </p>

                <h2>Pedicure</h2>
                <h4>Seaside Pedi…….……...$30…with Gel $50</h4>
                <p>Great for those that just have time for a quick maintenance. Comes with a soak, shaping, scrubbing, massage, and a choice of polish</p>
                <h4>Aroma Pedi………….…$42…with Gel $62</h4>
                <p>Aroma Pedi comes with a mix of therapeutic remedies, such as essential oils and natural ingredients, used to bring an uplifting spa experience. Includes soaking powder, sugar scrub, mask, massage cream and choice of polish.</p>
                <h4>Duospa Pedi……………$47…with Gel $67</h4>
                <p>This special treatment includes a soak in Prickly Pear and Orange essence with 16 natural ingredients, followed by a gentle massage with a sugar scrub and a mask spread over the legs and feet. This is followed by another massage with crème ad blended butter leaving the skin and senses refreshed and awakened. Finished with your choice of polish.</p>
                <h4>Pearl Pedi………..…….$55…with Gel $75</h4>
                <p>Pearl power is a finely milled powder derived from fresh water pearls, which contains about 18 amino acids, including 10 essential ones necessary for the body to heal and maintain cell health, and over a dozen minerals. Includes sugar scrub, mask, callus remover, long massage, and choice of polish</p>
                <h4>Honey Green Tea………$69…with Gel $89</h4>
                <p>This fantastic treatment promotes anti-agent, relieve stress and aching muscles. The Honey Green Tea powder contains vitamins A, B1, B2, B6, and other minerals. Includes extra massage with scrub, mask, honey green lotion, callus remover, paraffin wax, and a choice of polish.</p>

                <h2>Kids Services</h2>
                <p>Kid Pedi: $20 Kid Mani: $15</p>

                <h2>Additional Services</h2>
                <p>Lounge Facial…………………………..$65 <br/>
                Eyebrow Wax…………………………..$16 <br/>
                Upper Lip Wax…………………………$13 <br/>
                Chin Wax……………………………….$13 <br/>
                Face Wax……………………………….$40 <br/>
                Side Burn Wax………………………....$16 <br/>
                Underarms Wax…………….…..$26 and up <br/>
                Half Arms Wax…………………$35 and up <br/>
                Full Arms Wax………………….$50 and up <br/>
                Bikini Wax……………………...$40 and up <br/>
                Brazilian Wax…………………...$60 and up <br/>
                Half Leg upper or lower………...$45 and up <br/>
                Full Legs………………………...$65 and up <br/>
                Chest Wax………………………$35 and up <br/>
                Back Wax……………………….$50 and up <br/>
                </p>
            </div>
        </body>
    );
}

export default Menu;