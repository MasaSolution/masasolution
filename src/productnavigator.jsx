import React from "react"
import ReactDOM from "react-dom"

export default class ProductNavigator extends React.Component {
    constructor(props) {
        super(props);
    }

    getProductItem(title) {
        return (<a key={title} className="dropdown-item" href="#" onClick={() => { this.props.onClick(title) }}>{title}</a>);
    }

    getProductCategory(name, items) {
        var list = [];
        for (var item in items) {
            list.push(this.getProductItem(item));
        }

        return (
            <li key={name} className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{name}</a>
                <div className="dropdown-menu">
                    {list}
                </div>
            </li>
        );
    }

    render() {
        var list = [];
        for (var prod in this.props.products) {
            list.push(this.getProductCategory(prod, this.props.products[prod]));
        }

        return (<nav className="nav nav-pills">{list}</nav>);
    }
}
