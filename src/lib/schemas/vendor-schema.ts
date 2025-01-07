import { z } from "zod";

/**
 * Zod schema for validating vendor form data
 * Defines the structure and validation rules for vendor information
 */
export const vendorFormSchema = z.object({
  // General Information
  /** Vendor's official name - minimum 2 characters */
  name: z.string().min(2, "Name must be at least 2 characters"),
  /** Unique identifier for the vendor */
  vendorId: z.string().min(1, "Vendor ID is required"),
  /** Primary contact person's name */
  contactName: z.string().min(2, "Contact name is required"),
  /** Contact email address with email format validation */
  contactEmail: z.string().email("Invalid email address"),
  /** Contact phone number - minimum 10 digits */
  contactPhone: z.string().min(10, "Phone number is required"),
  /** Physical address of the vendor */
  address: z.string().optional(),
  /** Parent company name if applicable */
  parentCompany: z.string().optional(),
  /** Legal structure of the vendor organization */
  legalStructure: z.enum(["Sole Proprietorship", "Partnership", "LLC", "Corporation", "Other"]),
  /** Location where the vendor is legally registered */
  jurisdictionOfIncorporation: z.string().min(2, "Jurisdiction is required"),
  /** Description of vendor's business and services */
  businessDescription: z.string().min(10, "Business description must be at least 10 characters"),
  /** Vendor's website URL */
  website: z.string().url("Invalid website URL").optional(),
  
  // Regulatory & Compliance
  /** List of regulatory licenses held by the vendor */
  regulatoryLicenses: z.array(z.string()).optional(),
  /** List of compliance certifications */
  complianceCertifications: z.array(z.string()).optional(),
  /** Whether vendor has signed a data processing agreement */
  dataProcessingAgreement: z.boolean(),
  /** List of sub-processors used by the vendor */
  subProcessors: z.array(z.string()).optional(),
  /** Geographic location of data storage */
  dataResidency: z.string(),
  /** Compliance with Digital Operational Resilience Act */
  doraCompliance: z.boolean(),
  /** Classification of outsourcing relationship */
  outsourcingClassification: z.enum(["Critical", "Non-Critical"]),
  /** Presence of Business Continuity/Disaster Recovery plan */
  hasBCDRPlan: z.boolean(),
  /** Presence of Incident Response plan */
  hasIncidentResponsePlan: z.boolean(),
  /** Presence of Information Security policies */
  hasInfoSecPolicies: z.boolean(),
  /** Date of last audit */
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
  /** Overall risk level assessment */
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  /** Plan for mitigating identified risks */
  riskMitigationPlan: z.string().optional(),
  /** Assessment of vendor's financial stability */
  financialStability: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  /** Whether vendor has required insurance coverage */
  insuranceCoverage: z.boolean(),
  /** Assessment of vendor's cybersecurity measures */
  cybersecurityRating: z.enum(["Strong", "Moderate", "Weak", "Unknown"]),
  /** Compliance with data privacy regulations */
  dataPrivacyCompliance: z.boolean(),
  /** Assessment of vendor's market reputation */
  reputationScore: z.enum(["Excellent", "Good", "Fair", "Poor"]).optional(),
  
  // Performance Metrics
  /** Date of most recent performance review */
  lastPerformanceReview: z.string().optional(),
  /** Number of incidents reported */
  incidentCount: z.number().min(0).optional(),
  /** Customer satisfaction score (1-5) */
  satisfactionScore: z.number().min(1).max(5).optional(),
  /** Whether vendor has an improvement plan in place */
  hasImprovementPlan: z.boolean(),
  
  // Status
  /** Current status of the vendor relationship */
  status: z.enum(["active", "inactive", "pending"]),
  /** Type of services provided by the vendor */
  type: z.enum(["Technology", "Financial", "Consulting", "Infrastructure"]),
});

/** Type definition for vendor form values derived from the schema */
export type VendorFormValues = z.infer<typeof vendorFormSchema>;