import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockVendors } from "@/lib/mock-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Building2, AlertTriangle, Mail, Phone, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ColumnSelector } from "@/components/vendor/ColumnSelector";

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

const columns = [
  { id: "generalInfo", label: "General Info" },
  { id: "contact", label: "Contact" },
  { id: "compliance", label: "Compliance" },
  { id: "risk", label: "Risk Profile" },
  { id: "contract", label: "Contract Details" },
  { id: "performance", label: "Performance" },
];

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.id));

  const handleColumnToggle = (columnId: string) => {
    setVisibleColumns(prev =>
      prev.includes(columnId)
        ? prev.filter(id => id !== columnId)
        : [...prev, columnId]
    );
  };

  const filteredVendors = mockVendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.vendorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.contactEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vendors</h1>
        <p className="text-muted-foreground">
          Manage and monitor your vendor relationships.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockVendors.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Vendors</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockVendors.filter(v => ["high", "critical"].includes(v.riskLevel?.toLowerCase() || "")).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Vendor List</CardTitle>
            <div className="flex space-x-2">
              <Input
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[300px]"
              />
              <ColumnSelector
                columns={columns}
                visibleColumns={visibleColumns}
                onColumnToggle={handleColumnToggle}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  visibleColumns.includes(column.id) && (
                    <TableHead key={column.id}>{column.label}</TableHead>
                  )
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVendors.map((vendor) => (
                <TableRow key={vendor.vendorId}>
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vendors;
