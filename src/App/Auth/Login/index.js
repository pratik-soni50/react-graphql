import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';

import { isLoggedIn, setToken } from '../../../utils/AuthHelper';

const useStyle = makeStyles({

});

const LOGIN = gql`
query Login($email: String! $password: String!) {
  login(email: $email password: $password)
}
`;

export default function Login({ onAuthUpdate }) {
  const classes = useStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getLogin, { loading, data }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      if (data && data.login) {
        setToken(data.login);
        onAuthUpdate(isLoggedIn());
      }
    }
  });

  const doLogin = (e) => {
    e.preventDefault();
    getLogin({
      variables: { email, password },
    });
  };

  return (
    <form onSubmit={doLogin}>
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>Submit</Button>
    </form>
  )
}
