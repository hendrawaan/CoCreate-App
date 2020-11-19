import React from 'react';
import './form.css'

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {/* <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div> */}
      <div className="form-group">
        <label className="post-label" htmlFor="post">Input : </label>
        <textarea
          type="textarea"
          className="form-control"
          id="post"
          placeholder="Posting..."
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};
export default Form;
