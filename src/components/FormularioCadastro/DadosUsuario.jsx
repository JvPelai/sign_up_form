import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erros, setErros] = useState({
    senha: {
      valid: true,
      text: "",
    },
  });

  const validacoes = useContext(ValidacoesCadastro);
  function validateField(event) {
    const { name, value } = event.target;
    const isValid = validacoes[name](value);
    const newState = { ...erros };
    newState[name] = isValid;
    setErros(newState);
  }

  function canProceed() {
    let proceed = true;
    for (let err in erros) {
      if (!erros[err].valid) {
        proceed = false;
      }
    }
    return proceed;
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canProceed()) {
          handleSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        name="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          if (event.target.value >= 4) {
            validateField(event);
          }
        }}
        onBlur={validateField}
        error={!erros.senha.valid}
        helperText={erros.senha.text}
        id="password"
        label="senha"
        type="password"
        name="senha"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
