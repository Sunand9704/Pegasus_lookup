import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const orderSummary = [
  { label: "Pending", value: 43 },
  { label: "Processing", value: 29 },
  { label: "Delivered", value: 176 },
];

const orders = [
  {
    id: "A-1945",
    customer: "Arjun Patel",
    date: "Feb 8, 2026",
    total: "$1,248.00",
    payment: "Paid",
    status: "Processing",
  },
  {
    id: "A-1941",
    customer: "Sarah Kim",
    date: "Feb 8, 2026",
    total: "$684.50",
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: "A-1938",
    customer: "Miguel Santos",
    date: "Feb 7, 2026",
    total: "$329.99",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: "A-1934",
    customer: "Lina Rahman",
    date: "Feb 7, 2026",
    total: "$2,104.00",
    payment: "Paid",
    status: "Delivered",
  },
];

const statusVariant = (status: string): "default" | "secondary" | "destructive" => {
  if (status === "Pending") return "destructive";
  if (status === "Delivered" || status === "Shipped") return "default";
  return "secondary";
};

const Orders = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {orderSummary.map((item) => (
          <Card key={item.label} className="glass-card-hover border-glass-border/80">
            <CardHeader className="pb-3">
              <CardDescription>{item.label} Orders</CardDescription>
              <CardTitle className="font-display text-3xl">{item.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="glass-card border-glass-border/80">
        <CardHeader>
          <CardTitle className="font-display text-xl">Order List</CardTitle>
          <CardDescription>Track all order stages from payment to delivery.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-glass-border text-left text-muted-foreground">
                  <th className="px-3 py-3 font-medium">Order ID</th>
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Payment</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-glass-border/60">
                    <td className="px-3 py-4 font-medium text-foreground">{order.id}</td>
                    <td className="px-3 py-4">{order.customer}</td>
                    <td className="px-3 py-4 text-muted-foreground">{order.date}</td>
                    <td className="px-3 py-4">{order.total}</td>
                    <td className="px-3 py-4">
                      <Badge variant={order.payment === "Pending" ? "destructive" : "secondary"}>
                        {order.payment}
                      </Badge>
                    </td>
                    <td className="px-3 py-4">
                      <Badge variant={statusVariant(order.status)}>{order.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Orders;
