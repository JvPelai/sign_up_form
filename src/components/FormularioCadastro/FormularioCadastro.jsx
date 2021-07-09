import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Typography } from "@material-ui/core";
import { useState } from "react";

function FormularioCadastro({ validarCPF }) {
  const [currentFormStep, setCurrentFormStep] = useState(0);

  function onNextStep () {
    setCurrentFormStep(currentFormStep+1);
  }
  function renderCurrentFormStep() {
    switch (currentFormStep) {
      case 0:
        return <DadosUsuario handleSubmit={onNextStep}/>;
      case 1:
        return <DadosPessoais validarCPF={validarCPF} handleSubmit={onNextStep} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro ao carregar formulário</Typography>;
    }
  }

  return <>{renderCurrentFormStep()}</>;
}

//<DadosUsuario />
//<DadosEntrega />

export default FormularioCadastro;
