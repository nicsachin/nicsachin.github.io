import React, {Component} from 'react';
import ParticlesBg from "particles-bg";
import Service from "../Service";import Typewriter from 'typewriter-effect';
class Header extends Component {


    constructor() {
        super();
        this.state = {quote: {title: "", body: ""}};
    }

    async componentDidMount() {
        let quote = await Service.getQOD();
        this.setState({...this.state,quote:{title: quote.title, body: quote.body}})

    }

    render() {
        if (this.props.data) {
            var github = this.props.data.github;
            var name = this.props.data.name;
            var description = this.props.data.description;
        }

        return (
            <header id="home">
                <ParticlesBg type="polygon" bg={true}/>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">

                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('<h1 className="responsive-headline">Hi, I am Sachin Sharma </h1>')
                                    .start();
                            }}
                        />
                        <h3>{description}.</h3>

                        <hr/>
                        <ul className="social">
                            <a href={github} target="_blank" className="button btn github-btn">
                                <i className="fa fa-github"/>
                                Github
                            </a>
                            <p className={"banner-text"}>
                                <h3> {this.state.quote.title}
                                     : "{this.state.quote.body}"</h3>


                            </p>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" style={{color: "black"}
                        }/>
                    </a>
                </p>

            </header>
        );
    }
}

export default Header;
