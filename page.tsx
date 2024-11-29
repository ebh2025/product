"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BasicProductInfo from "./components/basic-product-info"
import CoverageDetails from "./components/coverage-details"
import SumInsuredConfig from "./components/sum-insured-config"
import PremiumCalculation from "./components/premium-calculation"
import PolicyTerms from "./components/policy-terms"
import AddOnsAndRiders from "./components/add-ons-and-riders"
import UnderwritingRules from "./components/underwriting-rules"
import ClaimsProcess from "./components/claims-process"
import ReviewAndFinalize from "./components/review-and-finalize"
import Coverages from "./components/coverages"

const steps = [
  { title: "Basic Product Information", component: BasicProductInfo },
  { title: "Coverage Details", component: CoverageDetails },
  { title: "Sum Insured Configuration", component: SumInsuredConfig },
  { title: "Coverages", component: Coverages },
  { title: "Premium Calculation", component: PremiumCalculation },
  { title: "Policy Terms and Conditions", component: PolicyTerms },
  { title: "Add-ons and Riders", component: AddOnsAndRiders },
  { title: "Underwriting Rules", component: UnderwritingRules },
  { title: "Claims Process", component: ClaimsProcess },
  { title: "Review and Finalize", component: ReviewAndFinalize },
]

export default function HealthInsuranceConfigurator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  const CurrentStepComponent = steps[currentStep].component

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (stepData: any) => {
    setFormData({ ...formData, ...stepData })
    handleNext()
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-50">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-2xl">Health Insurance Product Configurator</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`w-full h-2 ${
                    index < currentStep ? "bg-primary" : 
                    index === currentStep ? "bg-primary-light" : "bg-gray-200"
                  } ${index < steps.length - 1 ? "mr-1" : ""}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              {steps.map((step, index) => (
                <span key={index} className={index <= currentStep ? "text-primary font-semibold" : ""}>
                  Step {index + 1}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">{steps[currentStep].title}</h2>
          <CurrentStepComponent onSubmit={handleSubmit} data={formData} />
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-100">
          <Button onClick={handlePrevious} disabled={currentStep === 0} variant="outline">
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={() => console.log("Final submission", formData)}>Submit</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

