//* Next and React
import { useRef, useState } from "react";

//* Lib
import { FormValues } from "@/lib/interfaces/form-values";
import { generateSignatureHTML } from "@/lib/signature-html";

// * Icons
import { CodeXml, Copy, Download, Eye } from "lucide-react";

// * Components
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// * Interface
interface PreviewComponentProps {
  values: FormValues;
}

// Component
export const PreviewComponent = ({ values }: PreviewComponentProps) => {
  const [copied, setCopied] = useState(false);

  const signatureHTML = generateSignatureHTML(values);

  const previewRef = useRef<HTMLDivElement>(null);

  // Copy the HTML content to clipboard
  const handleCopy = () => {
    if (previewRef.current) {
      const html = previewRef.current.innerHTML;
      const blob = new Blob([html], { type: "text/html" });
      const data = [new ClipboardItem({ "text/html": blob })];

      navigator.clipboard
        .write(data)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Erro ao copiar como HTML:", err);
        });
    }
  };

  // Download the HTML content as a file
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

        <TabsContent value="preview" className="pt-4 pb-4 flex flex-col gap-6 ">
          <div
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: signatureHTML }}
            className="bg-white p-6 rounded-md shadow max-h-[270px] max-w-full overflow-auto"
          />

          <div className="flex items-center gap-2">
            <Button
              size="lg"
              onClick={handleCopy}
              className="h-12 md:w-[160px]"
            >
              <Copy size={16} />
              {copied ? "Copiado!" : "Copiar HTML"}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleDownload}
              className="h-12 md:w-[160px] cursor-pointer"
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
