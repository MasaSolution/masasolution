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
                        <div className="col-md-10 col-xl-10 offset-xl-1">
                            <Introduction key="introduction" />
                            <Products key="products" />
                            <Services key="services" />
                        </div>
                    </div>
                    <div className="row fixed-bottom">
                        <div className="col-md-10 col-xl-10 offset-xl-1">
                            <Contact key="contact" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));