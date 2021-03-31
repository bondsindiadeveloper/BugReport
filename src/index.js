import React ,{Component}from 'react';
import { render } from "react-dom";
import BugReport from './lib/index'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render(){
    return(
      <div className="App">
      <BugReport user = "bondsindia" app_id = "test" color = "brown" reportLink = "https://7i3xowbtma.execute-api.ap-south-1.amazonaws.com/uat/adminbugreport" />
      <header className="App-header">
        <img style = {{marginLeft : '50vw'}} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}
 

render(<App />, document.getElementById("root"));
