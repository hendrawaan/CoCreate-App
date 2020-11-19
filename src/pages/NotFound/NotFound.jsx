import React from 'react'
import {
  Button
} from "react-bootstrap";
import { notFoundIlustration } from '../../assets/images'

export function NotFound() {
  return (
    <div className="container mt-5">
      <Button class="btn btn-warning">Go Back</Button>
      <img className="img-fluid" alt="Not found" src={notFoundIlustration} />
    </div>
  )
}
