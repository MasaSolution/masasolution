import React from "react"
import ReactDOM from "react-dom"

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id}>
                <h1>Services</h1>
                <img src="construction.jpg" alt="Page is under construction"/>
            </div>
        );
    }
}
