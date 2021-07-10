import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro
        handleSubmit={handleSubmit}
        validacoes={{ cpf: validarCPF, senha: validarSenha }}
      />
    </Container>
  );
}

function handleSubmit(data) {
  console.log(data);
}

export default App;
