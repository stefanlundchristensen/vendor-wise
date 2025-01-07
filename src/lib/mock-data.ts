import { faker } from "@faker-js/faker";
import { type VendorFormValues } from "./schemas/vendor-schema";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
};

export const generateMockVendor = (): VendorFormValues => {
  const contractValue = Number(faker.finance.amount({ min: 10000, max: 1000000, dec: 0 }));
  const startDate = faker.date.past();
  const endDate = faker.date.future();
  
  return {
    // General Information
    name: faker.company.name(),
    vendorId: faker.string.alphanumeric(8).toUpperCase(),
    parentCompany: faker.company.name(),
    legalStructure: faker.helpers.arrayElement(["LLC", "Corporation", "Partnership", "Sole Proprietorship", "Other"]),
    jurisdictionOfIncorporation: faker.location.country(),
    businessDescription: faker.company.catchPhrase(),
    website: faker.internet.url(),
    status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
    type: faker.helpers.arrayElement(["Technology", "Financial", "Consulting", "Infrastructure"]),
    
    // Contact Information
    contactName: faker.person.fullName(),
    contactEmail: faker.internet.email(),
    contactPhone: formatPhoneNumber(faker.phone.number()),
    country: faker.location.country(),
    
    // Regulatory & Compliance
    regulatoryLicenses: [faker.company.buzzPhrase()],
    complianceCertifications: ['ISO 27001', 'SOC 2', 'PCI DSS'],
    dataProcessingAgreement: faker.datatype.boolean(),
    subProcessors: [faker.company.name(), faker.company.name()],
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
    billingFrequency: faker.helpers.arrayElement(["Monthly", "Quarterly", "Annually", "Other"]),
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
  };
};

export const mockVendors = Array.from({ length: 5 }, generateMockVendor);