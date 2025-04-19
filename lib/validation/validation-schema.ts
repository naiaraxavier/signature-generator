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
    .matches(/^[0-9]+$/, "Telefone deve conter apenas números")
    .min(10, "Telefone deve ter pelo menos 10 dígitos"),
});
