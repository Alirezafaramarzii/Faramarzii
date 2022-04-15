import React, { useState, useEffect } from 'react';



// Style
import "./Header.css";

// img
import Faramarzi from "../../img/Faramarzi-logo.png";

import { Themes } from '../services/Theme';


const Header = () => {

    const [sidenav, setSidenav] = useState(false);

    const sidnaveHandler = () => {
        setSidenav(true);
    }

    const Handler = () => {
        setSidenav(false);
    }

    const [colorName, setColorName] = useState(localStorage.getItem('colorName') || '');


    useEffect(() => {
        localStorage.setItem("colorName", colorName);
        return Themes();
    }, [colorName]);


    const onChangeColorDefault = () => {
        setColorName("Default");
    }

    const onChangeColorLight = () => {
        setColorName("Light");
    }

    return (
        <>
            <div className='navbar navbar-expand navbar-desktop d-none d-xl-flex' id='#Header'>
                <div className='navbar-right'>

                    <a className="navbar-brand" href="https://faramarzii.ir">
                        <img className='logo' src={Faramarzi} alt="" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Profile">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>

                                مشخصات فردی

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">
                                <svg xmlns="http://
                                g/2000/svg" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
                                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                </svg>
                                مهارت ها

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Product">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                </svg>
                                نمونه کار ها
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#certificates">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                                </svg>
                                گواهینامه ها
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Description">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-justify-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                توضیحات
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                </svg>
                                ارتباط با ما
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='btn-mood'>
                    {colorName === "Light" ?


                        <button className='Light' onClick={onChangeColorDefault}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-brightness-low" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                </svg>

                            </span>
                        </button>
                        :
                        <button className='Default' onClick={onChangeColorLight}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                </svg>
                            </span>
                        </button>
                    }
                </div>

            </div>

            <div className='navbar navbar-expand navbar-mobile d-flex d-xl-none'>
                <div className='navbar-right'>
                    <button className='hamburger' onClick={sidnaveHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                    <a className="navbar-brand" href="https://faramarzii.ir">
                        <img className='logo' src={Faramarzi} alt="" />
                    </a>

                </div>

                <div className='btn-mood'>
                    {colorName === "Light" ?


                        <button className='Light' onClick={onChangeColorDefault}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-brightness-low" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                </svg>

                            </span>
                        </button>
                        :
                        <button className='Default' onClick={onChangeColorLight}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                </svg>
                            </span>
                        </button>
                    }
                </div>

            </div>

            <div className={sidenav === true ? "Sidebar open" : "Sidebar"} >
                <div className='div-sidenav' onClick={Handler}>
                </div>
                <div className={sidenav === true ? "sidenav active" : "sidenav"} >
                    <svg className='vector1-sidenav' viewBox="0 0 1135 681" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_38_864)">
                            <path d="M227.959 183.5C98.3588 180.7 111.959 97.3333 134.959 56V4L1151.96 -34C1168.13 145.333 1190.76 491.6 1151.96 442C1103.46 380 820.959 497.5 686.459 552.5C551.959 607.5 610.959 373 603.959 297.5C596.959 222 389.959 187 227.959 183.5Z" fill="url(#paint0_linear_38_864)" fill-opacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_38_864" x="0" y="-154" width="1293.38" height="834.771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_38_864" />
                            </filter>
                            <linearGradient id="paint0_linear_38_864" x1="646.691" y1="-34" x2="646.691" y2="560.771" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2F45BC" />
                                <stop offset="1" stop-color="#2FBCBC" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className='vector2-sidenav' viewBox="0 0 567 1084" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_38_884)">
                            <path d="M-59.8093 141.348C-66.2306 125.559 -64.4963 110.551 -59.8093 100V141.348C-48.4794 169.205 -11.7597 199.49 78.929 212C256.538 236.5 325.907 277.5 306.173 331.5C286.438 385.5 493.948 410 464.047 484.5C434.147 559 202.717 592 212.285 641.5C221.853 691 78.929 835.5 78.929 901.5C78.929 954.3 -13.5632 978.5 -59.8093 984V141.348Z" fill="#7562E0" />
                        </g>
                        <defs>
                            <filter id="filter0_f_38_884" x="-164" y="0" width="731" height="1084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_38_884" />
                            </filter>
                        </defs>
                    </svg>

                    <a className="navbar-brand" href="#">
                        <img className='logo' src={Faramarzi} alt="" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Profile" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>

                                مشخصات فردی

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
                                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                </svg>
                                مهارت ها

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Product" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                </svg>
                                نمونه کار ها
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#certificates" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                                </svg>
                                گواهینامه ها
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Description" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-justify-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                توضیحات
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us" onClick={Handler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                </svg>
                                ارتباط با ما
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </>

    );
};

export default Header;