import { Building2, Home, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

/**
 * Navigation menu items configuration
 * Each item defines a route in the application with its icon and title
 */
const menuItems = [
  { title: "Portfolio Snapshot", icon: Home, url: "/" },
  { title: "Vendors", icon: Building2, url: "/vendors" },
  { title: "Add New Vendor", icon: Plus, url: "/add-vendor" },
];

/**
 * AppSidebar component provides the main navigation sidebar for the application.
 * It includes:
 * - Company branding
 * - Navigation menu with icons
 * - Links to main application routes
 */
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>VendorWise</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}