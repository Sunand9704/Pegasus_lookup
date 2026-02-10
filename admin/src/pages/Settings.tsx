import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <section className="space-y-6">
      <Card className="glass-card border-glass-border/80">
        <CardHeader>
          <CardTitle className="font-display text-xl">Organization Settings</CardTitle>
          <CardDescription>Update your workspace defaults and communication options.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input id="orgName" defaultValue="Pegasus Works" className="bg-background/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Support Email</Label>
              <Input id="email" defaultValue="support@pegasus.io" className="bg-background/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" defaultValue="UTC-05:00 (EST)" className="bg-background/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Input id="currency" defaultValue="USD" className="bg-background/60" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-glass-border/80">
        <CardHeader>
          <CardTitle className="font-display text-xl">Notifications</CardTitle>
          <CardDescription>Control what the admin team receives in real time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-glass-border bg-background/30 p-4">
            <div>
              <p className="text-sm font-medium">Email alerts for high-priority events</p>
              <p className="text-xs text-muted-foreground">Incidents, payment failures, and shipment issues</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-glass-border bg-background/30 p-4">
            <div>
              <p className="text-sm font-medium">Daily performance digest</p>
              <p className="text-xs text-muted-foreground">Summary of revenue, orders, and user activity</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-glass-border bg-background/30 p-4">
            <div>
              <p className="text-sm font-medium">Product stock threshold warnings</p>
              <p className="text-xs text-muted-foreground">Notification when any SKU drops under minimum stock</p>
            </div>
            <Switch />
          </div>
          <div className="flex justify-end">
            <Button className="neon-glow">Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Settings;
