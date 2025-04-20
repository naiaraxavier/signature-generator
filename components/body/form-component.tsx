// * React and Next
import { useEffect } from "react";

//* Lib
import { formatPhone } from "@/lib/format-phone";
import { FormValues } from "@/lib/interfaces/form-values";
import { Formik, Field, useFormikContext, FieldProps } from "formik";
import { validationSchemaForm } from "@/lib/validation/validation-schema";

// * Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useUser } from "@/contexts/user-context";

// * Interface
interface FormComponentProps {
  onValuesChange: (values: FormValues) => void;
}

// Handle auto-saving of form values
const AutoSave = ({
  onValuesChange,
}: {
  onValuesChange: (values: FormValues) => void;
}) => {
  const { values } = useFormikContext<FormValues>();

  useEffect(() => {
    onValuesChange(values);
  }, [values, onValuesChange]);

  return null;
};

// Component
export const FormComponent = ({ onValuesChange }: FormComponentProps) => {
  const { user } = useUser();

  const initialValues = {
    fullName: user?.name || "",
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
                Nome Completo <span className="text-red-400">*</span>
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
                    ? "text-red-400 opacity-100"
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
                Cargo <span className="text-red-400">*</span>
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
                    ? "text-red-400 opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.role && touched.role ? errors.role : "\u200E"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium">
                Departamento <span className="text-red-400">*</span>
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
                    ? "text-red-400 opacity-100"
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
                Telefone <span className="text-red-400">*</span>
              </Label>
              <Field name="phone">
                {({ field, form }: FieldProps) => (
                  <Input
                    {...field}
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000 ou (00) 0000-0000"
                    className="w-full"
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      form.setFieldValue("phone", formatted);
                    }}
                  />
                )}
              </Field>
              <p
                className={`text-sm text-left mt-1 transition-all duration-300 h-5 ${
                  errors.phone && touched.phone
                    ? "text-red-400 opacity-100"
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
