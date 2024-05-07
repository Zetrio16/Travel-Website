import React, { useState, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function () {

    return (

        <header className="App-header">
            <h1 className='travel-h1'>Rupeline Travels &amp; Tours </h1>
            <ul className='navbar'>
                <li> <a href='#' activeClass="active">HOME</a> </li>
                <li> <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset if needed to ensure the correct position
                    duration={500}
                >
                    ABOUT
                </Link> </li>
                <li> <a className='blog'>BLOG</a> </li>
                <li> <Link
                    activeClass="active"
                    to="contactsRef"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset if needed to ensure the correct position
                    duration={500}
                >
                    CONTACT
                </Link> </li>
            </ul>
        </header>
    );
}