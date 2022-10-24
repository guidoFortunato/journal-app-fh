import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layouts/AuthLayout";

const formData = {
  email: "guido@test.com",
  password: "123456",
  displayName: "Guido Fortunato",
};

const formValidations = {
  email: [ (value)=> value.includes('@') , 'El correo debe tener un @'],
  password: [ (value)=> value.length >= 6 , 'El password debe tener mas de 6 letras'],
  displayName: [ (value)=> value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm( formData, formValidations );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
