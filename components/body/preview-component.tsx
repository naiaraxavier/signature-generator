import { CodeXml, Copy, Download, Eye } from "lucide-react";
import { FormValues } from "@/lib/interfaces/form-values";
import { generateSignatureHTML } from "@/lib/signature-html";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

interface PreviewComponentProps {
  values: FormValues;
}

export const PreviewComponent = ({ values }: PreviewComponentProps) => {
  const [copied, setCopied] = useState(false);

  const signatureHTML = generateSignatureHTML(values);

  const previewRef = useRef<HTMLDivElement>(null);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(signatureHTML).then(() => {
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   });
  // };

  const handleCopy = () => {
    if (previewRef.current) {
      const range = document.createRange();
      range.selectNodeContents(previewRef.current); // Seleciona o conteúdo da div de visualização
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges(); // Remove qualquer seleção anterior
        selection.addRange(range); // Adiciona a nova seleção
        document.execCommand("copy"); // Copia a seleção
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Feedback visual
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([signatureHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "assinatura.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Tabs defaultValue="preview" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="cursor-pointer">
            <Eye />
            Visualização
          </TabsTrigger>
          <TabsTrigger value="html-code" className="cursor-pointer">
            <CodeXml />
            Código HTML
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="pt-4 pb-4 flex flex-col gap-8 ">
          <div
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: signatureHTML }}
            className="bg-white p-6 rounded-md shadow"
          ></div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              // variant="outline"
              onClick={handleCopy}
              className="flex items-center gap-1"
            >
              <Copy size={16} />
              {copied ? "Copiado!" : "Copiar HTML"}
            </Button>
            <Button
              size="sm"
              // variant="outline"
              onClick={handleDownload}
              className="flex items-center gap-1"
            >
              <Download size={16} />
              Baixar HTML
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="html-code" className="pt-4">
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md overflow-x-auto overflow-y-auto text-sm text-left max-h-75">
            <code>{signatureHTML}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </>
  );
};
