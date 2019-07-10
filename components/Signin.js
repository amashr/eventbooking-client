import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            return <p>{error.message.replace('GraphQL error: ', '')}</p>;
          }

          return (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ email: '', password: '' });
              }}
            >
              <h2>Signin</h2>
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
              <button type="submit">Sign In</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default SignIn;
