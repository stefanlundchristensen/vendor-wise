import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface ContractFieldsProps {
  form: UseFormReturn<VendorFormValues>;
}

export function ContractFields({ form }: ContractFieldsProps) {
  return (
    <FormField
      control={form.control}
      name="contractValue"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Contract Value</FormLabel>
          <FormControl>
            <Input 
              type="number" 
              placeholder="Enter contract value"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}