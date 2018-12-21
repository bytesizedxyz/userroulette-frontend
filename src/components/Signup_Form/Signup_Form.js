import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./style.css";

export default class SignUp_Form extends Component {
  state = {
    fields: {},
    errors: {}
  };

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["email"] = "";
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["bio"] = "";
      fields["link"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your First Name.";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your Last Name.";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const {
      username,
      email,
      firstname,
      lastname,
      bio,
      link
    } = this.state.fields;

    return (
      <div className="ui container">
        <Form method="post" name="Signup_Form" onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.username}</div>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.email}</div>
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.firstname}</div>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.lastname}</div>
          </Form.Field>
          <Form.TextArea
            type="text"
            name="bio"
            value={bio}
            label="Bio"
            placeholder="Bio"
            onChange={this.handleChange}
          />
          <Form.Field>
            <label>Link</label>
            <input
              name="link"
              value={link}
              placeholder="Link"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
