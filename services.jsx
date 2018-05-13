import React from "react"
import ReactDOM from "react-dom"

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }


    static FwCardDescription() {
        return "";
    }

    static HwCardDescription() {
        return "";
    }

    static SlnCardDescription() {
        return "";
    }

    render() {
        return (
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="img/firmware.png" alt="Firmware image"/>
                    <div className="card-body">
                        <h5 className="card-title">Firmware & Software</h5>
                        <p className="card-text">{Services.FwCardDescription()}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted" hidden></small>
                    </div>
                </div>
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <div className="card">
                    <img className="card-img-top" src="img/hardware.png" alt="Hardware image" />
                    <div className="card-body">
                        <h5 className="card-title">Hardware development</h5>
                        <p className="card-text">{Services.HwCardDescription()}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted" hidden></small>
                    </div>
                </div>
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <div className="card">
                    <img className="card-img-top" src="img/solution.png" alt="Solutions image" />
                    <div className="card-body">
                        <h5 className="card-title">Deliver solutions</h5>
                        <p className="card-text">{Services.SlnCardDescription()}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted" hidden></small>
                    </div>
                </div>
            </div>
        );
    }
}
