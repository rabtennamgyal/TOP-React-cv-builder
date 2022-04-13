import React from "react";
import CVBuilder from "./module/CVbuilder";
import FinalCV from "./module/FinalCV";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      education: [],
      work: [],
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Address: ''
    }
  };

  getData = (data) => {
    if (this.state.personal.length !== 0) {
      const personal = this.state.personal.slice(0, this.state.personal.length - 1);
      personal.push(data);
      this.setState({
        personal: personal
      });
    } else {
      this.state.personal.push(data);
    };

    setTimeout(() => {
      const { FirstName, LastName, Email, Phone, Address } = this.state.personal[0];
      this.setState({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Phone: Phone,
        Address: Address
      });
    });

    setTimeout(() => console.log(this.state.personal));
  };

  getData2 = (data) => {
    this.state.education.push(data);
  };

  getData3 = (data) => {
    this.state.work.push(data);
  };

  editData = () => {
    const arrow = document.getElementById('arrow1');
    const personalInfo = document.querySelector('.personalInfo');

    const FirstName = this.state.FirstName;
    const firstNameinput = document.getElementById('firstName');
    const LastName = this.state.LastName;
    const lastNameinput = document.getElementById('lastName');
    const Email = this.state.Email;
    const emailinput = document.getElementById('email');
    const Phone = this.state.Phone;
    const phoneinput = document.getElementById('phone');
    const Address = this.state.Address;
    const addressinput = document.getElementById('address');


    firstNameinput.value = FirstName;
    lastNameinput.value = LastName;
    emailinput.value = Email;
    phoneinput.value = Phone;
    addressinput.value = Address;


    if (personalInfo.classList.contains('open')) {
      return;
    } else {
      personalInfo.classList.add('open');
      personalInfo.style.height = '25rem';
      personalInfo.style.visibility = 'visible';
      arrow.style.transform = 'rotate(90deg)';
    };
  };

  render() {
    const { FirstName, LastName, Email, Phone, Address } = this.state;

    return (
      <div className="App">
        <CVBuilder 
        getData={this.getData} getData2={this.getData2} getData3={this.getData3}
        />
        <FinalCV 
        FirstName={FirstName}
        LastName={LastName}
        Email={Email}
        Phone={Phone}
        Address={Address}
        editData={this.editData}
        />
      </div>
    );
  }
}

export default App;
