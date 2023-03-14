import React from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/region/europe")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          countries: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, countries } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <React.Fragment key={countries}>
        <div className="App">
          <h1>Country Data</h1>
          <SearchBar />
          <DropDown />
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default App;
