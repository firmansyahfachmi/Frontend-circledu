import React, { Component, Fragment } from "react";
import { Navbar } from "react-bootstrap";

import "./main.css";
import Logo from "../assets/logo.png";

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      cookies: true
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.cookies === true ? (
          <div className="terms">
            <div className="col-lg-5 cookie">
              By accessing and using this website, you acknowledge that you have
              read and understand our <a href="">Cookie Policy</a>,{" "}
              <a href="">Privacy Policy</a>, and our{" "}
              <a href="">Terms of Service</a>.
            </div>
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ cookies: false })}
            >
              Got it
            </button>
          </div>
        ) : null}
        <div className="col-lg-12 landing">
          <img
            src={Logo}
            width="45"
            height="45"
            alt="Logo"
            className="header"
          />
          <div className="overlay">
            <div className="top-content col-lg-5">
              <div className="d1">Hello! I'm Mohammad Fachmi Firmansyah</div>
              <div className="mt-1 d2">
                Consult, Design, and Develop Websites
              </div>
              <div className="mt-2 ml-auto mr-auto d3 col-lg-11">
                Have something great in mind? Feel free to contact me. I'll help
                you to make it happen.
              </div>
              <div className="butContact col-lg-5 ml-auto mr-auto mt-3">
                LET'S MAKE CONTACT
              </div>
            </div>
          </div>
        </div>
        <div className="midContent col-lg-12">
          <div className="mr-auto ml-auto midTop col-lg-6">
            <h3>How Can I Help You?</h3>{" "}
            <p>
              Our work then targeted, best practices outcomes social innovation
              synergy. Venture philanthropy, revolutionary inclusive policymaker
              relief. User-centered program areas scale.
            </p>
          </div>
          <div className="col-lg-12 ml-auto mr-auto midBody">
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Consult</h3>
                <i className="ml-auto fas fa-comments icon"></i>
              </div>
              <p>
                Co-create, design thinking; strengthen infrastructure resist
                granular. Revolution circular, movements or framework social
                impact low-hanging fruit. Save the world compelling
                revolutionary progress.
              </p>
            </div>
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Design</h3>
                <i className="ml-auto fas fa-paint-brush icon"></i>
              </div>
              <p>
                Policymaker collaborates collective impact humanitarian shared
                value vocabulary inspire issue outcomes agile. Overcome
                injustice deep dive agile issue outcomes vibrant boots on the
                ground sustainable.
              </p>
            </div>
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Develop</h3>
                <i className="ml-auto fas fa-sitemap icon"></i>
              </div>
              <p>
                Revolutionary circular, movements a or impact framework social
                impact low- hanging. Save the compelling revolutionary inspire
                progress. Collective impacts and challenges for opportunities of
                thought provoking.
              </p>
            </div>
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Marketing</h3>
                <i className="ml-auto fas fa-bullhorn icon"></i>
              </div>
              <p>
                Peaceful; vibrant paradigm, collaborative cities. Shared
                vocabulary agile, replicable, effective altruism youth. Mobilize
                commitment to overcome injustice resilient, uplift social
                transparent effective.
              </p>
            </div>
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Manage</h3>
                <i className="ml-auto fas fa-stream icon"></i>
              </div>
              <p>
                Change-makers innovation or shared unit of analysis. Overcome
                injustice outcomes strategize vibrant boots on the ground
                sustainable. Optimism, effective altruism invest optimism
                corporate social.
              </p>
            </div>
            <div className="col-lg-12 card">
              <div className="pb-2 topCard">
                <h3>Evolve</h3>
                <i className="ml-auto fas fa-chart-line icon"></i>
              </div>
              <p>
                Activate catalyze and impact contextualize humanitarian. Unit of
                analysis overcome injustice storytelling altruism. Thought
                leadership mass incarceration. Outcomes big data, fairness,
                social game-changer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 footer">
          <div>Mohammad Fachmi Firmansyah &copy; All Right Reserved</div>
        </div>
        <div className="slide">
          <div className="col-lg-12" style={{ textAlign: "right" }}>
            <button className="ml-auto btn" style={{ color: "white" }}>
              x
            </button>
          </div>

          <div className="sTitle">Get latest updates in web technologies </div>
          <div className="sDesc">
            I write articles related to web technologies, such as design trends,
            development tools, UI/UX case studies and reviews, and more. Sign up
            to my newsletter to get them all.
          </div>
          <div className="mt-4 forme">
            <input
              type="text"
              placeholder="Email"
              className="form-control col-lg-9 mr-auto email"
            />
            <button className="btn btn-warning btnCount">Count me in!</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainScreen;
