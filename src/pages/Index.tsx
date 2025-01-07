import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockVendors } from "@/lib/mock-data";
import { Building2, ShieldAlert, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const totalVendors = mockVendors.length;
  const activeVendors = mockVendors.filter((v) => v.status === "active").length;
  const highRiskVendors = mockVendors.filter((v) => v.riskLevel === "high" || v.riskLevel === "critical").length;
  
  // Calculate compliance score based on compliance-related boolean fields
  const calculateComplianceScore = (vendor: typeof mockVendors[0]) => {
    const complianceFields = [
      vendor.dataProcessingAgreement,
      vendor.doraCompliance,
      vendor.hasBCDRPlan,
      vendor.hasIncidentResponsePlan,
      vendor.dataPrivacyCompliance,
    ];
    const trueCount = complianceFields.filter(Boolean).length;
    return Math.round((trueCount / complianceFields.length) * 100);
  };

  const avgComplianceScore = Math.round(
    mockVendors.reduce((acc, vendor) => acc + calculateComplianceScore(vendor), 0) / totalVendors
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to VendorWise - Your vendor management solution.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVendors}</div>
            <p className="text-xs text-muted-foreground">
              {activeVendors} active vendors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Vendors</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highRiskVendors}</div>
            <p className="text-xs text-muted-foreground">
              Requiring immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Compliance Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgComplianceScore}%</div>
            <p className="text-xs text-muted-foreground">
              Across all vendors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Active users this month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;