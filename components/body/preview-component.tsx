import { FormValues } from "@/lib/interfaces/form-values";
import { generateSignatureHTML } from "@/lib/signature-html";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PreviewComponentProps {
  values: FormValues;
}

export const PreviewComponent = ({ values }: PreviewComponentProps) => {
  const signatureHTML = generateSignatureHTML(values);

  return (
    <>
      <Tabs defaultValue="preview" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="cursor-pointer">
            Visualização
          </TabsTrigger>
          <TabsTrigger value="html-code" className="cursor-pointer">
            Código HTML
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="pt-4">
          <div
            dangerouslySetInnerHTML={{ __html: signatureHTML }}
            className="bg-white p-6 rounded-md shadow"
          />
        </TabsContent>

        <TabsContent value="html-code" className="pt-4">
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md overflow-x-auto overflow-y-auto text-sm text-left max-h-80">
            <code>{signatureHTML}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </>
  );
};
