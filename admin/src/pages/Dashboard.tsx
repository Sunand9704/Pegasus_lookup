import { ArrowDownRight, ArrowUpRight, CircleCheck, Clock3, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metrics = [
  { label: "Revenue", value: "$84,300", change: "+12.4%", positive: true },
  { label: "Orders", value: "1,248", change: "+8.9%", positive: true },
  { label: "Active Users", value: "3,912", change: "+5.1%", positive: true },
  { label: "Refunds", value: "0.9%", change: "-0.3%", positive: false },
];

const projects = [
  { name: "Checkout Optimization", progress: 78 },
  { name: "Mobile Admin Revamp", progress: 64 },
  { name: "Inventory Forecasting", progress: 42 },
];

const recentActivity = [
  { title: "Order #A-1902 confirmed", meta: "2 min ago", status: "success" },
  { title: "New vendor added by Operations", meta: "14 min ago", status: "success" },
  { title: "Shipment delay warning detected", meta: "31 min ago", status: "warning" },
  { title: "Role update pending approval", meta: "1 hr ago", status: "pending" },
];

const Dashboard = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="glass-card-hover border-glass-border/80">
            <CardHeader className="pb-2">
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle className="text-3xl font-display">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-1 text-sm">
                {metric.positive ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-amber-400" />
                )}
                <span className={metric.positive ? "text-emerald-400" : "text-amber-400"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground">vs last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="glass-card border-glass-border/80 xl:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-xl">Recent Activity</CardTitle>
            <CardDescription>Live operations feed from all admin modules.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="flex items-start justify-between rounded-xl border border-glass-border bg-background/30 px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  {item.status === "success" ? (
                    <CircleCheck className="mt-0.5 h-4 w-4 text-emerald-400" />
                  ) : item.status === "warning" ? (
                    <Clock3 className="mt-0.5 h-4 w-4 text-amber-400" />
                  ) : (
                    <Users className="mt-0.5 h-4 w-4 text-neon-blue" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.meta}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="capitalize">
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card border-glass-border/80">
          <CardHeader>
            <CardTitle className="font-display text-xl">Project Status</CardTitle>
            <CardDescription>Current sprint delivery progress.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium">{project.name}</p>
                  <span className="text-muted-foreground">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
