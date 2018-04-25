import React from "react"
import ReactDOM from "react-dom"

export default class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    MasaSolution
                    </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" hidden className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted"></div>
            </div>
        );
    }
}
