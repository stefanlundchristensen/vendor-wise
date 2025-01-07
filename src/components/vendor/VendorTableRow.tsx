import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface VendorTableRowProps {
  vendor: VendorFormValues;
  visibleColumns: string[];
}

export function VendorTableRow({ vendor, visibleColumns }: VendorTableRowProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const renderBoolean = (value: boolean) => {
    return value ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />;
  };

  const renderCell = (columnId: string) => {
    switch (columnId) {
      // General Information
      case "name": return <div className="font-medium">{vendor.name}</div>;
      case "vendorId": return vendor.vendorId;
      case "contactName": return vendor.contactName;
      case "contactEmail": return <a href={`mailto:${vendor.contactEmail}`} className="text-blue-500 hover:underline">{vendor.contactEmail}</a>;
      case "contactPhone": return vendor.contactPhone;
      case "address": return vendor.address;
      case "parentCompany": return vendor.parentCompany || "N/A";
      case "legalStructure": return vendor.legalStructure;
      case "jurisdictionOfIncorporation": return vendor.jurisdictionOfIncorporation;
      case "businessDescription": return <div className="max-w-xs truncate">{vendor.businessDescription}</div>;
      case "website": return <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{vendor.website}</a>;
      
      // Regulatory & Compliance
      case "regulatoryLicenses": return vendor.regulatoryLicenses?.join(", ") || "None";
      case "complianceCertifications": return vendor.complianceCertifications?.join(", ") || "None";
      case "dataProcessingAgreement": return renderBoolean(vendor.dataProcessingAgreement);
      case "subProcessors": return vendor.subProcessors?.join(", ") || "None";
      case "dataResidency": return vendor.dataResidency;
      case "doraCompliance": return renderBoolean(vendor.doraCompliance);
      case "outsourcingClassification": return vendor.outsourcingClassification;
      case "hasBCDRPlan": return renderBoolean(vendor.hasBCDRPlan);
      case "hasIncidentResponsePlan": return renderBoolean(vendor.hasIncidentResponsePlan);
      case "hasInfoSecPolicies": return renderBoolean(vendor.hasInfoSecPolicies);
      case "lastAuditDate": return vendor.lastAuditDate ? formatDate(vendor.lastAuditDate) : "N/A";
      
      // Operational
      case "servicesProvided": return <div className="max-w-xs truncate">{vendor.servicesProvided}</div>;
      case "slaDetails": return <div className="max-w-xs truncate">{vendor.slaDetails}</div>;
      case "kpiFramework": return <div className="max-w-xs truncate">{vendor.kpiFramework}</div>;
      case "contractStartDate": return formatDate(vendor.contractStartDate);
      case "contractEndDate": return formatDate(vendor.contractEndDate);
      case "contractValue": return formatCurrency(vendor.contractValue);
      case "billingFrequency": return vendor.billingFrequency;
      case "onboardingStatus": return vendor.onboardingStatus;
      case "offboardingProcedure": return renderBoolean(vendor.offboardingProcedure);
      
      // Risk
      case "riskLevel": return (
        <Badge className={
          vendor.riskLevel === "low" ? "bg-green-500" :
          vendor.riskLevel === "medium" ? "bg-yellow-500" :
          vendor.riskLevel === "high" ? "bg-orange-500" :
          "bg-red-500"
        }>
          {vendor.riskLevel.toUpperCase()}
        </Badge>
      );
      case "riskMitigationPlan": return <div className="max-w-xs truncate">{vendor.riskMitigationPlan}</div>;
      case "financialStability": return vendor.financialStability;
      case "insuranceCoverage": return renderBoolean(vendor.insuranceCoverage);
      case "cybersecurityRating": return vendor.cybersecurityRating;
      case "dataPrivacyCompliance": return renderBoolean(vendor.dataPrivacyCompliance);
      case "reputationScore": return vendor.reputationScore;
      
      // Performance
      case "lastPerformanceReview": return vendor.lastPerformanceReview ? formatDate(vendor.lastPerformanceReview) : "N/A";
      case "incidentCount": return vendor.incidentCount?.toString() || "0";
      case "satisfactionScore": return vendor.satisfactionScore ? `${vendor.satisfactionScore}/5` : "N/A";
      case "hasImprovementPlan": return renderBoolean(vendor.hasImprovementPlan);
      
      default: return "N/A";
    }
  };

  return (
    <TableRow>
      {visibleColumns.map((columnId) => (
        <TableCell key={columnId}>
          {renderCell(columnId)}
        </TableCell>
      ))}
    </TableRow>
  );
}