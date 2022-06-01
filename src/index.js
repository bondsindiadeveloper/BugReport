import React ,{Component}from 'react';
import { render } from "react-dom";
import BugReport from './lib/index'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/components/Spinner.scss';
import './lib/components/Modal.scss';
import './App.css';
class App extends Component {
  render(){
    return(
      <div className="App">
        <div style={{position: 'fixed'}}>
          <BugReport user = "bondsindia" app_id = "test" reportLink = "" displayText={`Report \n a Bug`} backgroundstyle={{
            color : "#585858",fontSize : "15px" ,fontWeight:"bolder",lineHeight:1.2, verticalAlign:"middle",textAlign:"center",padding:"2px",whiteSpace: "pre-line"
          }} imgstyle={{color : "#585858", width : "30px" , height : "30px" ,verticalAlign:"middle"}} headerAuthParam="timepass" />
        </div>
      
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
        <br />
        1
        <br />
        2
        <br />
        3
        <br />
        4
        <br />
        5
        <br />
        6
        <br />
        7
        <br />
        8
        <br />
        9
        <br />
        10
        <br />
        11
        <br />
        1
        <br />
        2
        <br />
        3
        <br />
        4
        <br />
        5
        <br />
        6
        <br />
        7
        <br />
        8
        <br />
        9
        <br />
        10
        <br />
        11
      </header>
    </div>
    )
  }
}
 

render(<App />, document.getElementById("root"));
