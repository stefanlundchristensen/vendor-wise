import { Input } from "@/components/ui/input";
import { ColumnSelector } from "@/components/vendor/ColumnSelector";

interface VendorTableHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  columns: { id: string; label: string }[];
  visibleColumns: string[];
  onColumnToggle: (columnId: string) => void;
}

export function VendorTableHeader({
  searchTerm,
  onSearchChange,
  columns,
  visibleColumns,
  onColumnToggle,
}: VendorTableHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-lg font-semibold">Vendor List</div>
      <div className="flex space-x-2">
        <Input
          placeholder="Search vendors..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-[300px]"
        />
        <ColumnSelector
          columns={columns}
          visibleColumns={visibleColumns}
          onColumnToggle={onColumnToggle}
        />
      </div>
    </div>
  );
}