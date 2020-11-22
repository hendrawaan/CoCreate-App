import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingIndicator.css";

export const LoadingIndicator = () => {
  return (
    <div className="loading">
      <Spinner className="loader" animation="border" variant="danger" />
    </div>
  );
}
