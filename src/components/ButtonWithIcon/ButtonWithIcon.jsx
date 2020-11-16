import React from "react";
import { Button } from "react-bootstrap";

export const ButtonWithIcon = (props) => (
  <Button
    variant={props.variant}
    block={props.block}
    className="my-3"
    onClick={props.onClick}
  >
    {props.icon}
    {props.label}
  </Button>
);
