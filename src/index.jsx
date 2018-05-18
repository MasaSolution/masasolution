import React from "react"
import ReactDOM from "react-dom"

import Introduction from "./intro.jsx"
import Service from "./service.jsx"
import Services from "./services.jsx"
import Products from "./products.jsx"
import Contact from "./contact.jsx"

export default class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 col-xl-3">
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <Introduction key="introduction" />
                            <Products key="products" />
                            <Services key="services" />
                        </div>
                        <div className="col-md-1 col-xl-3">
                        </div>
                    </div>
                </div>
                <Contact key="contact" />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));