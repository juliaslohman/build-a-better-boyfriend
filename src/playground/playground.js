import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import ReactWordcloud from 'react-wordcloud';
import { select } from "d3-selection";
import './playground.scss';

import errorImage from "../img/imagecouldnotbefound.png";

// face images
import faceImage1 from "./playgroundImages/faces/face1.png";
import faceImage2 from "./playgroundImages/faces/face2.png";
import faceImage3 from "./playgroundImages/faces/face3.png";
import faceImage4 from "./playgroundImages/faces/face4.png";
import faceImage5 from "./playgroundImages/faces/face5.png";
import faceImage6 from "./playgroundImages/faces/face6.png";
import faceImage7 from "./playgroundImages/faces/face7.png";
import faceImage8 from "./playgroundImages/faces/face8.png";

// colors (for word cloud)
const accent = "#c84c1f";
const secondaryAccent = "#E9D286";
const ternaryAccent = "#f8bbb6";
const dark = "#1E1F1E";

class Playground extends React.Component {
	constructor (props) {
        super(props);
        
        this.state = {
            selectedGender: null,
            activeFaceIndex: 0
        }

        this.faceImages = [
            faceImage1,
            faceImage2,
            errorImage,
            faceImage3,
            faceImage4,
            faceImage5,
            faceImage6,
            errorImage,
            faceImage7,
            faceImage8
        ];

        this.personalityTraits = [
            {
                text: "kind",
                value: 70,
            },
            {
                text: "religious",
                value: 50,
            },
            {
                text: "intelligent",
                value: 70,
            },
            {
                text: "well-read",
                value: 55,
            },
            {
                text: "h□□ble",
                value: 50,
            },
            {
                text: "romantic",
                value: 50,
            },
            {
                text: "funny",
                value: 65,
            },
            {
                text: "����",
                value: 50,
            },
            {
                text: "cre�tive",
                value: 60,
            },
            {
                text: "c�nic��",
                value: 50,
            },
            {
                text: "pessimistic",
                value: 50,
            },
            {
                text: "opt□□ist□c",
                value: 50,
            },
            {
                text: "caring",
                value: 60,
            },
            {
                text: "open-minded",
                value: 50,
            },
            {
                text: "hardworking",
                value: 50,
            },
            {
                text: "colo□ful",
                value: 50,
            },
            {
                text: "outspoken",
                value: 55,
            },
            {
                text: "quiet",
                value: 50,
            },
            {
                text: "logical",
                value: 55,
            },
            {
                text: "rebellious",
                value: 60,
            },
            {
                text: "educated",
                value: 55,
            },
            {
                text: "sim□□e",
                value: 45,
            },
            {
                text: "talkative",
                value: 70,
            },
            {
                text: "sp□□taneous",
                value: 55,
            },
            {
                text: "politically active",
                value: 45,
            },
            {
                text: "□uirky",
                value: 65,
            },
            {
                text: "spir□□ual",
                value: 45,
            },
        ];

        this.cloudOptions = {
            colors: [ternaryAccent],
            enableTooltip: false,
            fontFamily: "Metrophobic",
            fontSizes: [5, 60],
            fontStyle: "normal",
            fontWeight: "normal",
            padding: 4,
            rotations: 1,
            rotationAngles: [0],
            transitionDuration: 500
        };

        this.callbacks = {
            onWordClick: this.getCallback('onWordClick'),
            onWordMouseOut: this.getCallback('onWordMouseOut'),
            onWordMouseOver: this.getCallback('onWordMouseOver'),
        };
    }

    getCallback = callbackName => (word, event) => {
        const isActive = callbackName !== 'onWordMouseOut'
        const element = event.target
        const text = select(element)
        text
          .on('click', () => {
            element.classList.add('selected');
            text.attr('fill', accent);
          })
          .transition()
          .attr('background', 'white')
          .attr('font-size', isActive ? '300%' : '200%')
    }

    changeActiveItem = e => this.setState({ activeFaceIndex: e.target ? e.target.value : e });

	render() {
        const venusSelected = this.state.selectedGender === "venus"
            ? "selected"
            : null;
        const anySelected = this.state.selectedGender === "any"
            ? "selected"
            : null;
        const marsSelected = this.state.selectedGender === "mars"
            ? "selected"
            : null;

        const createSlides = () => {
            var slides = [];
            {this.faceImages.map((img) => {
                slides.push(
                        <img
                            className="carousel-item d-block w-100"
                            src={img}
                            alt="face option NO UGGOS"
                        />
                );
            })}
            return slides;
        }

        console.log(createSlides);

		return (
            <div className="playground-content content-block">
                <div className="playground-intro">
                    <h3>Playground</h3>
                    <h4>
                        This is where you can beg&#9633;n to build your ideal c&#9633;mpan&#9633;on. Welc&#9633;&#9633;e!
                    </h4>
                </div>
                <div className="gender-select">
                    <p className="instructions">
                        First, select the preferred gender for your robot companion from the options b&#9633;low.
                    </p>
                    <div className="gender-icon-wrapper">
                        <svg onClick={() => this.setState({selectedGender: "venus"})} className={venusSelected} id={"venus"} aria-hidden="false" focusable="true" data-prefix="fas" data-icon="venus" role="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>
                        <svg onClick={() => this.setState({selectedGender: "any"})} className={anySelected} id={"any"} aria-hidden="false" focusable="true" data-prefix="fas" data-icon="transgender-alt" role="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M468 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7C294.5 104.1 268.2 96 240 96c-28.2 0-54.5 8.1-76.7 22.1l-16.5-16.5 19.8-19.8c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8-19-19 16.9-16.9C107.1 12.9 101.7 0 91 0H12C5.4 0 0 5.4 0 12v79c0 10.7 12.9 16 20.5 8.5l16.9-16.9 19 19-19.8 19.8c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l19.8-19.8 16.5 16.5C104.1 185.5 96 211.8 96 240c0 68.5 47.9 125.9 112 140.4V408h-36c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4 0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM240 320c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>
                        <svg onClick={() => this.setState({selectedGender: "mars"})} className={marsSelected} id={"mars"} aria-hidden="false" focusable="true" data-prefix="fas" data-icon="mars" role="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>
                    </div>
                </div>
                <hr/>
                <div className="face-select-wrapper">
                    <p className="instructions">
                        Next, we can begin creat&#9633;ng the appearance of your companion! Choose a starter face from the options below. Yo&#9633; can personalize i&#9633; &#9633;&#9633;&#9633;&#9633;r.
                    </p>
                    <div className="face-select">
                        <InfiniteCarousel
                            className="carousel"
                            dots={true}
                            showSides={true}
                        >
                            {this.faceImages.map((img) => {
                                return(
                                    <img
                                        className="carousel-item d-block w-100"
                                        src={img}
                                        alt="face option NO UGGOS"
                                    />
                                );
                            })}
                        </InfiniteCarousel>
                    </div>
                </div>
                <hr/>
                <div className="traits-select">
                    <p className="instructions">
                        This module &#9633;llows you to set the personality of your robot.
                        S&#9633;lect any and all words that are &#9633;mport&#9633;&#9633;t to y&#9633;u.
                        Once you start interacting with yo&#9633;r companion, its personality will grow and ch&#9633;&#9633;&#9633;e, just like a re&#9633;l human!
                    </p>
                    <ReactWordcloud
                        options={this.cloudOptions}
                        words={this.personalityTraits}
                        callbacks={this.callbacks}
                        className="trait-cloud"
                    />
                </div>
                <hr/>
                <div className="body-type-select">
                    <p className="instructions">
                        Below are t&#9633;e op&#9633;&#9633;&#9633;ns av&#9633;&#9633;lable for #9633;&#9633;&#65533;&#65533; ��
                    </p>
                    <img src={errorImage} alt="select body type ERROR ERROR ERROR"/>
                    <img src={errorImage} alt="select body type ERROR ERROR ERROR"/>
                    <img src={errorImage} alt="select body type ERROR ERROR ERROR"/>
                </div>
                <div className="error-text">
                    <p>THROW ERR;</p>
                    <p>errcode: 26;</p>
                    <p>We are sorry, the rest of the playground cannot be loaded at this time. Please check back later to com&#9633;&#9633;&#65533;&#65533; ���������������������</p>
                </div>
            </div>
		);
	}
}

export default Playground;