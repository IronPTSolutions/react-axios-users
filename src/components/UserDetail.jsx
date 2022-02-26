import axios from "axios";
import React from "react";
import { Navigate, useParams } from "react-router";

export function UserDetailWrapper() {
  const params = useParams();

  return <UserDetail userId={params.id} />;
}

class UserDetail extends React.Component {
  state = {
    user: undefined,
    goToHome: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://crudcrud.com/api/e44bc8a3e27049fe80b9e5ea26021d04/users/${this.props.userId}`
      )
      .then((response) => {
        this.setState({
          user: response.data,
        });
      });
  }

  handleDelete() {
    axios
      .delete(
        `https://crudcrud.com/api/e44bc8a3e27049fe80b9e5ea26021d04/users/${this.props.userId}`
      )
      .then((response) => {
        this.setState({
          goToHome: true,
        });
      });
  }

  render() {
    if (this.state.goToHome) {
      return <Navigate to="/users" />;
    }

    if (this.state.user === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{this.state.user.name}</h5>
          <p class="card-text">{this.state.user.email}</p>
          <button
            class="btn btn-danger"
            onClick={(e) => {
              this.handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default UserDetail;
