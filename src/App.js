import React from "react";

export default class App extends React.Component {
  state = {
    name: "rudrava",
  };
  render() {
    return <h1 className="hello">Namuste {this.state.name}</h1>;
  }
}
