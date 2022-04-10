import { Component } from "react";

class Personal extends Component {
    showCards = () => {
        this.props.showCard();
    };

    gettingValues = (e) => {
        this.props.getInputValue(e.target.value);
    };

    submitData = () => {
        this.props.submitDatas();
    };

    render() {
        return (
            <div className="personal">
                <div className="personalTitle">
                    <h1>
                        Personal Information 
                    </h1>

                    <p onClick={this.showCards} id='arrow'>
                        &rarr;
                    </p>
                </div>

                <div className="personalInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='firstnamediv'>
                            <label htmlFor="firstName">First Name: </label>
                            <input id='firstName' type='text' placeholder="Tenzin" onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='lastnamediv'>
                            <label htmlFor="lastName">Last Name: </label>
                            <input id='lastName' type='text' placeholder="Dorjee" onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='emaildiv'>
                            <label htmlFor="email">email: </label>
                            <input id='email' type='text' placeholder="tenzin@gmail.com" onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='phonediv'>
                            <label htmlFor="phone">phone: </label>
                            <input id='phone' type='text' placeholder="1211212211" onChange={this.gettingValues}></input>
                        </div>

                        <div className="inputDiv" id='addressdiv'>
                            <label htmlFor="address">Address: </label>
                            <input id='address' type='text' placeholder="12-12 44th Ave, 22121, New York" onChange={this.gettingValues}></input>
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

export default Personal;