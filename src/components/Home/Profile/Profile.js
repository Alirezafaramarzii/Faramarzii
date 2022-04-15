import React, { useEffect, useState } from 'react';

// Style
import "./Profile.css";

// Img
import af from "../../../img/af.jpg";
import mmf from "../../../img/mmf.jpg"

import Personalprofile2 from "../../../img/Personalprofile1.png"
import Personalprofile1 from "../../../img/Personalprofile2.png"



const Profile = () => {

    return (
        <div className='Profile row' id='Profile'>
            <div className='col-12 col-lg-6 profile-div'>
                <div className='Personal-profile'>
                    <div className='top-profile'>
                        <img src={mmf} alt='' />
                        <h5 className='text'>محمد مهدی فرامرزی</h5>
                    </div>
                    <div className='namad'>
                        <span></span>
                    </div>
                    <div className='text-profile'>
                        <h4>مشخصات فردی</h4>
                        <p className='text-body-md'>متولد : 1384/03/21</p>
                        <p className='text-body-md'>وضعیت تاهل : مجرد</p>
                        <p className='text-body-md'>وضعیت سربازی : معافیت تحصیلی</p>
                        <p className='text-body-md'>محل سکونت : قم</p>
                    </div>
                    <div className='img-text-profile d-none d-md-flex d-lg-none d-xl-flex'>
                        <img src={Personalprofile2} alt='Personalprofile2' />

                    </div>
                </div>
            </div>

            <div className='col-12 col-lg-6 profile-div'>
                <div className='Personal-profile'>
                    <div className='top-profile'>
                        <img src={af} alt='' />
                        <h5 className='text'>علیرضا فرامرزی</h5>
                    </div>
                    <div className='namad'>
                        <span></span>
                    </div>
                    <div className='text-profile'>
                        <h4>مشخصات فردی</h4>
                        <p className='text-body-md'>متولد : 1383/01/17</p>
                        <p className='text-body-md'>وضعیت تاهل : مجرد</p>
                        <p className='text-body-md'>وضعیت سربازی : معافیت تحصیلی</p>
                        <p className='text-body-md'>محل سکونت : قم</p>
                    </div>
                    <div className='img-text-profile d-none d-md-flex d-lg-none d-xl-flex'>
                        <img src={Personalprofile1} alt='Personalprofile1' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;