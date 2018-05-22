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
                    <div className="card-header">Contact to MasaSolution: <a href="mailto:contact.masasolution@gmail.com?subject=Contact">contact.masasolution@gmail.com</a></div>
                </div>
            </footer>
        );
    }
}
