import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2 } from "lucide-react";

interface Column {
  /** Unique identifier for the column */
  id: string;
  /** Display label for the column */
  label: string;
}

interface ColumnSelectorProps {
  /** Array of available columns */
  columns: Column[];
  /** Array of currently visible column IDs */
  visibleColumns: string[];
  /** Callback function to toggle column visibility */
  onColumnToggle: (columnId: string) => void;
}

/**
 * ColumnSelector component provides a dropdown menu for users to select which columns
 * they want to display in the vendor table. Features include:
 * - Select/Deselect all columns
 * - Individual column toggles
 * - Persistent column visibility state
 */
export function ColumnSelector({ columns, visibleColumns, onColumnToggle }: ColumnSelectorProps) {
  const handleSelectAll = () => {
    columns.forEach(column => {
      if (!visibleColumns.includes(column.id)) {
        onColumnToggle(column.id);
      }
    });
  };

  const handleDeselectAll = () => {
    columns.forEach(column => {
      if (visibleColumns.includes(column.id)) {
        onColumnToggle(column.id);
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          <Settings2 className="mr-2 h-4 w-4" />
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <div className="flex justify-between px-2 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={handleSelectAll}
          >
            Select All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={handleDeselectAll}
          >
            Deselect All
          </Button>
        </div>
        <DropdownMenuSeparator />
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={visibleColumns.includes(column.id)}
            onCheckedChange={() => onColumnToggle(column.id)}
          >
            {column.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}