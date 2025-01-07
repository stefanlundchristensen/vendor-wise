import { z } from "zod";

const urlSchema = z.string().url("Invalid URL").optional();

export const vendorFormSchema = z.object({
  // General Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  vendorId: z.string().min(1, "Vendor ID is required"),
  parentCompany: z.string().optional(),
  legalStructure: z.enum(["Sole Proprietorship", "Partnership", "LLC", "Corporation", "Other"]),
  jurisdictionOfIncorporation: z.string().min(2, "Jurisdiction is required"),
  businessDescription: z.string().min(10, "Business description must be at least 10 characters"),
  website: z.string().url("Invalid website URL"),
  
  // Contact Information
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Phone number is required"),
  contactAddress: z.string().min(5, "Address is required"),
  
  // Regulatory & Compliance
  regulatoryLicenses: z.array(z.string()).optional(),
  complianceCertifications: z.array(z.string()).optional(),
  dataProcessingAgreement: z.boolean(),
  subProcessors: z.array(z.string()).optional(),
  dataResidency: z.string().min(2, "Data residency information is required"),
  doraCompliance: z.boolean(),
  outsourcingClassification: z.enum(["Critical", "Non-Critical"]),
  hasBCDRPlan: z.boolean(),
  hasIncidentResponsePlan: z.boolean(),
  hasInfoSecPolicies: z.boolean(),
  
  // Operational
  servicesProvided: z.array(z.string()).min(1, "At least one service must be specified"),
  slaDetails: z.string().optional(),
  contractStartDate: z.date(),
  contractEndDate: z.date(),
  pricingDetails: z.string().min(1, "Pricing details are required"),
  billingCycle: z.enum(["Monthly", "Quarterly", "Annually", "Other"]),
  
  // Risk Assessment
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  riskMitigationPlan: z.string().optional(),
  financialStability: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  insuranceCoverage: z.array(z.string()).optional(),
  cybersecurityRating: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  dataPrivacyCompliance: z.boolean(),
  
  // Performance Metrics
  performanceReviewFrequency: z.enum(["Monthly", "Quarterly", "Bi-annually", "Annually"]),
  lastPerformanceReview: z.date().optional(),
  customerSatisfactionScore: z.number().min(0).max(100).optional(),
  
  // Document Links
  vendorProfileDoc: urlSchema,
  legalRegistryDoc: urlSchema,
  complianceCertsDocs: urlSchema,
  contractDoc: urlSchema,
  bcdrPlanDoc: urlSchema,
  riskAssessmentDoc: urlSchema,
});

export type VendorFormValues = z.infer<typeof vendorFormSchema>;