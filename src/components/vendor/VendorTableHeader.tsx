import { Input } from "@/components/ui/input";
import { ColumnSelector } from "@/components/vendor/ColumnSelector";

interface VendorTableHeaderProps {
  /** Current search term value */
  searchTerm: string;
  /** Callback function to handle search term changes */
  onSearchChange: (value: string) => void;
  /** Array of available columns */
  columns: { id: string; label: string }[];
  /** Array of currently visible column IDs */
  visibleColumns: string[];
  /** Callback function to toggle column visibility */
  onColumnToggle: (columnId: string) => void;
}

/**
 * VendorTableHeader component provides the header section for the vendor table.
 * Features:
 * - Search input for filtering vendors
 * - Column visibility selector
 * - Title section
 */
export function VendorTableHeader({
  searchTerm,
  onSearchChange,
  columns,
  visibleColumns,
  onColumnToggle,
}: VendorTableHeaderProps) {
  return (
    <div className="flex flex-col space-y-4">
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