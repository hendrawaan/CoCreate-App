import React from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { notFoundIlustration } from '../../assets/images';

/**
 * Author : Muhammad Febriansyah
 * Date   : 19/11/2020
 */
export function NotFound() {
  const history = useHistory();
  return (
    <div className="container m5">
      <Button
        className="btn btn-warning"
        onClick={() => history.goBack()}>Go Back</Button>
      <img
        className="img-fluid"
        alt="Not found"
        src={notFoundIlustration} />
    </div>
  )
}
