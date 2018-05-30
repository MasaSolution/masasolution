import React from "react"
import ReactDOM from "react-dom"

class Indicator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li data-target={"#" + this.props.link} data-slide-to={this.props.index.toString()} className={this.props.index == 0 ? "active" : ""}></li>
        );
    }
}

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"carousel-item w-100 " + (this.props.index == 0 ? "active" : "")}>
                <img className="d-block" style={{ height: "300pt" }} src={"/prod/img/" + this.props.image} alt="Slide" />
            </div>
        );
    }
}

class Control extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className={"carousel-control-" + this.props.slide} href={"#" + this.props.link} role="button" data-slide={this.props.slide}>
                <span className={"carousel-control-" + this.props.slide + "-icon"} aria-hidden="true"></span>
                <span className="sr-only">{this.props.title}</span>
            </a>
        );
    }
}

export default class ProductSlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slideShowLink: "slideShowLink" + this.props.name.replace("-", "") };
    }

    render() {
        var slides = [];
        var indicators = [];
        for (var i = 0; i < this.props.images.length; i++) {
            slides.push(<Slide key={i} index={i} image={this.props.images[i]} />);
            indicators.push(<Indicator key={i} index={i} link={this.state.slideShowLink} />);
        }

        return (
            <div id={this.state.slideShowLink} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {slides}
                </div>
                <Control key="prev" link={this.state.slideShowLink} slide="prev" title="Previous" />
                <Control key="next" link={this.state.slideShowLink} slide="next" title="Next" />
            </div>
        );
    }
}
