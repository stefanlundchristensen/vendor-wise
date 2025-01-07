import { faker } from "@faker-js/faker";

export type Vendor = {
  id: string;
  name: string;
  status: "active" | "inactive" | "pending";
  riskLevel: "low" | "medium" | "high" | "critical";
  type: string;
  country: string;
  contactName: string;
  contactEmail: string;
  contractValue: number;
  contractStart: Date;
  contractEnd: Date;
  complianceScore: number;
  services: string[];
  lastAssessment: Date;
};

export const generateMockVendor = (): Vendor => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
  riskLevel: faker.helpers.arrayElement(["low", "medium", "high", "critical"]),
  type: faker.helpers.arrayElement(["Technology", "Financial", "Consulting", "Infrastructure"]),
  country: faker.location.country(),
  contactName: faker.person.fullName(),
  contactEmail: faker.internet.email(),
  contractValue: Number(faker.finance.amount(10000, 1000000, 2)),
  contractStart: faker.date.past(),
  contractEnd: faker.date.future(),
  complianceScore: faker.number.int({ min: 60, max: 100 }),
  services: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
    faker.helpers.arrayElement([
      "Cloud Services",
      "Data Processing",
      "Security",
      "Consulting",
      "Support",
      "Infrastructure",
    ])
  ),
  lastAssessment: faker.date.recent(),
});

export const generateMockVendors = (count: number): Vendor[] =>
  Array.from({ length: count }, generateMockVendor);

export const mockVendors = generateMockVendors(50);