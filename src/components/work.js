import { Component } from "react";

class Work extends Component {
    showCards = () => {
        this.props.showCard3();
    };

    submitData = () => {
        this.props.submitDatas();
    };

    render() {
        return (
            <div className="work">
                <div className="workTitle">
                    <h1>
                        Work Information
                    </h1>

                    <p onClick={this.showCards} id='arrow3'>
                        &rarr;
                    </p>
                </div>

                <div className="workInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='positiondiv'>
                            <label htmlFor="position">Position: </label>
                            <input id='position' type='text' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='employerdiv'>
                            <label htmlFor="employer">Employer: </label>
                            <input id='employer' type='text' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='startDatediv'>
                            <label htmlFor="startDate">Start Date: </label>
                            <input id='startDate' type='date' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='endDatediv'>
                            <label htmlFor="endDate">End Date: </label>
                            <input id='endDate' type='date' onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='descriptiondiv'>
                            <label htmlFor="description">Descritption: </label>
                            <textarea id='description' type='text' onChange={this.gettingValues}></textarea>
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