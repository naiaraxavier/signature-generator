import { FormValues } from "@/lib/interfaces/form-values";

export const generateSignatureHTML = (values: FormValues) => {
  return `
  <table width="600" cellpadding="0" cellspacing="0" border="0" style="border-top: 3px solid #cccccc; border-bottom: 3px solid #cccccc; font-family: Arial, sans-serif; color: #333333; width: 100%; max-width: 600px;">
      <tr>
        <!-- Logo -->
        <td valign="top" align="center" style="background-color: #fff; padding: 18px; width: 160px; min-width: 160px;">
          <img
            src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Lorem-ipsum-logo-isolated-clipart-PNG.png"
            alt="Logo da empresa"
            width="120"
            style="display: block; border-radius: 8px; width: 120px; height: auto;"
          />
        </td>

        <!-- Informações -->
        <td valign="top" align="left" style="padding: 18px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="text-align: left;">
            <tr>
              <td style="font-size: 16px; font-weight: bold; color: #333333; padding-bottom: 4px;">
                ${values.fullName || "Nome Completo"}
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #777777; padding-bottom: 2px;">
                ${values.role || "Cargo"}
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #777777; padding-bottom: 2px;">
                ${values.department || "Departamento"}
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #777777; padding-bottom: 2px;">
                ${values.phone || "(00) 0000-0000"}
              </td>
            </tr>
            <tr>
              <td style="font-size: 12px; color: #777777; padding-bottom: 10px;">
                <a href="mailto:contato@suaempresa.com.br" style="color: #777777; text-decoration: none;">contato@suaempresa.com.br</a>
              </td>
            </tr>
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 8px;">
                  <tr>
                    <td style="padding-right: 6px;">
                      <a href="https://www.linkedin.com/company/suaempresa" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/16/174/174857.png" alt="LinkedIn" width="20" style="display: block;" />
                      </a>
                    </td>
                    <td style="padding-right: 6px;">
                      <a href="https://www.instagram.com/suaempresa" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/16/174/174855.png" alt="Instagram" width="20" style="display: block;" />
                      </a>
                    </td>
                    <td>
                      <a href="https://wa.me/5500000000000" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/16/733/733585.png" alt="WhatsApp" width="20" style="display: block;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};
