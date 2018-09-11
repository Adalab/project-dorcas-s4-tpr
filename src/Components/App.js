import React, { Component } from 'react';
import Header from './Header';
import Pages from './Pages';
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
      currentStep: 1,
      changingStep: {
        changingStep1: {
          stepNumber: 1,
          active: false,
          completed: false
        },
        changingStep2: {
          stepNumber: 2,
          active: false,
          completed: false
        },
        changingStep3: {
          stepNumber: 3,
          active: false,
          completed: false
        },
        changingStep4:  {
          stepNumber: 4,
          active: false,
          completed: false
        },
        changingStep5:  {
          stepNumber: 5,
          active: false,
          completed: false
        },
      }
    }
    
    this.handleUpdateNavigation = this.handleUpdateNavigation.bind(this);
    this.handleCurrentStep=this.handleCurrentStep.bind(this);
    this.handleStep1=this.handleStep1.bind(this);
    this.handleStep2=this.handleStep2.bind(this);
  }

    // componentWillMount () {
    //   this.handleUpdateNavigation();
    // }
  handleStep1(data){
    console.log(data);
    this.setState({
      data: {
        ...this.state.data,
        personalInformation: {
          lastName: data.surname,
          firstName: data.name,
        },
        contactInformation: {
          ...this.state.data.contactInformation,
          phoneNumbers: [data.phoneNumber, data.lineNumber],
        },
    }
  },()=>(console.log(this.state.data)))
} 

  handleStep2(data){
    console.log(data);
    this.setState({
      data: {
        ...this.state.data,
        travelDocuments: {
          idCard: [
            {
              placeOfBirth: data.placeBirth,
              issueDate: data.idIssueDate,
              expiryDate: data.idExpDate,
              dniNumber: data.numberId,
            },
          ],
          passport: [
            {
              issueCountry: data.passCountryIssue,
              issueDate: data.passIssueDate,
              expiryDate: data.passExpDate,
              passportNumber: data.numberPassport,
              },
          ],
        }
      }
    },()=>(console.log(this.state.data)))
  } 
  

  handleCurrentStep(step){
    console.log('step',step);
    this.setState({
      currentStep: step,
    }, ()=> {console.log(this.state.currentStep)})
    this.handleUpdateNavigation(step);
  }

  handleUpdateNavigation(step) {
    console.log('FUNCIONAAAA!!!');
    const {
      currentStep,
      changingStep,
    } = this.state;
    const {
      changingStep1,
      changingStep2,
      changingStep3,
      changingStep4,
      changingStep5
    } = changingStep;
    console.log('changingStep, step', changingStep, step);
    if(changingStep1.stepNumber === step){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: true},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      },()=> {console.log(this.state.currentStep)});
    } else if(changingStep2.stepNumber === step){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: true},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      },()=> {console.log(this.state.currentStep)});
    } else if(changingStep3.stepNumber === step){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: true},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      },()=> {console.log(this.state.currentStep)});
    } else if(changingStep4.stepNumber === step){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: true},
          changingStep5: {...changingStep5, active: false},
        }
      },()=> {console.log(this.state.currentStep)});
    } else if(changingStep5.stepNumber === step){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: true},
        }
      },()=> {console.log(this.state.currentStep)});
    } 
  }

  render() {
    console.log('ESTADO',this.state);
    return (
      <div className="App">
        <Header />
        <Pages 
          handleUpdateNavigation={this.handleUpdateNavigation}
          stateObject={this.state}
          handleCurrentStep={this.handleCurrentStep}
          handleStep1={this.handleStep1}
          handleStep2={this.handleStep2}
        />
      </div>
    );
  }
}


export default App;
