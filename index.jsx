import React from "react"
import ReactDOM from "react-dom"

import Home from "./home.jsx"
import Services from "./services.jsx"
import Products from "./products.jsx"
import Contact from "./contact.jsx"
import { Z_FIXED } from "zlib";

export default class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <nav className="nav flex-column">
                            <a className="border rounded nav-link" href="#home">Home</a>
                            <a className="border rounded nav-link" href="#services">Services</a>
                            <a className="border rounded nav-link" href="#products">Products</a>
                        </nav>
                        <Contact key="contact" />
                    </div>
                    <div className="col-9 flex-column">
                        <Home key="home" id="home" />
                        <Services key="services" id="services" />
                        <Products key="products" id="products" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));