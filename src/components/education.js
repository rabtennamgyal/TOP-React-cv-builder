import { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SchoolName: '',
            SchoolGraduation: '',
            CollegeName: '',
            CollegeGraduation: '',
            Study: '',
            Degree: ''
        }
    };

    setSchoolName = (e) => {
        this.setState({
            SchoolName: e.target.value
        });
    };

    setSchoolGraduation = (e) => {
        this.setState({
            SchoolGraduation: e.target.value
        });
    };

    setCollegeName = (e) => {
        this.setState({
            CollegeName: e.target.value
        });
    };

    setCollegeGraduation = (e) => {
        this.setState({
            CollegeGraduation: e.target.value
        });
    };

    setStudy = (e) => {
        this.setState({
            Study: e.target.value
        });
    };

    setDegree = (e) => {
        this.setState({
            Degree: e.target.value
        });
    };

    showCards = () => {
        this.props.showCard2();
    };

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit2(this.state);
        const inputs = document.querySelectorAll('.inpute');
        inputs.forEach(el => el.value = '');
    };

    render() {
        return (
            <div className="education">
                <div className="educationTitle">
                    <h1>
                        Education Information 
                    </h1>

                    <p onClick={this.showCards} id='arrow2'>
                        👉
                    </p>
                </div>

                <div className="educationInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='schoolNamediv'>
                            <label htmlFor="schoolName">School Name: </label>
                            <input className="inpute" id='schoolName' type='text' onInput={this.setSchoolName}></input>
                        </div>

                        <div className="inputDiv" id='schoolGraduationdiv'>
                            <label htmlFor="schoolGraduation">Graduation: </label>
                            <input className="inpute" id='schoolGraduation' type='date' onInput={this.setSchoolGraduation}></input>
                        </div>

                        <div className="inputDiv" id='collegeNamediv'>
                            <label htmlFor="collegeName">College Name: </label>
                            <input className="inpute" id='collegeName' type='text' onInput={this.setCollegeName}></input>
                        </div>

                        <div className="inputDiv" id='collgeGraduationdiv'>
                            <label htmlFor="collgeGraduation">College Graduation: </label>
                            <input className="inpute" id='collegeGraduation' type='date' onInput={this.setCollegeGraduation}></input>
                        </div>

                        <div className="inputDiv" id='studydiv'>
                            <label htmlFor="study">Field Of Study: </label>
                            <input className="inpute" id='study' type='text' placeholder="Computer Science" onInput={this.setStudy}></input>
                        </div>

                        <div className="inputDiv" id='degreediv'>
                            <label htmlFor="degree">Degree: </label>
                            <select className="inpute" id="degrees" onInput={this.setDegree}>
                                <option value="Associate's Degree">Associate's Degree</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                            </select>
                        </div>

                        <div id="submitDiv">
                            <button type='button' onClick={this.submitData}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default Education;