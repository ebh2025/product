import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProductInformation() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="container mx-auto p-6">
      <div className="bg-background border rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Product Information</h2>
          <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        
        {isExpanded && (
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">
                  Product Name *
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 inline-block ml-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter the official name of the insurance product</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="productName" placeholder="Enter product name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="irdaiCode">IRDAI Code *</Label>
                <Input id="irdaiCode" placeholder="Enter IRDAI code" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productType">Product Type *</Label>
                <Select>
                  <SelectTrigger id="productType">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="family">Family Floater</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="policyTenure">Policy Tenure *</Label>
                <Select>
                  <SelectTrigger id="policyTenure">
                    <SelectValue placeholder="Select policy tenure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Year</SelectItem>
                    <SelectItem value="2">2 Years</SelectItem>
                    <SelectItem value="3">3 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button type="submit">Save and Continue</Button>
          </form>
        )}
      </div>
    </div>
  )
}

