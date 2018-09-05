import React, { Component } from 'react';
import Header from './Header';
import Pages from './Pages';
// import Footer from './Footer.js';
import '../scss/Steps.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: 'Datos personales',
      title2: 'Documentos de viaje',
      step1: 'Paso 1',
      step2: 'Paso 2',
      dot1: 'active',
      dot2: '',
      previousStep: 0,
      currentStep: 1,
      followingStep: 2,
    }
    this.handleClickPreviousStep = this.handleClickPreviousStep.bind(this);
    this.handleClickFollowingStep = this.handleClickFollowingStep.bind(this);
  }

  handleClickPreviousStep() {
    console.log(this.state.currentStep);
    if (this.state.dot1 === 'active') {
      this.setState({
        dot1: '',
        dot2: 'active',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    } else if (this.state.dot1 === '') {
      this.setState({
        dot1: 'active',
        dot2: '',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    }
  }

  handleClickFollowingStep() {
    console.log(this.state.currentStep);
    if (this.state.dot1 === 'active') {
      this.setState({
        dot1: '',
        dot2: 'active',
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    } else if (this.state.dot1 === '') {
      this.setState({
        dot1: 'active',
        dot2: '',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    }
  }

  render() {
    console.log('estado app', this.state);
    const {title1, title2, step1, step2, dot1, dot2, previousStep, followingStep} = this.state;
    return (
      <div className="App">
        <Header />
        <Pages
          title1={title1}
          title2={title2}
          step1={step1}
          step2={step2}
          dot1={dot1}
          dot2={dot2}
          previousStep={previousStep}
          followingStep={followingStep}
          handleClickPreviousStep={this.handleClickPreviousStep}
          handleClickFollowingStep={this.handleClickFollowingStep}
        />
      </div>
    );
  }
}

export default App;
