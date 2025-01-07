import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface RiskFieldsProps {
  form: UseFormReturn<VendorFormValues>;
}

export function RiskFields({ form }: RiskFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="riskLevel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Risk Level</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="financialStability"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Financial Stability</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select financial stability" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Strong">Strong</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Weak">Weak</SelectItem>
                <SelectItem value="Unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cybersecurityRating"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cybersecurity Rating</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select cybersecurity rating" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Strong">Strong</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Weak">Weak</SelectItem>
                <SelectItem value="Unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dataPrivacyCompliance"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Data Privacy Compliance</FormLabel>
              <p className="text-sm text-muted-foreground">
                Vendor complies with data privacy regulations
              </p>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="riskMitigationPlan"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Risk Mitigation Plan</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe risk mitigation measures" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}