import { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Position: '',
            Employer: '',
            StartDate: '',
            EndDate: '',
            Description: ''
        };
    };

    setPosition = (e) => {
        this.setState({
            Position: e.target.value
        });
    };

    setEmployer = (e) => {
        this.setState({
            Employer: e.target.value
        });
    };

    setStartDate = (e) => {
        this.setState({
            StartDate: e.target.value
        });
    };
    
    setEndDate = (e) => {
        this.setState({
            EndDate: e.target.value
        });
    };

    setDescription = (e) => {
        this.setState({
            Description: e.target.value
        });
    };

    showCards = () => {
        this.props.showCard3();
    };

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit3(this.state);
        const inputs = document.querySelectorAll('.inputw');
        inputs.forEach(el => el.value = '');
    };

    render() {
        return (
            <div className="work">
                <div className="workTitle">
                    <h1>
                        Work Information
                    </h1>

                    <p onClick={this.showCards} id='arrow3'>
                        👉
                    </p>
                </div>

                <div className="workInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='positiondiv'>
                            <label htmlFor="position">Position: </label>
                            <input className="inputw" id='position' type='text' onInput={this.setPosition}></input>
                        </div>

                        <div className="inputDiv" id='employerdiv'>
                            <label htmlFor="employer">Employer: </label>
                            <input  className="inputw" id='employer' type='text' onInput={this.setEmployer}></input>
                        </div>

                        <div className="inputDiv" id='startDatediv'>
                            <label htmlFor="startDate">Start Date: </label>
                            <input className="inputw" id='startDate' type='date' onInput={this.setStartDate}></input>
                        </div>

                        <div className="inputDiv" id='endDatediv'>
                            <label htmlFor="endDate">End Date: </label>
                            <input className="inputw" id='endDate' type='date' onInput={this.setEndDate}></input>
                        </div>

                        <div className="inputDiv" id='descriptiondiv'>
                            <label htmlFor="description">Descritption: </label>
                            <textarea className="inputw" id='description' type='text' onInput={this.setDescription}></textarea>
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

export default Work;