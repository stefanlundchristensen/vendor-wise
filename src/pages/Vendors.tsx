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
import { VendorTableHeader } from "@/components/vendor/VendorTableHeader";
import { VendorTableRow } from "@/components/vendor/VendorTableRow";
import { vendorTableColumns } from "@/components/vendor/VendorTableColumns";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="h-screen flex flex-col space-y-4 overflow-hidden p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vendors</h1>
        <p className="text-muted-foreground">
          Manage and monitor your vendor relationships.
        </p>
      </div>

      <VendorTableHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        columns={vendorTableColumns}
        visibleColumns={visibleColumns}
        onColumnToggle={handleColumnToggle}
      />

      <Card className="flex-1 min-h-0">
        <CardContent className="h-full flex flex-col pt-6">
          <div className="flex-1 min-h-0">
            <ScrollArea className="h-full rounded-md border">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {vendorTableColumns.map((column) => (
                        visibleColumns.includes(column.id) && (
                          <TableHead key={column.id} className="whitespace-nowrap">
                            {column.label}
                          </TableHead>
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
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vendors;