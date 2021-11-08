import React, { Component } from "react";
import BugIcon from "mdi-react/BugIcon";
import html2canvas from "html2canvas";
import Modals from "./Modal";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';
import Bugimgicon from "./bugicon.svg" 
class BugReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      screenshot: "",
      desc: "",
      isLoading: false,
      insertedId: "",
    };
  }

  captureScreenShot = async () => {
    this.setState({isLoading:true, modal: true});
    const canvas = await html2canvas(document.querySelector("body"));
    const base64 = canvas.toDataURL("image/jpeg");
    console.log(base64)
    this.setState({ screenshot: base64, modal: true, isLoading: false });
  };

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ desc: e.target.value });
  };

  toggle = () =>
    this.setState({
      modal: !this.state.modal,
      screenshot: "",
      desc: "",
      insertedId: false,
      isLoading: false
    });
  handleSubmit = async (e) => {
    this.setState({ isLoading: true });
    console.log("handlesubmit")
    e.preventDefault();
    const headers = {
      "Authorization": this.props.headerAuthParam || ""
    }
    try {
      const entity_id = this.props.user   
      const app_id = this.props.app_id
      const { desc, screenshot} = this.state;
      const page_id = window.location.pathname.slice(1) || 'test'
      const body = { page_id, entity_id, app_id, desc, screenshot };
      console.log("body report",body)
      this.setState({ isLoading: true });
      const res = await axios.post(this.props.reportLink, body, { headers });
      console.log("bug report",res)
      console.log("bug report id",res.data)
      const insertedId = res.data
      this.setState({ isLoading: false, insertedId});
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
  };

  render() {
    
    const { modal, screenshot, desc, isLoading, insertedId } = this.state;
    return (
      <div>
        <button
          className="bug-icon"
          style = {this.props.backgroundstyle}
          type="button"
          onClick={this.captureScreenShot}
        >
          <div className="customtooltip" >
            <p className="tooltip-text">Report a Bug</p>
          </div>
          <table>
            <tr>
              <td className="mt-2">
                <img src={Bugimgicon} style ={this.props.imgstyle}  />
              </td>
              {/* <td >
                {this.props.displayText}
              </td> */}
            </tr>
          </table>
        </button>
        {isLoading ?         <Modals open={modal} onCloseClicked={this.toggle} onBackDropClicked={this.toggle}>
        <div className="mt-5 pt-3 pb-3 mb-5">
                                      <Spinner
                                        text={"Loading..."}
                                      />
                                  </div>
          </Modals>:
        <Modals open={modal} onCloseClicked={this.toggle} onBackDropClicked={this.toggle}>
          {insertedId ? (
            <div>
              <h5 className="d-flex justify-content-center">
                Your Problem Ticket No.: <b>{`${insertedId}`}</b>
              </h5>
              <div className="d-flex w-100 justify-content-center">
                <button
                  onClick={this.toggle}
                  className="modal_ok"
                  color="danger"
                >
                  Ok
                </button>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={this.handleSubmit}>
              <span>Screenshot</span>
              <span style = {{float : 'right',color : 'grey'}}>Date : {(new Date()).toLocaleDateString()}</span>
              <img
                src={screenshot}
                alt="screenshot"
                width="100%"
                height="380px"
                className="rounded"
              />
              <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                  Description
                  </label>
                  <textarea
                  className="form-control"
                  placeholder="Describe your issue"
                  onChange={(e) => this.handleChange(e)}
                  autoFocus
                  rows="4"
                  />
              </div>
              <div className="d-flex w-100 justify-content-center">
                <button
                  type="reset"
                  className="modal_cancel"
                  onClick={this.toggle}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="modal_ok"
                  color="danger"
                  disabled={isLoading}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Modals>}
      </div>
    );
  }
}

export default BugReport;
