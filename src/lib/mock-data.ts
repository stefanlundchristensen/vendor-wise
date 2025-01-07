import { faker } from "@faker-js/faker";
import { type VendorFormValues } from "./schemas/vendor-schema";

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Helper function to format phone number
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
  
  return {
    name: faker.company.name(),
    vendorId: faker.string.alphanumeric(8).toUpperCase(),
    status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
    type: faker.helpers.arrayElement(["Technology", "Financial", "Consulting", "Infrastructure"]),
    parentCompany: faker.company.name(),
    legalStructure: faker.helpers.arrayElement(["LLC", "Corporation", "Partnership", "Sole Proprietorship", "Other"]),
    jurisdictionOfIncorporation: faker.location.country(),
    website: faker.internet.url(),
    businessDescription: faker.company.catchPhrase(),
    contactName: faker.person.fullName(),
    contactEmail: faker.internet.email(),
    contactPhone: formatPhoneNumber(faker.phone.number()),
    country: faker.location.country(),
    riskLevel: faker.helpers.arrayElement(["low", "medium", "high", "critical"]),
    outsourcingClassification: faker.helpers.arrayElement(["Critical", "Non-Critical"]),
    dataProcessingAgreement: faker.datatype.boolean(),
    doraCompliance: faker.datatype.boolean(),
    hasBCDRPlan: faker.datatype.boolean(),
    hasIncidentResponsePlan: faker.datatype.boolean(),
    dataPrivacyCompliance: faker.datatype.boolean(),
    financialStability: faker.helpers.arrayElement(["Strong", "Moderate", "Weak", "Unknown"]),
    cybersecurityRating: faker.helpers.arrayElement(["Strong", "Moderate", "Weak", "Unknown"]),
    contractValue: contractValue,
    dataResidency: faker.location.country(),
    riskMitigationPlan: faker.lorem.paragraph(),
  };
};

export const mockVendors = Array.from({ length: 5 }, generateMockVendor);