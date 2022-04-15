import React from 'react';

// Style
import "./Introduction.css";

// img
import Frame15 from "../../../img/Frame-15.png"

const Introduction = () => {
    return (
        <div className='Introduction row flex-row-reverse'>
            <div className='img col-12 col-lg-4'>
                <img src={Frame15} alt="" />
                <div className='hide-bottom-img'></div>
            </div>

            <div className='text col-12 col-lg-7 '>
                <h1>خوش آمدید</h1>
                <p className='text-body-lg'>
                    سلام ما علیرضا و محمد مهدی فرامرزی هستیم ، حرفه اصلی ما طراحی ظاهری سایت و طراحی رابط کاربری هست وابسته به شرکت و گروه خاصی نیستیم ما با استفاده از به روز ترین شیوه های طراحی تامین کننده منافع مشتریانمون هستیم . ما برای شما یک سایت زیبا خلق میکنیم ...
                </p>
                <a href='#Description'>                    <span>بیشتر بدانید</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{ zIndex: "555" }}>
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </a>
            </div>

        </div>
    );
};

export default Introduction;