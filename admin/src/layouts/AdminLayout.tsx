import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  LayoutDashboard,
  Menu,
  PackageSearch,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SidebarItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  hint: string;
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
    hint: "Overview and KPIs",
  },
  {
    label: "Orders",
    to: "/orders",
    icon: ShoppingCart,
    hint: "Sales workflow",
  },
  {
    label: "Users",
    to: "/users",
    icon: Users,
    hint: "Accounts and access",
  },
  {
    label: "Products",
    to: "/products",
    icon: PackageSearch,
    hint: "Catalog and stock",
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
    hint: "System configuration",
  },
];

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const sectionTitle = useMemo(() => {
    const activeItem = sidebarItems.find(
      (item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)
    );
    return activeItem?.label || "Dashboard";
  }, [location.pathname]);

  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(new Date()),
    []
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.15),transparent_35%),radial-gradient(circle_at_90%_90%,hsl(var(--accent)/0.12),transparent_40%)]" />

      <div className="flex min-h-screen">
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm md:hidden"
          />
        )}

        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 border-r border-glass-border bg-sidebar/90 backdrop-blur-xl transition-transform duration-300 md:static md:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between border-b border-glass-border px-6 py-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pegasus</p>
                <h1 className="font-display text-2xl gradient-text">Admin Panel</h1>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="flex-1 space-y-2 px-3 py-5">
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all",
                      isActive
                        ? "border-primary/40 bg-primary/10 text-foreground shadow-[0_0_24px_-12px_hsl(var(--primary)/0.9)]"
                        : "border-transparent text-muted-foreground hover:border-glass-border hover:bg-card/60 hover:text-foreground"
                    )
                  }
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-muted-foreground">
                      {item.hint}
                    </span>
                  </span>
                </NavLink>
              ))}
            </nav>

            <div className="mx-3 mb-4 rounded-xl border border-glass-border bg-card/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
              <p className="mt-1 text-sm font-semibold">Operations Command</p>
              <p className="text-xs text-muted-foreground">All teams synchronized</p>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-glass-border bg-background/70 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="border-glass-border md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-4 w-4" />
                </Button>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Control Center</p>
                  <h2 className="font-display text-2xl">{sectionTitle}</h2>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <div className="rounded-xl border border-glass-border bg-card/60 px-3 py-2 text-right">
                  <p className="text-xs text-muted-foreground">Today</p>
                  <p className="text-sm font-medium">{formattedDate}</p>
                </div>
                <Button className="neon-glow">
                  <Boxes className="h-4 w-4" />
                  Quick Action
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
