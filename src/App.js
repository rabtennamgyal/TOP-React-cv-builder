import React from "react";
import CVBuilder from "./module/CVbuilder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      education: [],
      work: []
    }
  }

  getData = (data) => {
    this.state.personal.push(data);
    console.log(this.state.personal);
  };

  getData2 = (data) => {
    this.state.education.push(data);
    console.log(this.state.education)
  };

  getData3 = (data) => {
    this.state.work.push(data);
    console.log(this.state.work)
  };

  render() {
    return (
      <div className="App">
        <CVBuilder 
        getData={this.getData} getData2={this.getData2} getData3={this.getData3}
        />
      </div>
    );
  }
}

export default App;
