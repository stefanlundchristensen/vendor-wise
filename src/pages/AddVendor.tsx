import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { vendorFormSchema, type VendorFormValues } from "@/lib/schemas/vendor-schema";
import { VendorFormTabs } from "@/components/vendor/VendorFormTabs";
import { Form } from "@/components/ui/form";

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
          <VendorFormTabs 
            form={form}
            onReset={() => form.reset()}
          />
        </form>
      </Form>
    </div>
  );
};

export default AddVendor;