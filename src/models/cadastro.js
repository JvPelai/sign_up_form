function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 digitos." };
  } else {
    return { valid: true, text: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valid: false, text: "Senha deve ter entre 4 e 72 digitos" };
  } else {
    return { valid: true, text: "" };
  }
}

export { validarCPF, validarSenha };
