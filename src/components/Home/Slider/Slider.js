// Style
import "./Slider.css";

// img
import alireza from "../../../img/alireza.png";
import mohamadmahdi from "../../../img/mohamadmahdi.png";

const Slider = () => {
    return (
        <div className="slider" id="Description">
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
                            یکی از بهترین روش‌ها برای برندسازی و در معرض دید قرار دادن حرفه و کار خودتون،داشتن یه سایت شخصی حرفه‌ایه …
                            با گروه ما می‌توانید به ساده‌ترین و سریع‌ترین شکل ممکن، یک وب‌سایت شخصی برای خودتان راه‌اندازی کنید و افکار،
                            ایده‌ها و دانش خود را با دیگران به اشتراک بگذارید.ما با استفاده از به روز ترین شیوه های طراحی تامین کننده منافع مشتریانمون هستیم و تمام آنچه برای موفقیت برند شخصی شما لازم است را در اختیارتان می‌گذاریم.
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