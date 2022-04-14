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
      Address: '',
      SchoolName: '',
      SchoolGraduation: '',
      CollegeName: '',
      CollegeGraduation: '',
      Study: '',
      Degree: '',
      Position: '',
      Employer: '',
      StartDate: '',
      EndDate: '',
      Description: ''
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
  };

  getData2 = (data) => {
    if (this.state.education.length !== 0) {
      const education = this.state.education.slice(0, this.state.education.length - 1);
      education.push(data);
      this.setState({
        education: education
      });
    } else {
      this.state.education.push(data);
    };

    setTimeout(() => {
      const { SchoolName, SchoolGraduation, CollegeName, CollegeGraduation, Study, Degree } = this.state.education[0];
      this.setState({
        SchoolName: SchoolName,
        SchoolGraduation: SchoolGraduation,
        CollegeName: CollegeName,
        CollegeGraduation: CollegeGraduation,
        Study: Study,
        Degree: Degree
      });
    });
  };

  getData3 = (data) => {
    if (this.state.work.length !== 0) {
      const work = this.state.work.slice(0, this.state.work.length - 1);
      work.push(data);
      this.setState({
        work: work
      });
    } else {
      this.state.work.push(data);
    };

    setTimeout(() => {
      const { Position, Employer, StartDate, EndDate, Description } = this.state.work[0];
      this.setState({
        Position: Position,
        Employer: Employer,
        StartDate: StartDate,
        EndDate: EndDate,
        Description: Description
      });

      console.log(this.state.work);
    });
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

  editData2 = () => {
    const arrow = document.getElementById('arrow2');
    const educationInfo = document.querySelector('.educationInfo');

    const SchoolName = this.state.SchoolName;
    const schoolNameinput = document.getElementById('schoolName');
    const SchoolGraduation = this.state.SchoolGraduation;
    const schoolGraduationinput = document.getElementById('schoolGraduation');
    const CollegeName = this.state.CollegeName;
    const collegeNameinput = document.getElementById('collegeName');
    const CollegeGraduation = this.state.CollegeGraduation;
    const collgeGraduationinput = document.getElementById('collegeGraduation');
    const Study = this.state.Study;
    const studyinput = document.getElementById('study');
    const Degree = this.state.Degree;
    const degreeinput = document.getElementById('degrees');
    
    schoolNameinput.value = SchoolName;
    schoolGraduationinput.value = SchoolGraduation;
    collegeNameinput.value = CollegeName;
    collgeGraduationinput.value = CollegeGraduation;
    studyinput.value = Study;
    degreeinput.value = Degree;

    if (educationInfo.classList.contains('open')) {
      return;
    } else {
      educationInfo.classList.add('open');
      educationInfo.style.height = '25rem';
      educationInfo.style.visibility = 'visible';
      arrow.style.transform = 'rotate(90deg)';
    };
  };

  editData3 = () => {
    const arrow = document.getElementById('arrow3');
    const workInfo = document.querySelector('.workInfo');

    const Position = this.state.Position;
    const positoninput = document.getElementById('position');
    const Employer = this.state.Employer;
    const employerinput = document.getElementById('employer');
    const StartDate = this.state.StartDate;
    const startDateinput = document.getElementById('startDate');
    const EndDate = this.state.EndDate;
    const endDateinput = document.getElementById('endDate');
    const Description = this.state.Description;
    const descriptioninput = document.getElementById('description');

    positoninput.value = Position;
    employerinput.value = Employer;
    startDateinput.value = StartDate;
    endDateinput.value = EndDate;
    descriptioninput.value = Description;

    if (workInfo.classList.contains('open')) {
      return;
    } else {
      workInfo.classList.add('open');
      workInfo.style.height = '25rem';
      workInfo.style.visibility = 'visible';
      arrow.style.transform = 'rotate(90deg)';
    };
  };

  print = () => {
    console.log('this function will create the final cv for print.')
  };

  render() {
    const { 
      FirstName, LastName, Email, Phone, Address,
      SchoolName, SchoolGraduation, CollegeName, CollegeGraduation, Study, Degree,
      Position, Employer, StartDate, EndDate, Description
    } = this.state;

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

        SchoolName={SchoolName}
        SchoolGraduation={SchoolGraduation}
        CollegeName={CollegeName}
        CollegeGraduation={CollegeGraduation}
        Study={Study}
        Degree={Degree}
        editData2={this.editData2}

        Position={Position}
        Employer={Employer}
        StartDate={StartDate}
        EndDate={EndDate}
        Description={Description}
        editData3={this.editData3}

        print={this.print}
        />
      </div>
    );
  }
}

export default App;
