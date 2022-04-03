
// Style
import "./Product.css";

// img
import image from "../../../img/image.png"


const Product = () => {
    return (

        <section className="d-flex row product">

            <div className="title">
                <h2>نمونه کار ها</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>

            <div className="col-12 col-md-6 col-lg-4">

                <a href="/">
                    <div className="d-flex row div-Product">

                        <div className="p-0">
                            <img src={image} className="img-product" alt="image" />
                        </div>

                        <div className="cption">
                            <h4>faramarzi</h4>
                            <p>personal Web</p>
                        </div>

                    </div>
                </a>

            </div>



        </section>

    );
}

export default Product;