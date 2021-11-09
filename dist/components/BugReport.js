import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import BugIcon from "mdi-react/BugIcon";
import html2canvas from "html2canvas";
import Modals from "./Modal";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';
import Bugimgicon from "./bugicon.svg";

var BugReport = /*#__PURE__*/function (_Component) {
  _inherits(BugReport, _Component);

  function BugReport(props) {
    var _this;

    _classCallCheck(this, BugReport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BugReport).call(this, props));
    _this.captureScreenShot = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var canvas, base64;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                isLoading: true,
                modal: true
              });

              _context.next = 3;
              return html2canvas(document.querySelector("body"));

            case 3:
              canvas = _context.sent;
              base64 = canvas.toDataURL("image/jpeg");
              console.log(base64);

              _this.setState({
                screenshot: base64,
                modal: true,
                isLoading: false
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleChange = function (e) {
      console.log(e.target.value);

      _this.setState({
        desc: e.target.value
      });
    };

    _this.toggle = function () {
      return _this.setState({
        modal: !_this.state.modal,
        screenshot: "",
        desc: "",
        insertedId: false,
        isLoading: false
      });
    };

    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(e) {
        var headers, entity_id, app_id, _this$state, desc, screenshot, page_id, body, res, insertedId;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  isLoading: true
                });

                console.log("handlesubmit");
                e.preventDefault();
                headers = {
                  "Authorization": _this.props.headerAuthParam || ""
                };
                _context2.prev = 4;
                entity_id = _this.props.user;
                app_id = _this.props.app_id;
                _this$state = _this.state, desc = _this$state.desc, screenshot = _this$state.screenshot;
                page_id = window.location.pathname.slice(1) || 'test';
                body = {
                  page_id: page_id,
                  entity_id: entity_id,
                  app_id: app_id,
                  desc: desc,
                  screenshot: screenshot
                };
                console.log("body report", body);

                _this.setState({
                  isLoading: true
                });

                _context2.next = 14;
                return axios.post(_this.props.reportLink, body, {
                  headers: headers
                });

              case 14:
                res = _context2.sent;
                console.log("bug report", res);
                console.log("bug report id", res.data);
                insertedId = res.data;

                _this.setState({
                  isLoading: false,
                  insertedId: insertedId
                });

                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](4);
                console.log(_context2.t0);

                _this.setState({
                  isLoading: false
                });

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      modal: false,
      screenshot: "",
      desc: "",
      isLoading: false,
      insertedId: ""
    };
    return _this;
  }

  _createClass(BugReport, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          modal = _this$state2.modal,
          screenshot = _this$state2.screenshot,
          desc = _this$state2.desc,
          isLoading = _this$state2.isLoading,
          insertedId = _this$state2.insertedId;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        className: "bug-icon",
        style: this.props.backgroundstyle,
        type: "button",
        onClick: this.captureScreenShot
      }, /*#__PURE__*/React.createElement("div", {
        className: "customtooltip"
      }, /*#__PURE__*/React.createElement("p", {
        className: "tooltip-text"
      }, "Report a Bug")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        className: "mt-2"
      }, /*#__PURE__*/React.createElement("img", {
        src: Bugimgicon,
        style: this.props.imgstyle
      }))))), isLoading ? /*#__PURE__*/React.createElement(Modals, {
        open: modal,
        onCloseClicked: this.toggle,
        onBackDropClicked: this.toggle
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-5 pt-3 pb-3 mb-5"
      }, /*#__PURE__*/React.createElement(Spinner, {
        text: "Loading..."
      }))) : /*#__PURE__*/React.createElement(Modals, {
        open: modal,
        onCloseClicked: this.toggle,
        onBackDropClicked: this.toggle
      }, insertedId ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
        className: "d-flex justify-content-center"
      }, "Your Problem Ticket No.: ", /*#__PURE__*/React.createElement("b", null, "".concat(insertedId))), /*#__PURE__*/React.createElement("div", {
        className: "d-flex w-100 justify-content-center"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.toggle,
        className: "modal_ok",
        color: "danger"
      }, "Ok"))) : /*#__PURE__*/React.createElement("form", {
        className: "form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("span", null, "Screenshot"), /*#__PURE__*/React.createElement("span", {
        style: {
          float: 'right',
          color: 'grey'
        }
      }, "Date : ", new Date().toLocaleDateString()), /*#__PURE__*/React.createElement("img", {
        src: screenshot,
        alt: "screenshot",
        width: "100%",
        height: "380px",
        className: "rounded"
      }), /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "exampleFormControlTextarea1"
      }, "Description"), /*#__PURE__*/React.createElement("textarea", {
        className: "form-control",
        placeholder: "Describe your issue",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        autoFocus: true,
        rows: "4"
      })), /*#__PURE__*/React.createElement("div", {
        className: "d-flex w-100 justify-content-center"
      }, /*#__PURE__*/React.createElement("button", {
        type: "reset",
        className: "modal_cancel",
        onClick: this.toggle,
        disabled: isLoading
      }, "Cancel"), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "modal_ok",
        color: "danger",
        disabled: isLoading
      }, "Submit")))));
    }
  }]);

  return BugReport;
}(Component);

export default BugReport;