import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class UsersList extends React.Component {
  state = {
    users: undefined,
  };

  componentDidMount() {
    axios
      .get("https://crudcrud.com/api/e44bc8a3e27049fe80b9e5ea26021d04/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Link to="/users/new" className="btn btn-primary">
          New User
        </Link>

        <hr />

        <div className="w-50">
          {this.state.users !== undefined
            ? this.state.users.map((user) => (
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">{user.name}</h5>
                    <p class="card-text">{user.email}</p>
                    <Link to={`/users/${user._id}`} class="btn btn-primary">
                      User Detail
                    </Link>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    );
  }
}

export default UsersList;
