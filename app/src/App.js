import React, { useState } from 'react'
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom'

import './App.css'

// components
import Header from './components/CommonComponents/Header';
import Footer from './components/CommonComponents/Footer';

// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './components/CommonComponents/NotFound';
import ExerciseDetails from './pages/ExerciseDetails';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<> <Header /> <Home /> <Footer /> </>} />
                <Route path='/home' element={<> <Header /> <Home /> <Footer /> </>} />
                <Route path='/aboutus' element={<> <Header /> <AboutUs /> <Footer /> </>} />
                <Route path='/exercise/:id' element={<> <Header /> <ExerciseDetails /> <Footer /> </>} />
                <Route path='/contact' element={ <> <Header /> <Contact /> <Footer /> </>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

{/* <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
            <i class="fa fa-search"></i>
        </div>
        <nav class="canvas-menu mobile-menu">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">About Us</a></li>
                <li><a href="./classes.html">Classes</a></li>
                <li><a href="./services.html">Services</a></li>
                <li><a href="./team.html">Our Team</a></li>
                <li><a href="#">Pages</a>
                    <ul class="dropdown">
                        <li><a href="./about-us.html">About us</a></li>
                        <li><a href="./class-timetable.html">Classes timetable</a></li>
                        <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                        <li><a href="./team.html">Our team</a></li>
                        <li><a href="./gallery.html">Gallery</a></li>
                        <li><a href="./blog.html">Our blog</a></li>
                        <li><a href="./404.html">404</a></li>
                    </ul>
                </li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
    </div> */}