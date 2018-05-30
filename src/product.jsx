import React from "react"
import ReactDOM from "react-dom"

import ProductSlideShow from "./productslideshow.jsx"

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">
                        <div className="float-left">
                            {this.props.name}
                        </div>
                        <div className="float-right">
                            <a href={"/prod/" + this.props.prod.doc} className="badge badge-info" target="_blank">Whitepaper</a>
                            <span className="badge badge-primary">
                                Only for ${this.props.prod.price}
                            </span>
                        </div>
                    </h5>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <ProductSlideShow key={this.props.name} name={this.props.name} images={this.props.prod.images} />
                        </div>
                        <div className="col-6">
                            <div dangerouslySetInnerHTML={{ __html: this.props.prod.description }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
