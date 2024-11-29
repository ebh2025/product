import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Configurator Dashboard</h1>
      
      {/* Search and Quick Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products" className="pl-8" />
        </div>
        <div className="space-x-2">
          <Button>Create New Product</Button>
          <Button variant="outline">Edit Existing Product</Button>
          <Button variant="outline">Clone Product</Button>
        </div>
      </div>
      
      {/* Product Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Health Insurance Product {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: Individual</p>
              <p>Status: Active</p>
              <p>Created By: John Doe</p>
              <p>IRDAI Code: HI-{1000 + i}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Analytics Section */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold">15</h3>
              <p>Total Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">3</h3>
              <p>Approvals Pending</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">5</h3>
              <p>Recently Updated</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

