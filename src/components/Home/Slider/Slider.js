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
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>

                <button className="btn-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>                </button>


            </div>


        </div>

    );
}

export default Slider;