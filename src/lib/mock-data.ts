import { faker } from "@faker-js/faker";
import { type VendorFormValues } from "./schemas/vendor-schema";

export const generateMockVendor = (): VendorFormValues => {
  const contractValue = Number(faker.finance.amount({ min: 10000, max: 1000000, dec: 0 }));
  const startDate = faker.date.past();
  const endDate = faker.date.future();
  
  return {
    // General Information
    name: faker.company.name(),
    vendorId: faker.string.alphanumeric(8).toUpperCase(),
    contactName: faker.person.fullName(),
    contactEmail: faker.internet.email(),
    contactPhone: faker.phone.number(),
    address: faker.location.streetAddress(),
    parentCompany: faker.company.name(),
    legalStructure: faker.helpers.arrayElement(["LLC", "Corporation", "Partnership", "Sole Proprietorship"]),
    jurisdictionOfIncorporation: faker.location.country(),
    businessDescription: faker.company.catchPhrase(),
    website: faker.internet.url(),
    
    // Regulatory & Compliance
    regulatoryLicenses: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.company.buzzPhrase()),
    complianceCertifications: faker.helpers.arrayElements(['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR'], faker.number.int({ min: 1, max: 3 })),
    dataProcessingAgreement: faker.datatype.boolean(),
    subProcessors: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => faker.company.name()),
    dataResidency: faker.location.country(),
    doraCompliance: faker.datatype.boolean(),
    outsourcingClassification: faker.helpers.arrayElement(["Critical", "Non-Critical"]),
    hasBCDRPlan: faker.datatype.boolean(),
    hasIncidentResponsePlan: faker.datatype.boolean(),
    hasInfoSecPolicies: faker.datatype.boolean(),
    lastAuditDate: faker.date.recent().toISOString(),
    
    // Operational
    servicesProvided: faker.company.catchPhrase(),
    slaDetails: faker.lorem.paragraph(),
    kpiFramework: faker.lorem.paragraph(),
    contractStartDate: startDate.toISOString(),
    contractEndDate: endDate.toISOString(),
    contractValue: contractValue,
    billingFrequency: faker.helpers.arrayElement(["Monthly", "Quarterly", "Annually"]),
    onboardingStatus: faker.helpers.arrayElement(["Not Started", "In Progress", "Completed"]),
    offboardingProcedure: faker.datatype.boolean(),
    
    // Risk Assessment
    riskLevel: faker.helpers.arrayElement(["low", "medium", "high", "critical"]),
    riskMitigationPlan: faker.lorem.paragraph(),
    financialStability: faker.helpers.arrayElement(["Strong", "Moderate", "Weak", "Unknown"]),
    insuranceCoverage: faker.datatype.boolean(),
    cybersecurityRating: faker.helpers.arrayElement(["Strong", "Moderate", "Weak", "Unknown"]),
    dataPrivacyCompliance: faker.datatype.boolean(),
    reputationScore: faker.helpers.arrayElement(["Excellent", "Good", "Fair", "Poor"]),
    
    // Performance Metrics
    lastPerformanceReview: faker.date.recent().toISOString(),
    incidentCount: faker.number.int({ min: 0, max: 10 }),
    satisfactionScore: faker.number.int({ min: 1, max: 5 }),
    hasImprovementPlan: faker.datatype.boolean(),
    
    // Status
    status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
    type: faker.helpers.arrayElement(["Technology", "Financial", "Consulting", "Infrastructure"]),
  };
};

// Generate 10 mock vendors instead of just 5 to have more test data
export const mockVendors = Array.from({ length: 10 }, generateMockVendor);