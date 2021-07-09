import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useState } from "react";

function FormularioCadastro({ validarCPF }) {
  const [currentFormStep, setCurrentFormStep] = useState(0);
  const formSections = [
    <DadosUsuario handleSubmit={onNextStep} />,
    <DadosPessoais validarCPF={validarCPF} handleSubmit={onNextStep} />,
    <DadosEntrega />,
  ];

  function onNextStep() {
    setCurrentFormStep(currentFormStep + 1);
  }

  return <>{formSections[currentFormStep]}</>;
}


export default FormularioCadastro;
