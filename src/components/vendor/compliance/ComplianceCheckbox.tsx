import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface ComplianceCheckboxProps {
  form: UseFormReturn<VendorFormValues>;
  name: keyof VendorFormValues;
  label: string;
  description: string;
}

/**
 * ComplianceCheckbox component renders a checkbox field with label and description
 * for compliance-related boolean fields.
 */
export function ComplianceCheckbox({ 
  form, 
  name, 
  label, 
  description 
}: ComplianceCheckboxProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </FormItem>
      )}
    />
  );
}