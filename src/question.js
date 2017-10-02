import React, { Component } from 'react';
import dailyDoublePicture from './dailydouble.jpg';
import dailyDoubleSound from './dailydouble.mp3';

class Question extends Component {
  constructor(props) {
    super(props);
    let top = 17 * props.question.index + 'vh';
    let left = 20 * props.question.category + 'vw';
    this.state = {active: false, top, left, answer: false, complete: false, double: false, sound: false}
  };
  handleClick() {
    if (!this.state.complete) {
      if (this.state.active && this.state.answer) {
        let top = 17 * this.props.question.index + 'vh';
        let left = 20 * this.props.question.category + 'vw';
        this.setState({active: false, top, left, answer: true, complete: true});
      } else if (this.state.active && this.props.question.double && !this.state.double) {
        this.setState({double: true});
      } else if (this.state.active) {
        this.setState({answer: true});
      } else {
        if (this.props.question.double) {
          var audio = new Audio(dailyDoubleSound);
          audio.play();
        };
        this.setState({active: true, top: '0', left: '0'});
      };
    };
  };
  render() {
    return (
      <div
        className={`tile ${this.state.answer ? 'flipped': 'unflipped'} ${this.state.active ? 'active': 'inactive'}`}
        onClick={event => this.handleClick()}
        style={{top: this.state.top, left: this.state.left}}>
        <div
          className="question">
          <img className={`${this.props.question.double ? 'double' : 'normal'} ${this.state.double ? 'hidden' : 'visible'}`} src={dailyDoublePicture} alt="Daily Double" />
          <div className={`wrapper amount ${this.state.complete ? 'complete': 'incomplete'} `}>
            <div className="center">
              {this.props.question.value}
            </div>
          </div>
          <div className="wrapper q">
            <div className="center">
              {this.props.question.question}
            </div>
          </div>
        </div>
        <div
          className="answer">
          <div className="wrapper">
            <div className="center">
              {this.props.question.answer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
