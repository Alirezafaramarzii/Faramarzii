
// Style
import "./Skills.css";


const Skills = () => {
    return (

        <div className="Skills row">
            <div className="title">
                <h2>مهارت ها</h2>
            </div>
            <div className="div-Skills col-12 row">
                <div className="section-Skills col-12 col-lg-6">
                    <div className="title-Skills">
                        <h3>FrontEnd Developer</h3>
                        <p className="text-caption-md">More than 2 years</p>
                    </div>
                    <div className="charts">
                        <div className="chart">
                            <div className="title-chart">
                                <span>Html , Css</span>
                                <span>100%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></span>
                            </div>
                        </div>
                        <div className="chart">
                            <div className="title-chart">
                                <span>JavaScript / Jquery</span>
                                <span>100%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></span>
                            </div>
                        </div>

                        <div className="chart">
                            <div className="title-chart">
                                <span>Bootstrap</span>
                                <span>100%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></span>
                            </div>
                        </div>

                        <div className="chart">
                            <div className="title-chart">
                                <span>ReactJs</span>
                                <span>100%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="section-Skills col-12 col-lg-6">
                    <div className="title-Skills title-Skills2">
                        <h3>Designer</h3>
                        <p className="text-caption-md">More than 1 years</p>
                    </div>

                    <div className="charts">
                        <div className="chart">
                            <div className="title-chart">
                                <span>Figma</span>
                                <span>100%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></span>
                            </div>
                        </div>
                        <div className="chart">
                            <div className="title-chart">
                                <span>Photoshop</span>
                                <span>80%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></span>
                            </div>
                        </div>

                        <div className="chart">
                            <div className="title-chart">
                                <span>Illustrator</span>
                                <span>60%</span>
                            </div>
                            <div className="body-chart progress">
                                <span className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;