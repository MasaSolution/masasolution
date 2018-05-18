import React from "react"
import ReactDOM from "react-dom"

import Service from "./service.jsx"

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
                <Service key="fw" imgurl="img/firmware.png" title="Firmware & Software" body={Services.FwCardDescription()} />
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <Service key="hw" imgurl="img/hardware.png" title="Hardware development" body={Services.HwCardDescription()} />
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <Service key="sln" imgurl="img/solution.png" title="Deliver solutions" body={Services.SlnCardDescription()} />
            </div>
        );
    }
}
