import React, { Component } from 'react';
import Header from './Header';
import Pages from './Pages';
import '../scss/App.css';
import { FormattedMessage } from 'react-intl';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personalInformation: {
          lastName: '',
          firstName: '',
        },
        contactInformation: {
          phoneNumbers: [],
          emails: [],
        },
        extras: {
          familyNumber: 0,
          islandResident: {
            region: '',
            locality: ''
          },
        },
        emergencyContact: [
          {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
          }
        ],
        travelDocuments: {
          idCard: [
            {
              placeOfBirth: '',
              issueDate: '',
              expiryDate: '',
              dniNumber: '',
            },
          ],
          passport: [
            {
              issueCountry: '',
              issueDate: '',
              expiryDate: '',
              passportNumber: '',
              },
          ],
        }
      },
      titles : {
        title1: <FormattedMessage
                  id="App.personalInfo"
                  defaultMessage="Personal information"
                />,
        title2: <FormattedMessage
                  id="App.travelDocuments"
                  defaultMessage="Travel documents"
                />,
        title3: <FormattedMessage
                  id="App.paymentMethod"
                  defaultMessage="Payment method"
                />,
        title4: <FormattedMessage
                  id="App.tripPreferences"
                  defaultMessage="Trip preferences"
                />,
        title5: <FormattedMessage
                  id="App.extraInfo"
                  defaultMessage="Extra information"
                />,
      },
      steps : {
        step1: <FormattedMessage
                id="App.step1"
                defaultMessage="Step 1"
              />,
        step2: <FormattedMessage
                id="App.step2"
                defaultMessage="Step 2"
              />,
        step3: <FormattedMessage
                id="App.step3"
                defaultMessage="Step 3"
              />,
        step4: <FormattedMessage
                id="App.step4"
                defaultMessage="Step 4"
              />,
        step5: <FormattedMessage
                id="App.step5"
                defaultMessage="Step 5"
              />,
      },
      dots : {
        dot1: 'active',
        dot2: '',
        dot3: '',
        dot4: '',
        dot5: '',
      },
      previousStep: 0,
      currentStep: 1,
      followingStep: 2,
    }
    this.handleClickPreviousStep = this.handleClickPreviousStep.bind(this);
    this.handleClickFollowingStep = this.handleClickFollowingStep.bind(this);
  }

  handleClickPreviousStep() {
    console.log(this.state.currentStep);
    const {dot1} = this.state.dots;
    if(dot1 === 'active'){
      this.setState({
        dots: {
          dot1: '',
          dot2:'active',
          dot3: '',
          dot4: '',
          dot5: '',
        },
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(dot1 === ''){
      this.setState({
        dots:{
          dot1: 'active',
          dot2: '',
          dot3: '',
          dot4: '',
          dot5: '',
        },
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
    const {dot1} = this.state.dots;
    console.log('dot1',dot1);
    if(dot1 === 'active'){
      this.setState({
        dots:{
          dot1: '',
          dot2:'active',
          dot3: '',
          dot4: '',
          dot5: ''
        },
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(dot1 === ''){
      this.setState({
        dots:{
          dot1: 'active',
          dot2: '',
          dot3: '',
          dot4: '',
          dot5: '',
        },
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    }
  }

  render() {
    console.log('ESTADO',this.state);
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
