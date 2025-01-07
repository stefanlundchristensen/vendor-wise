import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { vendorFormSchema, type VendorFormValues } from "@/lib/schemas/vendor-schema";
import { GeneralInfoFields } from "@/components/vendor/GeneralInfoFields";
import { ComplianceFields } from "@/components/vendor/ComplianceFields";
import { RiskFields } from "@/components/vendor/RiskFields";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AddVendor = () => {
  const { toast } = useToast();

  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      status: "pending",
      type: "Technology",
      dataProcessingAgreement: false,
      doraCompliance: false,
      outsourcingClassification: "Non-Critical",
      hasBCDRPlan: false,
      hasIncidentResponsePlan: false,
      dataPrivacyCompliance: false,
      riskLevel: "low",
      financialStability: "Unknown",
      cybersecurityRating: "Unknown",
      contractValue: 0,
    },
  });

  const onSubmit = (data: VendorFormValues) => {
    console.log("Form submitted:", data);
    
    toast({
      title: "Vendor Added",
      description: `${data.name} has been successfully added to the system.`,
    });
    
    form.reset();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Vendor</h1>
        <p className="text-muted-foreground">
          Enter vendor details using the form below. All fields marked with * are required.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">
              Add Vendor
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddVendor;