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
import TextArea from "./TextArea";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

var BugReport =
/*#__PURE__*/
function (_Component) {
  _inherits(BugReport, _Component);

  function BugReport(props) {
    var _this;

    _classCallCheck(this, BugReport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BugReport).call(this, props));
    _this.captureScreenShot =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var canvas, base64;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return html2canvas(document.querySelector("body"));

            case 2:
              canvas = _context.sent;
              base64 = canvas.toDataURL("image/jpeg");
              console.log(base64);

              _this.setState({
                screenshot: base64,
                modal: true
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleChange = function (e) {
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

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(e) {
        var entity_id, app_id, _this$state, desc, screenshot, page_id, body, res, insertedId;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("handlesubmit");
                e.preventDefault();
                _context2.prev = 2;
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

                _context2.next = 12;
                return axios.post(_this.props.reportLink, body);

              case 12:
                res = _context2.sent;
                console.log("bug report", res);
                insertedId = res.data.body;

                _this.setState({
                  isLoading: false,
                  insertedId: insertedId
                });

                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);

                _this.setState({
                  isLoading: false
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 18]]);
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
      var _this$state2 = this.state,
          modal = _this$state2.modal,
          screenshot = _this$state2.screenshot,
          desc = _this$state2.desc,
          isLoading = _this$state2.isLoading,
          insertedId = _this$state2.insertedId;
      return React.createElement("div", null, React.createElement("button", {
        className: "bug-icon",
        style: {
          color: "".concat(this.props.color)
        },
        type: "button",
        title: "Report a bug",
        onClick: this.captureScreenShot
      }, React.createElement(BugIcon, {
        style: {
          color: "".concat(this.props.color)
        }
      })), React.createElement(Modals, {
        open: modal,
        onCloseClicked: this.toggle,
        onBackDropClicked: this.toggle
      }, insertedId ? React.createElement("div", null, React.createElement("h5", {
        className: "d-flex justify-content-center"
      }, "Your Problem Ticket No.: ", React.createElement("b", null, "".concat(insertedId))), React.createElement("div", {
        className: "d-flex w-100 justify-content-center"
      }, React.createElement("button", {
        onClick: this.toggle,
        className: "modal_ok",
        color: "danger"
      }, "Ok"))) : React.createElement("form", {
        className: "form",
        onSubmit: this.handleSubmit
      }, React.createElement("span", null, "Screenshot"), React.createElement("span", {
        style: {
          float: 'right',
          color: 'grey'
        }
      }, "Date : ", new Date().toLocaleDateString()), React.createElement("img", {
        src: screenshot,
        alt: "screenshot",
        width: "100%",
        height: "380px",
        className: "rounded"
      }), React.createElement("div", {
        className: "mt-5"
      }), React.createElement(TextArea, {
        doNotAutoResize: true,
        name: "Description",
        rows: "3",
        className: "rounded",
        placeholder: "Describe your issue",
        autoFocus: true,
        label: "Description",
        value: desc,
        onChange: this.handleChange
      }), React.createElement("div", {
        className: "d-flex w-100 justify-content-center"
      }, React.createElement("button", {
        type: "reset",
        className: "modal_cancel",
        onClick: this.toggle,
        disabled: isLoading
      }, "Cancel"), React.createElement("button", {
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