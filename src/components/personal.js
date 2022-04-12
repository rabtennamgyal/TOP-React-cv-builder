import { Component } from "react";

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Phone: '',
            Address: ''
        }
    };

    setFirstName = (e) => {
        this.setState({
            FirstName: e.target.value
        });
    };

    setLastName = (e) => {
        this.setState({
            LastName: e.target.value
        });
    };

    setEmail = (e) => {
        this.setState({
            Email: e.target.value
        });
    };

    setPhone = (e) => {
        this.setState({
            Phone: e.target.value
        });
    };

    setAddress = (e) => {
        this.setState({
            Address: e.target.value
        });
    };

    showCards = () => {
        this.props.showCard1();
    };

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="personal">
                <div className="personalTitle">
                    <h1>
                        Personal Information 
                    </h1>

                    <p onClick={this.showCards} id='arrow1'>
                        &rarr;
                    </p>
                </div>

                <div className="personalInfo InputDiv">
                    <form>
                        <div className="inputDiv" id='firstnamediv'>
                            <label htmlFor="firstName">First Name: </label>
                            <input id='firstName' type='text' placeholder="Tenzin" onInput={this.setFirstName}></input>
                        </div>

                        <div className="inputDiv" id='lastnamediv'>
                            <label htmlFor="lastName">Last Name: </label>
                            <input id='lastName' type='text' placeholder="Dorjee" onInput={this.setLastName}></input>
                        </div>

                        <div className="inputDiv" id='emaildiv'>
                            <label htmlFor="email">Email: </label>
                            <input id='email' type='text' placeholder="tenzin@gmail.com" onInput={this.setEmail}></input>
                        </div>

                        <div className="inputDiv" id='phonediv'>
                            <label htmlFor="phone">Phone: </label>
                            <input id='phone' type='text' placeholder="1211212211" onInput={this.setPhone}></input>
                        </div>

                        <div className="inputDiv" id='addressdiv'>
                            <label htmlFor="address">Address: </label>
                            <input id='address' type='text' placeholder="12-12 44th Ave, 22121, New York" onInput={this.setAddress}></input>
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