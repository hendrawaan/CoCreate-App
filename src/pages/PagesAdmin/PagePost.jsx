import React, { Component, Fragment } from "react";
import Post from "../../components/Admin/Post";

export class PagePost extends Component {
  state = {
    res: "",
    data: [0],
    users: []
  };
  componentDidMount() {
    fetch("http://kelompok6.dtstakelompok1.com/api/v1/users")
      .then(response => response.json())
      .then(user => {
        this.setState({
          res: 200,
          data: [user]
        });
        console.log(user);
      });
  }
  render() {
    return (
      <Fragment>
        <p>List Users</p>
        {this.state.data.map(users => {
          return <Post id={users.id} name={users.name} />;
        })}
      </Fragment>
    );
  }
}
