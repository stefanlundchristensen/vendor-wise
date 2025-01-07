import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface ComplianceFieldsProps {
  form: UseFormReturn<VendorFormValues>;
}

export function ComplianceFields({ form }: ComplianceFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="dataProcessingAgreement"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Data Processing Agreement</FormLabel>
              <p className="text-sm text-muted-foreground">
                Vendor has signed a Data Processing Agreement
              </p>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="doraCompliance"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>DORA Compliance</FormLabel>
              <p className="text-sm text-muted-foreground">
                Vendor is DORA compliant
              </p>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="outsourcingClassification"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Outsourcing Classification</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select classification" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Non-Critical">Non-Critical</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
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

      <FormField
        control={form.control}
        name="hasBCDRPlan"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>BC/DR Plan</FormLabel>
              <p className="text-sm text-muted-foreground">
                Vendor has Business Continuity & Disaster Recovery Plan
              </p>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasIncidentResponsePlan"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Incident Response Plan</FormLabel>
              <p className="text-sm text-muted-foreground">
                Vendor has Incident Response Plan
              </p>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}