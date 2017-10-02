import React, { Component } from 'react';
import Category from './category';
import Question from './question';
import categories from './content';
import Fullscreen from 'react-full-screen';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
    this.state = {isFullscreenEnabled: true}
  }
  renderCategory(category, index) {
    return (
      <div className="categoryWrapper" key={index}>
        <Category key={index} category={category}  />
        {category.questions.map(this.renderQuestion)}
      </div>
    );
  };
  renderQuestion(question, index) {
    return (
      <Question key={index} question={question} />
    );
  };
  render() {
    return (
      <Fullscreen
        enabled={this.state.isFullscreenEnabled}
        onChange={isFullscreenEnabled => this.setState({isFullscreenEnabled})}>
        <div className='full-screenable-node'>
          <div className="app">
            {categories.map(this.renderCategory)}
          </div>
        </div>
      </Fullscreen>
    );
  };
};

export default App;
