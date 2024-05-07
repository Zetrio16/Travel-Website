import React from 'react';
import youtube from '../LOGO/youtube.svg'
import instagram from '../LOGO/instagram.svg'

const Footer = () => 
{

    return (
        <div className='whole'>
            <div className='about'>
                <h1>Why People Choose Us</h1>
                <p><q>Our travel booking system empowers you to explore the world effortlessly. With seamless online reservations for flights, hotels, and activities, we make planning your dream journey a breeze. Our user-friendly interface
                    ensures stress-free bookings, and our extensive network of partners ensures the best options for every budget. Leave the logistics to us and focus on creating unforgettable memories. Travel with confidence, book with us.</q></p>
            </div>

            <footer className="contactsRef">
                <section>
                    <h1>Contact With Us</h1>
                </section>
                <section className='links'>
                    <a href="https://github.com/Zetrio16" rel="noopener noreferrer" target='_blank'>
                        <svg alt="github" viewBox="0 0 16 16" version="1.1" width="44" height="44" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 
                        1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/farizahmd_/" target='_blank'>
                        <img src={instagram} alt="instagram" width="44" height="44" />
                    </a>
                    <a href="https://www.youtube.com/@FarizAhmad-ze6hs" rel="noopener noreferrer" target='_blank'>
                        <img src={youtube} alt="youtube" width="44" height="44" />
                    </a>
                    <a href='https://www.linkedin.com/in/farizahmad16/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="44" height="44" focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 
                    1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                </section>
                
            </footer>
            <div class="copyright">  © Rupeline Travels &amp; Tours - Pakistan.   |  <strong>Fariz Ahmad</strong></div>
        </div>
    );
};

export default Footer;