import React from "react"
import ReactDOM from "react-dom"

export default class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer>
                <div className="card text-center">
                    <div className="card-header">MasaSolution</div>
                    <div className="card-body">
                        <h5 className="card-title">Sales & Contact: <a href="mailto:contact.masasolution@gmail.com?subject=Contact">contact.masasolution@gmail.com</a></h5>
                        <p className="card-text">If you like our products<br />If you want a solution that nobody has<br />Drop an email and we will contact to you</p>
                    </div>
                </div>
            </footer>
        );
    }
}
