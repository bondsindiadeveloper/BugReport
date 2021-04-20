import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef } from "react";
import AttachmentIcon from "mdi-react/AttachmentIcon";
import { v4 as uuid } from "uuid";
import './Modal.css';

function expandTextarea(event) {
  event.target.style.overflow = "hidden";
  event.target.style.height = 0;
  event.target.style.height = event.target.scrollHeight + 8.5 + "px";
}

export default (function (props) {
  var label = props.label,
      err = props.err,
      children = props.children,
      Icon = props.icon,
      description = props.description,
      value = props.value,
      onFileChange = props.onFileChange,
      doNotAutoResize = props.doNotAutoResize,
      rest = _objectWithoutProperties(props, ["label", "err", "children", "icon", "description", "value", "onFileChange", "doNotAutoResize"]);

  var textAreaRef = useRef();
  useEffect(function () {
    if (!doNotAutoResize) {
      textAreaRef.current.style.overflow = "hidden";
      textAreaRef.current.style.height = 0;
      textAreaRef.current.style.height = textAreaRef.current.scrollWidth + 8 + "px";
    }
  }, []);
  var fileId = uuid();
  return /*#__PURE__*/React.createElement("div", {
    className: "form__form-group text-left",
    style: {
      MarginTop: '2vh'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "form__form-group-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "form__form-group-field d-flex align-items-stretch"
  }, Icon && /*#__PURE__*/React.createElement("div", {
    className: "form__form-group-icon"
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "form__form-group-input-wrap"
  }, /*#__PURE__*/React.createElement("textarea", Object.assign({
    onKeyUp: doNotAutoResize ? function () {} : expandTextarea,
    ref: textAreaRef,
    value: value,
    className: "textArea"
  }, rest, {
    cols: window.innerWidth / 20
  })), console.log(window.innerWidth), err && /*#__PURE__*/React.createElement("span", {
    className: "form__form-group-error"
  }, err)), onFileChange && /*#__PURE__*/React.createElement("div", {
    className: "form__form-group-file h-100"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fileId
  }, /*#__PURE__*/React.createElement(AttachmentIcon, null)), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/x-png,image/gif,image/jpeg",
    onChange: onFileChange,
    id: fileId,
    className: "form__form-group-button"
  })), children || ""), description && /*#__PURE__*/React.createElement("span", {
    className: "form__form-group-description mt-2"
  }, description));
});