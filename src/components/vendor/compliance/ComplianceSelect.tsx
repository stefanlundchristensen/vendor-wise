import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface ComplianceSelectProps {
  form: UseFormReturn<VendorFormValues>;
  name: keyof VendorFormValues;
  label: string;
  options: { value: string; label: string; }[];
  placeholder: string;
}

/**
 * ComplianceSelect component renders a select field for compliance-related
 * dropdown selections.
 */
export function ComplianceSelect({ 
  form, 
  name, 
  label, 
  options,
  placeholder 
}: ComplianceSelectProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value as string}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}