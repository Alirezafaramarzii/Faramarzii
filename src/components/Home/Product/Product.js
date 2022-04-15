
// Style
import "./Product.css";

// img
import crypto from "../../../img/crypto.png";
import faraz from "../../../img/faraz.png";
import maherphone from "../../../img/maherphone.png";
import janebitkoo from "../../../img/janebitkoo.png";
import ping from "../../../img/ping.png";
import Faramarzi from "../../../img/Faramarzii.png";



const Product = () => {
    return (

        <section className="d-flex row flex-row-reverse product" id="Product">

            <div className="title">
                <h2>نمونه کار ها</h2>
            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="http://crypto.faramarzii.ir/" target="_blank" className="d-flex row div-Product">

                    <div className="p-0">
                        <img src={crypto} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>Crypto</h4>
                        <p>Digital Currency Web</p>
                    </div>

                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="http://faramarzii.ir/" target="_blank" className="d-flex row div-Product">

                    <div className="p-0">
                        <img src={Faramarzi} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>faramarzi</h4>
                        <p>personal Web</p>
                    </div>

                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="http://faraz.faramarzii.ir/" target="_blank" className="d-flex row div-Product">
                    <div className="p-0">
                        <img src={faraz} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>Faraz</h4>
                        <p>Sample project
                        </p>
                    </div>

                </a>

            </div>


            <div className="col-12 col-md-6 col-lg-4">

                <a href="https://janebitkoo.ir/" target="_blank" className="d-flex row div-Product">

                    <div className="p-0">
                        <img src={janebitkoo} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>Janebitkoo</h4>
                        <p>Store web</p>
                    </div>

                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/" className="d-flex row div-Product">

                    <div className="p-0">
                        <img src={maherphone} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>Maherphone</h4>
                        <p>Store web</p>
                    </div>

                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="http://ping.faramarzii.ir/" target="_blank" className="d-flex row div-Product">

                    <div className="p-0">
                        <img src={ping} className="img-product" alt="image" />
                    </div>

                    <div className="cption">
                        <h4>Ping</h4>
                        <p>Sample project
                        </p>
                    </div>
                </a>

            </div>



        </section>

    );
}

export default Product;