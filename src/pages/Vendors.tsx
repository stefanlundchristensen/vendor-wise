import { Card, CardContent } from "@/components/ui/card";
import { mockVendors } from "@/lib/mock-data";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { VendorMetricsCards } from "@/components/vendor/VendorMetricsCards";
import { VendorTableHeader } from "@/components/vendor/VendorTableHeader";
import { VendorTableRow } from "@/components/vendor/VendorTableRow";
import { vendorTableColumns } from "@/components/vendor/VendorTableColumns";

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(vendorTableColumns.map(col => col.id));

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

      <VendorMetricsCards />

      <Card>
        <CardContent className="pt-6">
          <VendorTableHeader
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            columns={vendorTableColumns}
            visibleColumns={visibleColumns}
            onColumnToggle={handleColumnToggle}
          />
          
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  {vendorTableColumns.map((column) => (
                    visibleColumns.includes(column.id) && (
                      <TableHead key={column.id}>{column.label}</TableHead>
                    )
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVendors.map((vendor) => (
                  <VendorTableRow
                    key={vendor.vendorId}
                    vendor={vendor}
                    visibleColumns={visibleColumns}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vendors;