// Style
import "./Slider.css";

// img
import alireza from "../../../img/alireza.png";
import mohamadmahdi from "../../../img/mohamadmahdi.png";

// component
// import "./index"

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide2">

                <div className="d-flex row align-items-center justify-content-center">

                    <div className="col-9 col-md-8 col-lg-4">

                        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                            <div className="carousel-indicators div-dot">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active dot" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" className="dot" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={mohamadmahdi} className="d-block slide-img" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={alireza} className="d-block slide-img" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-8 p-slider">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        </p>
                    </div>

                </div>

            </div>

            <div className="div-btnslider">

                <button className="btn-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>

                <button className="btn-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>


            </div>


        </div>

    );
}

export default Slider;