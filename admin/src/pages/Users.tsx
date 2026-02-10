import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const userStats = [
  { label: "Total Users", value: "3,912" },
  { label: "New This Week", value: "142" },
  { label: "Admins", value: "18" },
];

const users = [
  { name: "Emma Lawson", email: "emma@pegasus.io", role: "Admin", status: "Active" },
  { name: "Noah Chen", email: "noah@pegasus.io", role: "Manager", status: "Active" },
  { name: "Olivia Martin", email: "olivia@pegasus.io", role: "Support", status: "Idle" },
  { name: "Liam Ortiz", email: "liam@pegasus.io", role: "Analyst", status: "Active" },
  { name: "Ava Walker", email: "ava@pegasus.io", role: "Support", status: "Inactive" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Users = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {userStats.map((item) => (
          <Card key={item.label} className="glass-card-hover border-glass-border/80">
            <CardHeader className="pb-2">
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="font-display text-3xl">{item.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="glass-card border-glass-border/80">
        <CardHeader>
          <CardTitle className="font-display text-xl">Team Members</CardTitle>
          <CardDescription>Manage access and account states for internal users.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {users.map((user) => (
            <div
              key={user.email}
              className="flex flex-col gap-4 rounded-xl border border-glass-border bg-background/30 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                  {initials(user.name)}
                </div>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary">{user.role}</Badge>
                <Badge variant={user.status === "Inactive" ? "destructive" : "default"}>
                  {user.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Users;
