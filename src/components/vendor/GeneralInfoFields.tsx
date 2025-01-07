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
import { UseFormReturn } from "react-hook-form";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface GeneralInfoFieldsProps {
  form: UseFormReturn<VendorFormValues>;
}

export function GeneralInfoFields({ form }: GeneralInfoFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vendor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter vendor name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vendorId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vendor ID</FormLabel>
            <FormControl>
              <Input placeholder="Enter vendor ID" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parentCompany"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Parent Company</FormLabel>
            <FormControl>
              <Input placeholder="Enter parent company (if applicable)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="legalStructure"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Legal Structure</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select legal structure" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                <SelectItem value="Partnership">Partnership</SelectItem>
                <SelectItem value="LLC">LLC</SelectItem>
                <SelectItem value="Corporation">Corporation</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="jurisdictionOfIncorporation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Jurisdiction of Incorporation</FormLabel>
            <FormControl>
              <Input placeholder="Enter jurisdiction" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input type="url" placeholder="https://example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessDescription"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Business Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe the vendor's products/services" 
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