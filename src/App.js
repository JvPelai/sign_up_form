import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro validarCPF={validarCPF} handleSubmit={handleSubmit} />
    </Container>
  );
}

function handleSubmit(data) {
  console.log(data);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 digitos." };
  } else {
    return { valid: true, text: "" };
  }
}

export default App;
