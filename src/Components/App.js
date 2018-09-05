import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Pages from './Pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: 'Datos personales',
      title2: 'Documentos de viaje',
      title3: '',
      title4: '',
      title5: 'Extras',
      step1: 'Paso 1',
      step2: 'Paso 2',
      step3: 'Paso 3',
      step4: 'Paso 4',
      step5: 'Paso 5',
      dot1: 'active',
      dot2: '',
      dot3: '',
      dot4: '',
      dot5: '',
      previousStep: 0,
      currentStep: 1,
      followingStep: 2,
    }
    this.handleClickPreviousStep = this.handleClickPreviousStep.bind(this);
    this.handleClickFollowingStep = this.handleClickFollowingStep.bind(this);
  }

  handleClickPreviousStep(){
    console.log(this.state.currentStep);
    if(this.state.dot1 === 'active'){
      this.setState({
        dot1: '',
        dot2:'active',
        dot3: '',
        dot4: '',
        dot5: '',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(this.state.dot1 === ''){
      this.setState({
        dot1: 'active',
        dot2: '',
        dot3: '',
        dot4: '',
        dot5: '',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  }
}

  handleClickFollowingStep(){
    console.log(this.state.currentStep);
    if(this.state.dot1 === 'active'){
      this.setState({
        dot1: '',
        dot2:'active',
        dot3: '',
        dot4: '',
        dot5: '',
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(this.state.dot1 === ''){
      this.setState({
        dot1: 'active',
        dot2:'',
        dot3: '',
        dot4: '',
        dot5: '',
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  }
}
  
  render() {
    console.log(this.state);
    const {state} = this;
    return (
      <div className="App">
        <Header />
        <Pages 
          state={state}
          handleClickPreviousStep={this.handleClickPreviousStep}
          handleClickFollowingStep={this.handleClickFollowingStep}
        />
      </div>
    );
  }
}

export default App;
