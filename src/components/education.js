import { Component } from "react";

class Education extends Component {

    showCards = () => {
        this.props.showCard2();
    };

    gettingValues = (e) => {
        this.props.getInputValue2(e.target.value);
    };

    submitData = () => {
        this.props.submitDatas();
    };

    render() {
        return (
            <div className="education">
                <div className="educationTitle">
                    <h1>
                        Education Information 
                    </h1>

                    <p onClick={this.showCards} id='arrow2'>
                        &rarr;
                    </p>
                </div>

                <div className="educationInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='schoolNamediv'>
                            <label htmlFor="schoolName">School Name: </label>
                            <input id='schoolName' type='text' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='schoolGraduationdiv'>
                            <label htmlFor="schoolGraduation">Graduation: </label>
                            <input id='schoolGraduation' type='date' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='collegeNamediv'>
                            <label htmlFor="collegeName">College Name: </label>
                            <input id='collegeName' type='text' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='collgeGraduationdiv'>
                            <label htmlFor="collgeGraduation">College Graduation: </label>
                            <input id='collgeGraduation' type='date' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='studydiv'>
                            <label htmlFor="study">Field Of Study: </label>
                            <input id='study' type='text' placeholder="Computer Science" onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='degreediv'>
                            <label htmlFor="degree">Degree: </label>
                            <select id="degrees" onChange={this.gettingValues}>
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