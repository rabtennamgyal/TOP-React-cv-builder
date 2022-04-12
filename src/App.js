import React from "react";
import CVBuilder from "./module/CVbuilder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: []
    }
  }

  getData = (data) => {
    this.state.personal.push(data);
    console.log(this.state.personal);
  };

  render() {
    return (
      <div className="App">
        <CVBuilder getData={this.getData} />
      </div>
    );
  }
}

export default App;
