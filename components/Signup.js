import react, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { from } from 'zen-observable';
import { sign } from 'crypto';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class SignupPage extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            return <p>{error.message.replace('GraphQL error: ', '')}</p>;
          }

          return (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({ name: '', email: '', password: '' });
              }}
            >
              <h2>Signup</h2>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign Up</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default SignupPage;
