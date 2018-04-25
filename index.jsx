import React from "react"
import ReactDOM from "react-dom"

import Home from "./home.jsx"
import Contact from "./contact.jsx"

export default class Index extends React.Component {
    constructor() {
        super();

        this.state = { currentPage: <Home key="home" /> };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="nav flex-column">
                            <a className="border rounded nav-link" href="#">Home</a>
                            <a className="border rounded nav-link" href="#">Services</a>
                            <a className="border rounded nav-link" href="#">Products</a>
                        </nav>
                    </div>
                    <div className="col">
                        {this.state.currentPage}
                    </div>
                </div>
                <div className="row">
                    <div className="flex-column">
                        <Contact key="contact" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));