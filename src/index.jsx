import React from "react"
import ReactDOM from "react-dom"

import Introduction from "./intro.jsx"
import Service from "./service.jsx"
import Services from "./services.jsx"
import Products from "./products.jsx"

export default class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row sticky-top">
                    <div className="col-md-10 col-xl-10 offset-xl-1">
                        <Introduction key="introduction" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-xl-10 offset-xl-1">
                        <Products key="products" />
                        <Services key="services" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));