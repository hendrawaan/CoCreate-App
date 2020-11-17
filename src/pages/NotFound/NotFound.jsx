import React from 'react'
import { notFoundIlustration } from '../../assets/images'

export function NotFound() {
  return (
    <div className="container mt-5">
      <img className="img-fluid" alt="Not found" src={notFoundIlustration} />
    </div>
  )
}
