import React, {Component, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../Images/101-logo.png';
import Accordion from "../components/Accordion";

import '../output.css';

function Menu() {
    const navigate = useNavigate();

    const toHomepage = () => {
        navigate("/HomePage");
    }
    
    //Menu data stored here
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Our Specialty',
            data: `Full Set Acrylics…$50…..Hard Gel …...$55
            Fill Acrylics………$40... Hard Gel…….$45
            Full Set Dipping………………………...$52
            Fill Dipping……………………………..$50
            Full Set Gel Extensions……………...….$60
            Long Nails, 3 Colors or more…….$10 extra`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Gel Manicure',
            data: `With Soak-Off…………………………..$40
            Without Soak-Off……………………….$35`,
            isOpen: false
        },
        {
            key: 3,
            title: "Regular Manicure",
            data: `SeaSpray Mani………………………….$20
            SeaBreaze Deluxe Mani………………...$36
            Includes sugar scrub and paraffin wax`,
            isOpen: false
        },
        {
            key: 4,
            title: "Pedicure",
            data: `Seaside Pedi…….……...$30…with Gel $50
            Great for those that just have time for a quick maintenance. Comes with a soak, shaping, scrubbing, massage, and a choice of polish
            Aroma Pedi………….…$42…with Gel $62
            Aroma Pedi comes with a mix of therapeutic remedies, such as essential oils and natural ingredients, used to bring an uplifting spa experience. Includes soaking powder, sugar scrub, mask, massage cream and choice of polish.
            Duospa Pedi……………$47…with Gel $67
            This special treatment includes a soak in Prickly Pear and Orange essence with 16 natural ingredients, followed by a gentle massage with a sugar scrub and a mask spread over the legs and feet. This is followed by another massage with crème ad blended butter leaving the skin and senses refreshed and awakened. Finished with your choice of polish.
            Pearl Pedi………..…….$55…with Gel $75
            Pearl power is a finely milled powder derived from fresh water pearls, which contains about 18 amino acids, including 10 essential ones necessary for the body to heal and maintain cell health, and over a dozen minerals. Includes sugar scrub, mask, callus remover, long massage, and choice of polish
            Honey Green Tea………$69…with Gel $89
            This fantastic treatment promotes anti-agent, relieve stress and aching muscles. The Honey Green Tea powder contains vitamins A, B1, B2, B6, and other minerals. Includes extra massage with scrub, mask, honey green lotion, callus remover, paraffin wax, and a choice of polish.`,
            isOpen: false
        },
        {
            key: 5,
            title: "Kids Services",
            data: "Kid Pedi: $20 Kid Mani: $15",
            isOpen: false
        },
        {
            key: 6,
            title: "Additional Services",
            data: `Lounge Facial…………………………..$65
                Eyebrow Wax…………………………..$16
                Upper Lip Wax…………………………$13
                Chin Wax……………………………….$13
                Face Wax……………………………….$40
                Side Burn Wax………………………....$16
                Underarms Wax…………….…..$26 and up
                Half Arms Wax…………………$35 and up
                Full Arms Wax………………….$50 and up
                Bikini Wax……………………...$40 and up
                Brazilian Wax…………………...$60 and up
                Half Leg upper or lower………...$45 and up
                Full Legs………………………...$65 and up
                Chest Wax………………………$35 and up
                Back Wax……………………….$50 and up`,
            isOpen: false
        }
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
  
        setAccordion(updatedAccordions); 
    };

    // I want some dropdown boxes here.    
    return (
        <body>
            
            <div>
                <Link to="/"><img src={Logo} alt ="Logo"/></Link>
            </div>

            <div className="display-linebreak">
            {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))} 
            </div>
        </body>
    );
}

export default Menu;