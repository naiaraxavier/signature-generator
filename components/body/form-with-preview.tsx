"use client";

// * React and Next
import { useState } from "react";

// * Lib
import { FormValues } from "@/lib/interfaces/form-values";

// * Components
import { FormComponent } from "@/components/body/form-component";
import { PreviewComponent } from "@/components/body/preview-component";

// Component
export const FormWithPreview = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    role: "",
    department: "",
    phone: "",
  });

  const handleValuesChange = (values: FormValues) => {
    setFormValues(values);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-18 items-start">
      <div className="bg-gray-100 dark:bg-[#18181B] p-8 rounded-lg shadow-md w-[320px] md:w-[500px] h-auto">
        <FormComponent onValuesChange={handleValuesChange} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 dark:bg-[#18181B] p-2 rounded-lg shadow-md w-[320px] md:w-[500px] h-[420px]">
          <PreviewComponent values={formValues} />
        </div>

        <div className="bg-[#a49de6] dark:bg-[#7064D7] p-6 rounded-lg shadow-md w-[320px] md:w-[500px] text-left text-sm">
          <h2 className="font-bold">Como usar sua assinatura:</h2>
          <ol className="list-decimal pl-5 space-y-2 text-bas mt-6">
            <li>
              Clique em <strong>&quot;Copiar HTML&quot;</strong> ou{" "}
              <strong>&quot;Baixar HTML&quot;</strong>
            </li>
            <li>Abra seu cliente de email (Gmail, Outlook, etc.)</li>
            <li>Acesse as configurações de assinatura</li>
            <li>Cole o código HTML ou importe o arquivo baixado</li>
            <li>Salve as alterações</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
