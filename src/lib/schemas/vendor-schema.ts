import { z } from "zod";

export const vendorFormSchema = z.object({
  // General Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  vendorId: z.string().min(1, "Vendor ID is required"),
  parentCompany: z.string().optional(),
  legalStructure: z.enum(["Sole Proprietorship", "Partnership", "LLC", "Corporation", "Other"]),
  jurisdictionOfIncorporation: z.string().min(2, "Jurisdiction is required"),
  businessDescription: z.string().min(10, "Business description must be at least 10 characters"),
  website: z.string().url("Invalid website URL"),
  status: z.enum(["active", "inactive", "pending"]),
  type: z.enum(["Technology", "Financial", "Consulting", "Infrastructure"]),
  
  // Contact Information
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  
  // Contract Information
  contractValue: z.number().min(0, "Contract value must be non-negative"),
  
  // Compliance Fields
  dataProcessingAgreement: z.boolean(),
  doraCompliance: z.boolean(),
  outsourcingClassification: z.enum(["Critical", "Non-Critical"]),
  dataResidency: z.string(),
  hasBCDRPlan: z.boolean(),
  hasIncidentResponsePlan: z.boolean(),
  
  // Risk Fields
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  riskMitigationPlan: z.string().optional(),
  financialStability: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  cybersecurityRating: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  dataPrivacyCompliance: z.boolean(),
});

export type VendorFormValues = z.infer<typeof vendorFormSchema>;