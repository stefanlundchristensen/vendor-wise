import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function AccessDeniedAlert() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Add New Vendor</h1>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Access Denied</AlertTitle>
        <AlertDescription>
          Please contact an administrator to add new vendors to the system.
        </AlertDescription>
      </Alert>
    </div>
  );
}