import React from "react"
import ReactDOM from "react-dom"

export default class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id}>
                <h1>Products</h1>
                <img src="construction.jpg" alt="Page is under construction"/>
            </div>
        );
    }
}
