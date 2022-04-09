import { Component } from "react";

class Personal extends Component {
    showCards = () => {
        this.props.showCard();
    };

    render() {
        return (
            <div className="personal">
                <div className="personalTitle">
                    <h1>
                        Personal Information: 
                    </h1>

                    <button onClick={this.showCards}>
                        Add
                    </button>
                </div>

                <div className="personalInfo">
                    <form>
                        <label htmlFor="firstName">First Name: </label>
                        <input id='firstName' type='text'></input>

                        {/* <label htmlFor="lastName">Last Name: </label>
                        <input id='lastName' type='text'></input> */}
                    </form>
                </div>
            </div>
        );
    };
};

export default Personal;