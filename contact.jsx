import React from "react"
import ReactDOM from "react-dom"

export default class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="fixed-bottom card text-center">
                <div className="card-header">
                    MasaSolution
                    </div>
                <div className="card-body">
                    <h5 className="card-title">E-Mail: </h5>
                </div>
            </div>
        );
    }
}
