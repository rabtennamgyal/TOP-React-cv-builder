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
      let newArr = this.state.personal.splice(0, this.state.personal.length - 1);
      newArr.push(data);
      this.setState({
        personal: this.state.splice(0, this.setState)
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
    })
    console.log(this.state.personal);
  };

  getData2 = (data) => {
    this.state.education.push(data);
  };

  getData3 = (data) => {
    this.state.work.push(data);
  };

  editData = () => {
    console.log('editing');
    const arrow = document.getElementById('arrow1');
    const personalInfo = document.querySelector('.personalInfo');

    const FirstName = this.state.FirstName;
    const firstNameinput = document.getElementById('firstName');
    firstNameinput.value = FirstName;
    console.log(FirstName);


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
