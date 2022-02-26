import axios from "axios";
import React from "react";
import { Navigate } from "react-router";

class UserForm extends React.Component {
  state = {
    toHome: false,
    data: {
      name: "",
      email: "",
    },
    touch: {
      name: false,
      email: false,
    },
    errors: {
      name: true,
      email: true,
    },
  };

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.id]: e.target.value.length < 3,
      },
    });
  }

  handleBlur(e) {
    this.setState({
      touch: {
        ...this.state.touch,
        [e.target.id]: true,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "https://crudcrud.com/api/e44bc8a3e27049fe80b9e5ea26021d04/users",
        this.state.data
      )
      .then((response) => {
        this.setState({ toHome: true });
      });
  }

  render() {
    if (this.state.toHome) {
      return <Navigate to="/users" />;
    }

    const hasErrors = Object.values(this.state.errors).some((x) => x === true);

    return (
      <div className="w-50">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              onChange={(e) => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
              value={this.state.data.name}
              type="text"
              className={`form-control ${
                this.state.touch.name
                  ? this.state.errors.name
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="name"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              onChange={(e) => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
              value={this.state.data.email}
              type="email"
              className={`form-control ${
                this.state.touch.email
                  ? this.state.errors.email
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="email"
            />
          </div>

          <button
            disabled={hasErrors}
            type="submit"
            className="btn btn-primary"
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
