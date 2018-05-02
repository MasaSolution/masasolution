import React from "react"
import ReactDOM from "react-dom"

import Introduction from "./intro.jsx"
import Services from "./services.jsx"
import Products from "./products.jsx"
import Contact from "./contact.jsx"

export default class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Contact key="contact" />
                    <div className="contentPane col-3">
                    </div>
                    <div className="contentPane col-6">
                        <Introduction key="introduction" />
                        <Services key="services" />
                        <Products key="products" />
                    </div>
                    <div className="contentPane col-3">
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));