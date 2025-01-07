import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Phone } from "lucide-react";
import { VendorFormValues } from "@/lib/schemas/vendor-schema";

interface VendorTableRowProps {
  vendor: VendorFormValues;
  visibleColumns: string[];
}

export function VendorTableRow({ vendor, visibleColumns }: VendorTableRowProps) {
  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "high":
        return "bg-orange-500";
      case "critical":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-gray-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <TableRow>
      {visibleColumns.includes("generalInfo") && (
        <TableCell>
          <div className="space-y-1">
            <div className="font-medium">{vendor.name}</div>
            <div className="text-sm text-muted-foreground">ID: {vendor.vendorId}</div>
            <Badge className={getStatusBadgeColor(vendor.status)}>{vendor.status}</Badge>
            <div className="text-sm">{vendor.type}</div>
            {vendor.website && (
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-500 hover:underline"
              >
                <Globe className="mr-1 h-3 w-3" />
                Website
              </a>
            )}
          </div>
        </TableCell>
      )}
      {visibleColumns.includes("contact") && (
        <TableCell>
          <div className="space-y-1">
            <div>{vendor.contactName}</div>
            <a
              href={`mailto:${vendor.contactEmail}`}
              className="flex items-center text-sm text-blue-500 hover:underline"
            >
              <Mail className="mr-1 h-3 w-3" />
              {vendor.contactEmail}
            </a>
            <div className="flex items-center text-sm text-gray-500">
              <Phone className="mr-1 h-3 w-3" />
              {vendor.contactPhone}
            </div>
          </div>
        </TableCell>
      )}
      {/* Add more column conditions based on the schema */}
      {visibleColumns.includes("compliance") && (
        <TableCell>
          <div className="space-y-1">
            <Badge variant={vendor.doraCompliance ? "default" : "destructive"}>
              DORA: {vendor.doraCompliance ? "Compliant" : "Non-Compliant"}
            </Badge>
            <div className="text-sm">
              Classification: {vendor.outsourcingClassification}
            </div>
          </div>
        </TableCell>
      )}
      {visibleColumns.includes("risk") && (
        <TableCell>
          <div className="space-y-1">
            <Badge className={getRiskBadgeColor(vendor.riskLevel)}>
              {vendor.riskLevel.toUpperCase()}
            </Badge>
            <div className="text-sm">
              Financial: {vendor.financialStability}
            </div>
            <div className="text-sm">
              Cyber: {vendor.cybersecurityRating}
            </div>
          </div>
        </TableCell>
      )}
      {visibleColumns.includes("contract") && (
        <TableCell>
          <div className="space-y-1">
            <div className="font-medium">
              {formatCurrency(vendor.contractValue)}
            </div>
            <div className="text-sm">
              Start: {formatDate(vendor.contractStartDate)}
            </div>
            <div className="text-sm">
              End: {formatDate(vendor.contractEndDate)}
            </div>
          </div>
        </TableCell>
      )}
      {visibleColumns.includes("performance") && (
        <TableCell>
          <div className="space-y-1">
            <div className="text-sm">
              Satisfaction: {vendor.satisfactionScore}/5
            </div>
            <div className="text-sm">
              Incidents: {vendor.incidentCount}
            </div>
          </div>
        </TableCell>
      )}
    </TableRow>
  );
}