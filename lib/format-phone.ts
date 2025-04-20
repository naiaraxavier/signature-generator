export const formatPhone = (value: string) => {
  // Remove tudo que não for número
  const digits = value.replace(/\D/g, "");

  // Se tiver 11 dígitos, aplicamos a máscara de celular: (00) 00000-0000
  if (digits.length >= 11) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  }

  // Se tiver 10 dígitos, aplicamos a máscara de telefone comercial: (00) 0000-0000
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 14);
};
