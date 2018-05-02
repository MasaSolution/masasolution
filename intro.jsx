import React from "react"
import ReactDOM from "react-dom"

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome on MasaSolution</h1>
                <img src="construction.jpg" alt="Page is under construction"/>
            </div>
        );
    }
}
