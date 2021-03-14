import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BugIcon from "mdi-react/BugIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Modals = function Modals(props) {
  return React.createElement(Modal, {
    show: props.open,
    onHide: props.onCloseClicked,
    size: "lg"
  }, React.createElement(Modal.Header, {
    closeButton: true
  }, React.createElement(Modal.Title, null, "    ", React.createElement(BugIcon, null), "  Report Bug")), React.createElement(Modal.Body, null, props.children));
};

export default Modals; // let ret=null;
// if (props.open) {
//   ret = (
//     <div className="react-modal-classname">
//     <div className="backdrop" onClick={props.onBackDropClicked}></div>
//     <div className="modal" onClick={props.onModalClicked}> 
//       <div className="close-icon"onClick={props.onCloseClicked}>
//         <div></div>
//         <div></div>
//       </div>
//       <div className="d-flex align-items-center justify-content-center">            
//           <h4 className="text-modal mb-0 modal__title"> <BugIcon /> Report Bug</h4>
//       </div>
//      {props.children} 
//      </div>
//     </div>
//   )
// }
// return (<ReactCSSTransitionGroup  transitionName="modal"
// transitionEnterTimeout={500}
// transitionLeaveTimeout={300} >{ret}</ReactCSSTransitionGroup>)