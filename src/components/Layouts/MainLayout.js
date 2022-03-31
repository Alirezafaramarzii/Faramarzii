import React from 'react';
import Header from '../common/Header';
import Home from '../Home/Home';

// Style
import "./MainLayout.css";



const MainLayout = () => {
    return (
        <div>
            <svg className='vector1' width="1135" height="681" viewBox="0 0 1135 681" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <Header />
            <Home />
        </div>
    );
};

export default MainLayout;