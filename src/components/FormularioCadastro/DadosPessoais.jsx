import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosPessoais({ handleSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({
    cpf: {
      valid: true,
      text: "",
    },
    nome: {
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

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        onBlur={validateField}
        error={!erros.nome.valid}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validateField}
        error={!erros.cpf.valid}
        helperText={erros.cpf.text}
        id="CPF"
        label="CPF"
        name="cpf"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
