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
import { Building2, AlertTriangle } from "lucide-react";

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

// Format currency helper
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const Vendors = () => {
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
          <CardTitle>Vendor List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Contract Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVendors.map((vendor) => (
                <TableRow key={vendor.vendorId}>
                  <TableCell className="font-medium">
                    {vendor.name}
                    {vendor.website && (
                      <a 
                        href={vendor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-500 hover:underline"
                      >
                        {vendor.website}
                      </a>
                    )}
                  </TableCell>
                  <TableCell>{vendor.type}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(vendor.status || "")}>
                      {vendor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRiskBadgeColor(vendor.riskLevel || "")}>
                      {vendor.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>{vendor.contactName}</div>
                    <a 
                      href={`mailto:${vendor.contactEmail}`}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      {vendor.contactEmail}
                    </a>
                    <div className="text-sm text-gray-500">
                      {vendor.contactPhone}
                    </div>
                  </TableCell>
                  <TableCell>
                    {formatCurrency(vendor.contractValue || 0)}
                  </TableCell>
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