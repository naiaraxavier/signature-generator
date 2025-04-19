import { Formik, Field, useFormikContext } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { FormValues } from "@/lib/interfaces/form-values";
import { validationSchemaForm } from "@/lib/validation/validation-schema";

// Componente para atualizar valores em tempo real
function AutoSave({
  onValuesChange,
}: {
  onValuesChange: (values: FormValues) => void;
}) {
  const { values } = useFormikContext<FormValues>();

  useEffect(() => {
    onValuesChange(values);
  }, [values, onValuesChange]);

  return null;
}

interface FormComponentProps {
  onValuesChange: (values: FormValues) => void;
}

export const FormComponent = ({ onValuesChange }: FormComponentProps) => {
  const initialValues = {
    fullName: "",
    role: "",
    department: "",
    phone: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchemaForm}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <form className="space-y-2">
            <AutoSave onValuesChange={onValuesChange} />

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Nome Completo <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                id="fullName"
                name="fullName"
                placeholder="Digite seu nome completo"
                className="w-full"
              />
              <p
                className={`text-sm text-left mt-1 transition-all duration-300 h-5 ${
                  errors.fullName && touched.fullName
                    ? "text-red-500 opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.fullName && touched.fullName
                  ? errors.fullName
                  : "\u200E"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                Cargo <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                id="role"
                name="role"
                placeholder="Digite seu cargo"
                className="w-full"
              />
              <p
                className={`text-sm text-left mt-1 transition-all duration-300 h-5 ${
                  errors.role && touched.role
                    ? "text-red-500 opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.role && touched.role ? errors.role : "\u200E"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium">
                Departamento <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                id="department"
                name="department"
                placeholder="Digite seu departamento"
                className="w-full"
              />
              <p
                className={`text-sm text-left mt-1 transition-all duration-300 h-5 ${
                  errors.department && touched.department
                    ? "text-red-500 opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.department && touched.department
                  ? errors.department
                  : "\u200E"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Telefone <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Digite seu telefone (apenas números)"
                className="w-full"
              />
              <p
                className={`text-sm text-left mt-1 transition-all duration-300 h-5 ${
                  errors.phone && touched.phone
                    ? "text-red-500 opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.phone && touched.phone ? errors.phone : "\u200E"}
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
