import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';
import logo  from "./sample_logo.jpg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {options : [
      {label: "CATALOG", value: 0 },
      { label: "Alligators", value: 1 },
      { label: "Crocodiles", value: 2 },
      { label: "Sharks", value: 3 },
      { label: "Small crocodiles", value: 4 },
      { label: "Smallest crocodiles", value: 5 },
      { label: "Snakes", value: 6 },
    ]};
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Sample-County-Librar">
          <img src={logo} alt="logo" />
          </div>
          <div>
            <div className="header-select">
                <select name="input" defaultValue="0" className="select-box">
                    {
                      this.state.options.map(function (option, i) {
                        return <option key={i} value={option.value} label={option.label} />;
                      })
                    }
                </select>
            </div>
            <div className="search-BG">
            <input type="text" />
            <button>SEARCH</button>
            </div>
          </div>
        </header>
        <Thumbnail/>
      </div>
    );
  }
}

export default App;
