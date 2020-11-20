import React from "react";
import { Button } from "react-bootstrap";
import { notFoundIlustration } from "../../assets/images";

export function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <img
        className="img-fluid w-50"
        alt="Not found"
        src={notFoundIlustration}
      />
    </div>
  );
}
