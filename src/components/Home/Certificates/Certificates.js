// Style
import "./Certificates.css";

// img
import Certificates from "../../../img/Certificates.png"

const certificates = () => {
    return (
        <div className="d-flex row justify-content-center justify-content-lg-between align-items-center Certificates" id="certificates">

            <div className="col-12 col-lg-4 title-certificates">
                <h2>گواهینامه ها</h2>
                <p>

                    ما دارای مدارک معتبر از دانشکده فنی تهران هستیم و برای رشد و پیشرفت دائما در حال تلاش  فراگیری بیشتر این حرفه هستیم
                    سعی ما بر اینه که شمارو از دیگر رقیبانتون متمایز کنیم
                </p>
            </div>

            <div className="col-12 col-lg-7">

                <div className="d-flex row col-12 div-certificates align-items-center">

                    <div className="col-3 col-md-2">
                        <img src={Certificates} className="img-certificates" alt="Certificates-img" />
                    </div>

                    <div className="col-8 p-certificates">
                        <h5>Web Design I (HTML5 , CSS3)</h5>
                        <p>از مجتمع فنی تهران</p>
                    </div>

                </div>

                <div className="d-flex row col-12 div-certificates align-items-center">

                    <div className="col-3 col-md-2">
                        <img src={Certificates} className="img-certificates" alt="Certificates-img" />
                    </div>

                    <div className="col-8 p-certificates">
                        <h5>Web Design III (JavaScript & jQuery)</h5>
                        <p>از مجتمع فنی تهران</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default certificates;