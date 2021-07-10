import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ handleSubmit, validacoes }) {
  const [currentFormStep, setCurrentFormStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (currentFormStep === formSections.length - 1) {
      handleSubmit(formData);
    }
  });

  const formSections = [
    <DadosUsuario handleSubmit={collectFormData} validacoes={validacoes} />,
    <DadosPessoais validarCPF={validacoes.cpf} handleSubmit={collectFormData} />,
    <DadosEntrega handleSubmit={collectFormData} validacoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  function collectFormData(data) {
    setFormData({ ...formData, ...data });
    onNextStep();
  }
  function onNextStep() {
    setCurrentFormStep(currentFormStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentFormStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formSections[currentFormStep]}
    </>
  );
}

export default FormularioCadastro;
