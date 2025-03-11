import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Upload, Info, CheckCircle } from "lucide-react";

interface VerificationStepProps {
  onNext?: () => void;
  onBack?: () => void;
  isComplete?: boolean;
}

const VerificationStep = ({
  onNext = () => {},
  onBack = () => {},
  isComplete = false,
}: VerificationStepProps) => {
  const [idType, setIdType] = useState("drivers_license");
  const [idNumber, setIdNumber] = useState("");
  const [businessType, setBusinessType] = useState("llc");
  const [taxId, setTaxId] = useState("");
  const [idUploaded, setIdUploaded] = useState(false);
  const [businessDocUploaded, setBusinessDocUploaded] = useState(false);

  const handleIdUpload = () => {
    // In a real implementation, this would handle file upload
    setIdUploaded(true);
  };

  const handleBusinessDocUpload = () => {
    // In a real implementation, this would handle file upload
    setBusinessDocUploaded(true);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Identity & Business Verification
        </CardTitle>
        <CardDescription>
          We need to verify your identity and business information to comply
          with financial regulations.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Personal Identification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="id-type">ID Type</Label>
              <Select value={idType} onValueChange={setIdType}>
                <SelectTrigger id="id-type">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drivers_license">
                    Driver's License
                  </SelectItem>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="state_id">State ID</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="id-number">ID Number</Label>
              <Input
                id="id-number"
                placeholder="Enter your ID number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Upload ID Document</h4>
                <p className="text-sm text-gray-500">
                  Please upload a clear photo of your ID
                </p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Make sure all corners are visible and text is readable
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="mt-3">
              {!idUploaded ? (
                <Button onClick={handleIdUpload} className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Upload ID
                </Button>
              ) : (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>ID successfully uploaded</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-lg font-medium">Business Verification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="business-type">Business Type</Label>
              <Select value={businessType} onValueChange={setBusinessType}>
                <SelectTrigger id="business-type">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sole_prop">Sole Proprietorship</SelectItem>
                  <SelectItem value="llc">LLC</SelectItem>
                  <SelectItem value="corporation">Corporation</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tax-id">Tax ID / EIN</Label>
              <Input
                id="tax-id"
                placeholder="Enter your Tax ID or EIN"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
              />
            </div>
          </div>

          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Upload Business Document</h4>
                <p className="text-sm text-gray-500">
                  Please upload your business registration document
                </p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      This could be your Articles of Organization, Business
                      License, or EIN Letter
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="mt-3">
              {!businessDocUploaded ? (
                <Button onClick={handleBusinessDocUpload} className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Upload Document
                </Button>
              ) : (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>Document successfully uploaded</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!idUploaded || !businessDocUploaded || !idNumber || !taxId}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerificationStep;
