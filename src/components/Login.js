import React from 'react';
import { auth } from "../utils/firebase-config";

import { Box, Button, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
});

const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: theme.spacing(3)
  },
  buttonBlock: {
    marginTop: theme.spacing(2)
  }
}));

const Login = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, formik.values.email, formik.values.password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Grid container
            style={ { height: window.innerHeight - 50 } }
            alignItems="center"
            justifyContent="center"
      >
        <Grid style={ { width: 600, } } container alignItems="center" justifyContent="center" direction="column">
          <Box>
            <form onSubmit={ formik.handleSubmit }>
              <TextField
                className={ classes.textField }
                id="email"
                name="email"
                label="Email"
                value={ formik.values.email }
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                error={ formik.touched.email && Boolean(formik.errors.email) }
                helperText={ formik.touched.email && formik.errors.email }
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={ formik.values.password }
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                error={ formik.touched.password && Boolean(formik.errors.password) }
                helperText={ formik.touched.password && formik.errors.password }
              />

            </form>
          </Box>
          <Box className={ classes.buttonBlock }>
            <Button color="primary" type="submit" onClick={ login }>
              Login
            </Button>
            <Button color="secondary" type="submit" onClick={ register }>
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;