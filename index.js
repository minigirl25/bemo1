import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  clickedBtn = () => {
    console.log("word");
  };

  componentWillMount() {}

  componentDidUpdate() {}

  render() {
    return <h3>page starts here</h3>;
  }
}

export default Filter;
