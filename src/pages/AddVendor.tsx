import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { mockVendors, type Vendor } from "@/lib/mock-data";
import { vendorFormSchema, type VendorFormValues } from "@/lib/schemas/vendor-schema";
import { BasicVendorFields } from "@/components/vendor/BasicVendorFields";
import { ContactFields } from "@/components/vendor/ContactFields";
import { ContractFields } from "@/components/vendor/ContractFields";

const AddVendor = () => {
  const { toast } = useToast();

  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      status: "pending",
      riskLevel: "low",
      services: [],
    },
  });

  const onSubmit = (data: VendorFormValues) => {
    console.log("Form submitted:", data);
    const newVendor: Vendor = {
      ...data,
      id: crypto.randomUUID(),
      contractStart: new Date(),
      contractEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      complianceScore: 100,
      lastAssessment: new Date(),
      services: data.services,
      name: data.name,
      status: data.status,
      type: data.type,
      country: data.country,
      contactName: data.contactName,
      contactEmail: data.contactEmail,
      contractValue: data.contractValue,
    };
    
    mockVendors.push(newVendor);
    
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
        <p className="text-muted-foreground">Enter the vendor details below.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <BasicVendorFields form={form} />
            <ContactFields form={form} />
            <ContractFields form={form} />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Add Vendor
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddVendor;