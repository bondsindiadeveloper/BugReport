import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef } from "react";
import AttachmentIcon from "mdi-react/AttachmentIcon";
import { v4 as uuid } from "uuid";

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
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 8 + "px";
    }
  }, []);
  var fileId = uuid();
  return React.createElement("div", {
    className: "form__form-group text-left",
    style: {
      MarginTop: '2vh'
    }
  }, label && React.createElement("span", {
    className: "form__form-group-label"
  }, label), React.createElement("div", {
    className: "form__form-group-field d-flex align-items-stretch"
  }, Icon && React.createElement("div", {
    className: "form__form-group-icon"
  }, React.createElement(Icon, null)), React.createElement("br", null), React.createElement("div", {
    className: "form__form-group-input-wrap"
  }, React.createElement("textarea", Object.assign({
    onKeyUp: doNotAutoResize ? function () {} : expandTextarea,
    ref: textAreaRef,
    value: value,
    cols: "90"
  }, rest)), err && React.createElement("span", {
    className: "form__form-group-error"
  }, err)), onFileChange && React.createElement("div", {
    className: "form__form-group-file h-100"
  }, React.createElement("label", {
    htmlFor: fileId
  }, React.createElement(AttachmentIcon, null)), React.createElement("input", {
    type: "file",
    accept: "image/x-png,image/gif,image/jpeg",
    onChange: onFileChange,
    id: fileId,
    className: "form__form-group-button"
  })), children || ""), description && React.createElement("span", {
    className: "form__form-group-description mt-2"
  }, description));
});