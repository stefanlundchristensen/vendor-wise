import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vendors = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vendors</h1>
        <p className="text-muted-foreground">
          Manage and monitor your vendor relationships.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Vendor List</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Coming soon: Configurable columns, filtering, and sorting capabilities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vendors;