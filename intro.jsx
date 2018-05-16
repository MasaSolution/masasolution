import React from "react"
import ReactDOM from "react-dom"

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="page-header">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center">Welcome on MasaSolution</h1>
                        <p className="card-text"> MasaSolution is a small business established to deliver services, hardware and software solutions around the word.</p>
                        <p className="card-text"> You can select from our continously growing pruduct portfolio or request an offer to solve your issue.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted" hidden></small>
                    </div>
                </div>
            </header>
        );
    }
}
