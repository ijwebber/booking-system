import React from "react";
import "./alert.styles.css";

export function Alert(props) {
  return (
    <div className={"alert-custom mt-3 alert alert-" + props.type}>
      <strong>{props.title}</strong> {props.text}
    </div>
  );
}

export function WarningAlert(props) {
  return <Alert type="danger" title={props.title} text={props.text} />;
}
