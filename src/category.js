import React, { Component } from 'react';
import Question from './question';

class Category extends Component {
  renderQuestion(question, index) {
    return (
      <Question key={index} question={question} />
    );
  };
  // <Category key={index} category={category}  />
  render() {
    var left = 20 * this.props.category.index;
    left += 'vw';
    return (
      <div
        style={{left}}
        className="category">
        <div className="header">
          <div className="center">
            {this.props.category.name}
          </div>
        </div>
      </div>
    );
  };
};

export default Category;
