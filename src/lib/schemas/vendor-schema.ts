import { z } from "zod";

export const vendorFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  status: z.enum(["active", "inactive", "pending"]),
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  type: z.string().min(2, "Type must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  contactEmail: z.string().email("Invalid email address"),
  contractValue: z.number().min(0, "Contract value must be positive"),
  services: z.array(z.string()).min(1, "At least one service is required"),
});

export type VendorFormValues = z.infer<typeof vendorFormSchema>;