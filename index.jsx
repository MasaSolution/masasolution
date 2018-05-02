import React from "react"
import ReactDOM from "react-dom"

import Home from "./home.jsx"
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
                    <div className="sidePane col-2">
                        <nav className="nav flex-column">
                            <a className="border rounded nav-link" href="#home">Home</a>
                            <a className="border rounded nav-link" href="#services">Services</a>
                            <a className="border rounded nav-link" href="#products">Products</a>
                        </nav>
                        <Contact key="contact" id="contact" />
                    </div>
                    <div className="contentPane col-6">
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