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
  
  // Regulatory & Compliance
  regulatoryLicenses: z.array(z.string()).optional(),
  complianceCertifications: z.array(z.string()).optional(),
  dataProcessingAgreement: z.boolean(),
  subProcessors: z.array(z.string()).optional(),
  dataResidency: z.string(),
  doraCompliance: z.boolean(),
  outsourcingClassification: z.enum(["Critical", "Non-Critical"]),
  hasBCDRPlan: z.boolean(),
  hasIncidentResponsePlan: z.boolean(),
  hasInfoSecPolicies: z.boolean(),
  lastAuditDate: z.string().optional(),
  
  // Operational
  servicesProvided: z.string(),
  slaDetails: z.string().optional(),
  kpiFramework: z.string().optional(),
  contractStartDate: z.string(),
  contractEndDate: z.string(),
  contractValue: z.number().min(0, "Contract value must be non-negative"),
  billingFrequency: z.enum(["Monthly", "Quarterly", "Annually", "Other"]).optional(),
  onboardingStatus: z.enum(["Not Started", "In Progress", "Completed"]).optional(),
  offboardingProcedure: z.boolean(),
  
  // Risk Assessment
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  riskMitigationPlan: z.string().optional(),
  financialStability: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  insuranceCoverage: z.boolean(),
  cybersecurityRating: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  dataPrivacyCompliance: z.boolean(),
  reputationScore: z.enum(["Excellent", "Good", "Fair", "Poor"]).optional(),
  
  // Performance Metrics
  lastPerformanceReview: z.string().optional(),
  incidentCount: z.number().min(0).optional(),
  satisfactionScore: z.number().min(1).max(5).optional(),
  hasImprovementPlan: z.boolean(),
});

export type VendorFormValues = z.infer<typeof vendorFormSchema>;