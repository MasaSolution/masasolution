import React from "react"
import ReactDOM from "react-dom"

import Service from "./service.jsx"

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }


    static FwCardDescription() {
        return (
            <span>
                If you have any issue to realize your dreams, we cen help you by delivering software solutions, revise your existing 
                system or participate in different phases of development.
            </span>
        );
    }

    static FwCardFooter() {
        return (<span>Real-Time, IoT, Embedded, C, C++, FreeRTOS, ARM, 32bit</span>);
    }

    static HwCardDescription() {
        return (
            <span>
                With more than 10 years of experience we undertake hardware development
                of power and control electronics from design & specification to prototyping and small series manifacturing.
            </span>
        );
    }

    static HwCardFooter() {
        return (<span>Design, Prototyping, SMD, Assembling, Test & Measurement</span>);
    }

    static SlnCardDescription() {
        return (
            <span>
                Have you faced a more complex problem? Like a SMART home or an automated test equipment with servo drive?<br/>
                We can deliver complete solutions from the design to the final installation including hardware, software and firmware too.
            </span>
        );
    }

    static SlnCardFooter() {
        return (<span>SMART home, Automation, Lighting</span>);
    }

    render() {
        return (
            <div className="card-deck">
                <Service key="fw" imgurl="img/firmware.png" title="Firmware & Software" body={Services.FwCardDescription()} footer={Services.FwCardFooter()} />
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <Service key="hw" imgurl="img/hardware.png" title="Hardware development" body={Services.HwCardDescription()} footer={Services.HwCardFooter()} />
                <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none "></div>
                <Service key="sln" imgurl="img/solution.png" title="Deliver solutions" body={Services.SlnCardDescription()} footer={Services.SlnCardFooter()} />
            </div>
        );
    }
}
