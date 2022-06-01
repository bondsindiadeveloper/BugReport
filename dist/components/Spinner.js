import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import './Spinner.scss';

var Spinner = /*#__PURE__*/function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spinner).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Spinner, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "login-loading"
      }, /*#__PURE__*/React.createElement("div", {
        className: "spinner-container-small"
      }, /*#__PURE__*/React.createElement("div", {
        className: "demo-3-small"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "spinner-small"
      }, /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null)))), /*#__PURE__*/React.createElement("div", {
        className: "normal-loading-survey-text"
      }, this.props.text));
    }
  }]);

  return Spinner;
}(React.Component);

export default Spinner;