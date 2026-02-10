import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { label: "Live Products", value: 128 },
  { label: "Low Stock", value: 11 },
  { label: "Draft Items", value: 7 },
];

const products = [
  { name: "Pegasus Core Bundle", sku: "PGB-01", stock: 84, price: "$299", status: "Live" },
  { name: "Analytics Pro Add-on", sku: "ANL-24", stock: 21, price: "$149", status: "Live" },
  { name: "Priority Support Plan", sku: "SUP-04", stock: 9, price: "$79", status: "Low stock" },
  { name: "Enterprise Connector", sku: "ENT-51", stock: 0, price: "$399", status: "Out of stock" },
];

const Products = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.label} className="glass-card-hover border-glass-border/80">
            <CardHeader className="pb-2">
              <CardDescription>{category.label}</CardDescription>
              <CardTitle className="font-display text-3xl">{category.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="glass-card border-glass-border/80">
        <CardHeader>
          <CardTitle className="font-display text-xl">Product Catalog</CardTitle>
          <CardDescription>Inventory and pricing snapshot for all active SKUs.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.sku} className="rounded-xl border border-glass-border bg-background/30 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
                </div>
                <Badge variant={product.status === "Out of stock" ? "destructive" : "secondary"}>
                  {product.status}
                </Badge>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stock: {product.stock}</span>
                <span className="font-semibold text-foreground">{product.price}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Products;
