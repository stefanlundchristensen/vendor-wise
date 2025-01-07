import { faker } from "@faker-js/faker";
import { type VendorFormValues } from "./schemas/vendor-schema";

export const generateMockVendor = (): VendorFormValues => ({
  name: faker.company.name(),
  vendorId: faker.string.alphanumeric(8).toUpperCase(),
  status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
  type: faker.helpers.arrayElement(["Technology", "Financial", "Consulting", "Infrastructure"]),
  parentCompany: faker.company.name(),
  legalStructure: faker.helpers.arrayElement(["LLC", "Corporation", "Partnership", "Sole Proprietorship", "Other"]),
  jurisdictionOfIncorporation: faker.location.country(),
  website: faker.internet.url(),
  description: faker.company.catchPhrase(),
  contactName: faker.person.fullName(),
  contactEmail: faker.internet.email(),
  contactPhone: faker.phone.number(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country(),
  riskLevel: faker.helpers.arrayElement(["low", "medium", "high", "critical"]),
  outsourcingClassification: faker.helpers.arrayElement(["Critical", "Important", "Non-Critical"]),
  dataProcessingAgreement: faker.datatype.boolean(),
  doraCompliance: faker.datatype.boolean(),
  hasBCDRPlan: faker.datatype.boolean(),
  hasIncidentResponsePlan: faker.datatype.boolean(),
  dataPrivacyCompliance: faker.datatype.boolean(),
  financialStability: faker.helpers.arrayElement(["Strong", "Moderate", "Weak", "Unknown"]),
  cybersecurityRating: faker.helpers.arrayElement(["Excellent", "Good", "Fair", "Poor", "Unknown"]),
  contractValue: Number(faker.finance.amount({ min: 10000, max: 1000000, dec: 0 })),
});

export const mockVendors = Array.from({ length: 5 }, generateMockVendor);