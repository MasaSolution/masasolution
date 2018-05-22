import React from "react"
import ReactDOM from "react-dom"

import Superagent from "superagent"

import Product from "./product.jsx"
import ProductNavigator from "./productnavigator.jsx"

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: "MSI-USBN" };

        Superagent
            .get("/prod/resources.json")
            .end((error, response) => this.onResponse(error, response));
    }

    onResponse(error, response) {
        if (error || !response.ok || response.text.lenght == 0) {
            return;
        }

        try {
            this.setState({ products: JSON.parse(response.text) });
        } catch (error) {
            return;
        }
    }
    
    onChangeItem(itemName) {
        this.setState({ activeItem: itemName });
    }

    render() {
        var product = (<div></div>);
        if (this.state.products == undefined) {
            return (<div></div>);
        }

        for (var category in this.state.products) {
            if (!this.state.products[category].hasOwnProperty(this.state.activeItem)) {
                continue;
            }

            product = (<Product key={this.state.activeItem} name={this.state.activeItem} prod={this.state.products[category][this.state.activeItem]} />);
            break;
        }

        return (
            <div className="card" style={{marginBottom: "15px"}}>
                <div className="card-body">
                    <ProductNavigator key="ProductNavigator" products={this.state.products} onClick={this.onChangeItem.bind(this)} />
                    {product}
                </div>
            </div>
        );
    }
}
