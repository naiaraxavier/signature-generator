import * as Yup from "yup";

export const validationSchemaForm = Yup.object().shape({
  fullName: Yup.string()
    .required("Nome completo é obrigatório")
    .min(2, "Nome completo deve ter pelo menos 2 caracteres"),
  role: Yup.string()
    .required("Cargo é obrigatório")
    .min(2, "Cargo deve ter pelo menos 2 caracteres"),
  department: Yup.string()
    .required("Departamento é obrigatório")
    .min(2, "Departamento deve ter pelo menos 2 caracteres"),
  phone: Yup.string()
    .required("Telefone é obrigatório")
    .test(
      "valid-phone",
      "Telefone deve estar no formato (00) 00000-0000 ou (00) 0000-0000",
      (value) => {
        if (!value) return false;
        const mobilePattern = /^\(\d{2}\) \d{5}-\d{4}$/; // Celular
        const landlinePattern = /^\(\d{2}\) \d{4}-\d{4}$/; // Comercial
        return mobilePattern.test(value) || landlinePattern.test(value);
      }
    ),
});
