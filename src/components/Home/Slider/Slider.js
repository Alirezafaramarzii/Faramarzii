// Style
import "./Slider.css";

// img
import alireza from "../../../img/alireza.png";
import mohamadmahdi from "../../../img/mohamadmahdi.png";

// component
import "./index";

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide">

                <div className="d-flex row align-items-center justify-content-center">

                    <div className="col-9 col-md-8 col-lg-4">
                        <img src={alireza} alt="slide" />
                    </div>
                    <div className="col-12 col-lg-8 p-slider">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        </p>
                        <p>علیرضا فرامرزی</p>

                    </div>

                </div>

            </div>

            <div className="slide">
                <div className="d-flex row align-items-center justify-content-center">

                    <div className="col-9 col-md-8 col-lg-4">
                        <img src={mohamadmahdi} alt="slide" />
                    </div>
                    <div className="col-12 col-lg-8 p-slider">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        </p>
                        <p>محمد مهدی فرامرزی</p>

                    </div>

                </div>
            </div>

            <div className="div-btnslider">

                <button className="btn-prev" onclick="plusSlide(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>


                <button className="btn-next" onclick="plusSlide(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-left"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>


            </div>


            <div className="div-dot">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
            </div>

        </div>
    );
}

export default Slider;