import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralInfoFields } from "./GeneralInfoFields";
import { ComplianceFields } from "./ComplianceFields";
import { RiskFields } from "./RiskFields";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";
import { Button } from "@/components/ui/button";

interface VendorFormTabsProps {
  form: UseFormReturn<VendorFormValues>;
  onReset: () => void;
}

export function VendorFormTabs({ form, onReset }: VendorFormTabsProps) {
  return (
    <>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger value="compliance">Compliance & Regulatory</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent>
              <GeneralInfoFields form={form} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>Compliance & Regulatory Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ComplianceFields form={form} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <RiskFields form={form} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onReset}>
          Reset
        </Button>
        <Button type="submit">
          Add Vendor
        </Button>
      </div>
    </>
  );
}