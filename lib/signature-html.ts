import { FormValues } from "@/lib/interfaces/form-values";

export const generateSignatureHTML = (values: FormValues) => {
  return `
    <div
      style="
        font-family: Arial, sans-serif;
        color: #333;
        display: flex;
        border-top: 3px solid #ccc;
        border-bottom: 3px solid #ccc;
        max-width: 800px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        gap: 10px;
      "
    >
      <div
        style="
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background-color: #ccc;
          border-radius: 8px;
        "
      >
        <img
          src="/img/logo-light-header.png"
          alt="Logo da empresa"
          style="width: 120px; border-radius: 8px"
        />
      </div>

      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 12px;
        "
      >
        <div>
          <p style="margin: 0; font-size: 16px; font-weight: bold; color: #333">
            ${values.fullName || "Nome Completo"}
          </p>

          <p style="margin: 2px 0; font-size: 14px; color: #777">
            ${values.role || "Cargo"}
          </p>

          <p style="margin: 2px 0; font-size: 14px; color: #777">
            ${values.department || "Departamento"}
          </p>
          <p style="margin: 2px 0; font-size: 14px; color: #777">
            ${values.phone || "(00) 0000-0000"}
          </p>
          <p style="margin: 2px 0; font-size: 12px; color: #777">
            <a
              href="mailto:contato@suaempresa.com.br"
              style="color: #777"
            >contato@suaempresa.com.br</a>
          </p>
        </div>

        <div
          style="
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
          "
        >
          <a href="https://www.linkedin.com/company/suaempresa" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/16/174/174857.png"
              alt="LinkedIn"
              style="width: 20px; vertical-align: middle;"
            />
          </a>
          <a href="https://www.instagram.com/suaempresa" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/16/174/174855.png"
              alt="Instagram"
              style="width: 20px; vertical-align: middle;"
            />
          </a>
          <a href="https://wa.me/5500000000000" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/16/733/733585.png"
              alt="WhatsApp"
              style="width: 20px; vertical-align: middle;"
            />
          </a>
        </div>
      </div>
    </div>
  `;
};
