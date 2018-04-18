import React, {Component} from 'react';
import Header from "../components/landing/Header";
import Welcome from "../components/landing/Welcome";
import About from "../components/landing/About";
import Features from "../components/landing/Features";
import Team from "../components/landing/Team";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Welcome/>
                <About/>
                <Features/>
                <Team/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        );
    }
}

