import React, { useEffect, useRef } from "react";
import AttachmentIcon from "mdi-react/AttachmentIcon";
import { v4 as uuid } from "uuid";
import './Modal.css';

function expandTextarea(event) {
  event.target.style.overflow = "hidden";
  event.target.style.height = 0;
  event.target.style.height = event.target.scrollHeight + 8.5 + "px";
}

export default (props) => {
  const {
    label,
    err,
    children,
    icon: Icon,
    description,
    value,
    onFileChange,
    doNotAutoResize,
    ...rest
  } = props;
  const textAreaRef = useRef();

  useEffect(() => {
    if (!doNotAutoResize) {
      textAreaRef.current.style.overflow = "hidden";
      textAreaRef.current.style.height = 0;
      textAreaRef.current.style.height = textAreaRef.current.scrollWidth + 8 + "px";
    }
  }, []);
  const fileId = uuid();

  return (
    <div className="form__form-group text-left" style = {{MarginTop : '2vh'}}>
      {label && <span className="form__form-group-label">{label}</span>}
      <div className="form__form-group-field d-flex align-items-stretch">
        {Icon && (
          <div className="form__form-group-icon">
            <Icon />
          </div>
        )}
        <br />
        <div className="form__form-group-input-wrap">
          <textarea
            onKeyUp={doNotAutoResize ? () => {} : expandTextarea}
            ref={textAreaRef}
            value={value}
            className="textArea"
            {...rest}
            cols= {window.innerWidth/10 > 80 ? 80 : window.innerWidth/10}
          ></textarea>
          {console.log(window.innerWidth)}
          {err && <span className="form__form-group-error">{err}</span>}
        </div>
        {onFileChange && (
          <div className="form__form-group-file h-100">
            <label htmlFor={fileId}>
              <AttachmentIcon />
            </label>
            <input
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={onFileChange}
              id={fileId}
              className="form__form-group-button"
            />
          </div>
        )}
        {children || ""}
      </div>

      {description && (
        <span className="form__form-group-description mt-2">{description}</span>
      )}
    </div>
  );
};
