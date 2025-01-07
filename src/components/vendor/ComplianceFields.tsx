import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";
import { ComplianceCheckbox } from "./compliance/ComplianceCheckbox";
import { ComplianceSelect } from "./compliance/ComplianceSelect";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ComplianceFieldsProps {
  form: UseFormReturn<VendorFormValues>;
}

/**
 * ComplianceFields component manages all compliance-related form fields.
 * Uses smaller, focused components for different field types.
 */
export function ComplianceFields({ form }: ComplianceFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ComplianceCheckbox
        form={form}
        name="dataProcessingAgreement"
        label="Data Processing Agreement"
        description="Vendor has signed a Data Processing Agreement"
      />

      <ComplianceCheckbox
        form={form}
        name="doraCompliance"
        label="DORA Compliance"
        description="Vendor is DORA compliant"
      />

      <ComplianceSelect
        form={form}
        name="outsourcingClassification"
        label="Outsourcing Classification"
        options={[
          { value: "Critical", label: "Critical" },
          { value: "Non-Critical", label: "Non-Critical" },
        ]}
        placeholder="Select classification"
      />

      <FormField
        control={form.control}
        name="dataResidency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Data Residency</FormLabel>
            <FormControl>
              <Input placeholder="Enter data residency details" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <ComplianceCheckbox
        form={form}
        name="hasBCDRPlan"
        label="BC/DR Plan"
        description="Vendor has Business Continuity & Disaster Recovery Plan"
      />

      <ComplianceCheckbox
        form={form}
        name="hasIncidentResponsePlan"
        label="Incident Response Plan"
        description="Vendor has Incident Response Plan"
      />
    </div>
  );
}