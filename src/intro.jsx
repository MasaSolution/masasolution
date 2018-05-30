import React from "react"
import ReactDOM from "react-dom"

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card page-header">
                <div className="card-body">
                    <h1 className="card-title text-center">Welcome on MasaSolution</h1>
                    <p className="card-text">
                        MasaSolution is a small business established to deliver services, hardware and software solutions around the word.
                        You can select from our continously growing pruduct portfolio or request an offer to solve your issue.
                        </p>
                </div>
                <div className="card-footer text-muted text-center">
                    Contact to MasaSolution: <a href="mailto:contact.masasolution@gmail.com?subject=Contact">contact.masasolution@gmail.com</a>
                </div>
            </div>
        );
    }
}
