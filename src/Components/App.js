import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Pages from './Pages';
import Loading from './Loading';

import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idRoute:'',
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
        },
      },
        dataVisa: {
          numberVisa:'4234',
          issueCountry:'Perú',
          destinyCountry:'Argentina',
          issueDate:'',
          expiryDate:'',
        },
      dataAccommodation: { // data step4
        plain1: '',
        plain2: '',
        train1: '',
        breakfast: '',
        qualityAcom:'',
        typeAcom:'',
    },
      titles: {
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
      steps: {
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
      currentStep: "",
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
        changingStep4: {
          stepNumber: 4,
          active: false,
          completed: false
        },
        changingStep5: {
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
    this.handleStep4=this.handleStep4.bind(this);
    this.handleStep5=this.handleStep5.bind(this);
    this.handleIdRoute=this.handleIdRoute.bind(this);
    this.handleFirstPage=this.handleFirstPage.bind(this);
  }

  componentDidMount() {
    axios.get(`https://triporate-travel-api-dot-triporate-micro-services.appspot.com/travelers/${this.state.idRoute}`)
      .then(res => {
        const person = res.data;
        console.log('BACKEND',person)
        this.setState({
          data: {
            personalInformation: {
              lastName: person.personalInformation.lastName,
              firstName: person.personalInformation.firstName,
            },
            contactInformation: {
                phoneNumbers: person.contactInformation.phoneNumbers,
                emails: person.contactInformation.emails,
            },
            travelDocuments: {
              idCard: [
                {
                  placeOfBirth: person.travelDocuments.idCard[0].dniNumber,
                  issueDate: person.travelDocuments.idCard[0].expiryDate,
                  expiryDate: person.travelDocuments.idCard[0].issueDate,
                  dniNumber: person.travelDocuments.idCard[0].placeOfBirth,
                },
              ],
              passport: [
                {
                  issueCountry: person.travelDocuments.passport[0].issueCountry,
                  issueDate: person.travelDocuments.passport[0].issueDate,
                  expiryDate: person.travelDocuments.passport[0].expiryDate,
                  passportNumber: person.travelDocuments.passport[0].passportNumber,
                },
              ],
            },
          
            extras: {
              familyNumber: person.extras.familyNumber,
              islandResident: {
                region: person.extras.islandResident.region,
                locality: person.extras.islandResident.locality,
              },
            },
            emergencyContact: [
              {
                firstName: person.extras.emergencyContact[0].firstName,
                lastName: person.extras.emergencyContact[0].lastName,
                email: person.extras.emergencyContact[0].email,
                phoneNumber: person.extras.emergencyContact[0].phoneNumber,
              }
            ],
          }
        })
      })
  }

  handleIdRoute(idRoute){
    this.setState({
      idRoute: idRoute,
    }, ()=>(console.log(this.state.idRoute)))
  }

  handleStep1(data){
    console.log('aaaaaaaaajjjjjjjjjjjj',data);
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
  },()=>(console.log('estoy aqui',this.state.data)))
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
        },
      },
        dataVisa: {
          numberVisa: data.numberVisa,
          issueCountry: data.visaCountryIssue,
          destinyCountry:data.visaCountryDestination,
          issueDate:data.visaIssueDate,
          expiryDate:data.visaExpDate,
        },
    },()=>(console.log(this.state.data)))
  } 

  handleStep4(data){
    console.log(data);
    this.setState({
      dataAccommodation: data
    },()=>(console.log(this.state.data)))
  } 

  handleStep5(data){
    console.log(data);
    this.setState({
      data: {
        ...this.state.data,
        extras: {
          familyNumber: data.familyNumber,
          islandResident: {
            region: data.region,
            locality: data.locality,
          },
        },
        emergencyContact: [
          {
            firstName: data.firstNameEmergency,
            lastName: "",
            email: data.emailEmergency,
            phoneNumber: data.phoneNumberEmergency,
          }
        ],
      }
    },()=>(console.log(this.state.dataVisa)))
  } 

  handleCurrentStep(step) {
    console.log('step', step);
    this.setState({
      currentStep: step,
     }, ()=> (this.handleUpdateNavigation(step))
  );
}

  handleUpdateNavigation(step) {
    const {
      changingStep,
    } = this.state;
    const {
      changingStep1,
      changingStep2,
      changingStep3,
      changingStep4,
      changingStep5
    } = changingStep;
    // console.log('changingStep, step', changingStep, step);
    if (changingStep1.stepNumber === step) {
      this.setState({
        changingStep: {
          changingStep1: { ...changingStep1, active: true },
          changingStep2: { ...changingStep2, active: false },
          changingStep3: { ...changingStep3, active: false },
          changingStep4: { ...changingStep4, active: false },
          changingStep5: { ...changingStep5, active: false },
        }
      }, () => { console.log(this.state.currentStep) });
    } else if (changingStep2.stepNumber === step) {
      this.setState({
        changingStep: {
          changingStep1: { ...changingStep1, active: false },
          changingStep2: { ...changingStep2, active: true },
          changingStep3: { ...changingStep3, active: false },
          changingStep4: { ...changingStep4, active: false },
          changingStep5: { ...changingStep5, active: false },
        }
      }, () => { console.log(this.state.currentStep) });
    } else if (changingStep3.stepNumber === step) {
      this.setState({
        changingStep: {
          changingStep1: { ...changingStep1, active: false },
          changingStep2: { ...changingStep2, active: false },
          changingStep3: { ...changingStep3, active: true },
          changingStep4: { ...changingStep4, active: false },
          changingStep5: { ...changingStep5, active: false },
        }
      }, () => { console.log(this.state.currentStep) });
    } else if (changingStep4.stepNumber === step) {
      this.setState({
        changingStep: {
          changingStep1: { ...changingStep1, active: false },
          changingStep2: { ...changingStep2, active: false },
          changingStep3: { ...changingStep3, active: false },
          changingStep4: { ...changingStep4, active: true },
          changingStep5: { ...changingStep5, active: false },
        }
      }, () => { console.log(this.state.currentStep) });
    } else if (changingStep5.stepNumber === step) {
      this.setState({
        changingStep: {
          changingStep1: { ...changingStep1, active: false },
          changingStep2: { ...changingStep2, active: false },
          changingStep3: { ...changingStep3, active: false },
          changingStep4: { ...changingStep4, active: false },
          changingStep5: { ...changingStep5, active: true },
        }
      }, () => { console.log(this.state.currentStep) });
    }
  }

  handleFirstPage(){
    console.log('primer paso')
   
  }

  render() {
    console.log('ESTADO', this.props);
    return (
      <div className="App">
        <Header />
        <Pages
          handleUpdateNavigation={this.handleUpdateNavigation}
          stateObject={this.state}
          handleCurrentStep={this.handleCurrentStep}
          handleStep1={this.handleStep1}
          handleStep2={this.handleStep2}
          handleStep4={this.handleStep4}
          handleStep5={this.handleStep5}
          stateDataObject={this.state.data}
          dataVisa={this.state.dataVisa}
          stateAccommodationObject={this.state.dataAccommodation}
          handleIdRoute= {this.handleIdRoute}
          handleFirstPage={this.handleFirstPage}
        />
      </div>
    );
  }
}

export default withRouter(App);
