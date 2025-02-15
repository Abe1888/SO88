import { Building2, Mail, Globe, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CompanyInformationProps {
	formData: any;
	onDataChange: (data: any) => void;
	formErrors?: {[key: string]: string};
}

export function CompanyInformation({ formData, onDataChange, formErrors = {} }: CompanyInformationProps) {
	return (
		<section className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Building2 className="h-5 w-5" />
						Company Information
					</CardTitle>
					<CardDescription>Enter your company details and primary contact information</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="companyName">Company Name</Label>
							<Input 
								id="companyName"
								name="companyName"
								placeholder="Enter company name (e.g., Acme Corporation)"
								value={formData?.companyName || ""}
								onChange={(e) => onDataChange({ ...formData, companyName: e.target.value })}
								required
								className={`${formErrors.companyName ? 'border-red-500 bg-red-50' : ''}`}
							/>
							{formErrors.companyName && (
								<div className="text-red-500 text-sm mt-1">
									{formErrors.companyName}
								</div>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="contactName">Contact Name</Label>
							<Input 
								id="contactName"
								name="contactName"
								placeholder="Enter contact person name"
								value={formData?.contactName || ""}
								onChange={(e) => onDataChange({ ...formData, contactName: e.target.value })}
								required
								className={formErrors.contactName ? 'border-red-500' : ''}
							/>
							{formErrors.contactName && (
								<div className="text-red-500 text-sm mt-1">
									{formErrors.contactName}
								</div>
							)}
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="contactNumber" className="flex items-center gap-2">
								<Phone className="h-4 w-4" />
								Contact Number
							</Label>
							<Input 
								id="contactNumber"
								name="contactNumber"
								type="tel"
								placeholder="Enter contact number"
								value={formData?.contactNumber || ""}
								onChange={(e) => onDataChange({ ...formData, contactNumber: e.target.value })}
								className={formErrors.contactNumber ? 'border-red-500' : ''}
							/>
							{formErrors.contactNumber && (
								<div className="text-red-500 text-sm mt-1">
									{formErrors.contactNumber}
								</div>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="email" className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								Email
							</Label>
							<Input 
								id="email"
								name="email"
								type="email"
								placeholder="Enter contact email"
								value={formData?.email || ""}
								onChange={(e) => onDataChange({ ...formData, email: e.target.value })}
								required
								className={formErrors.email ? 'border-red-500' : ''}
							/>
							{formErrors.email && (
								<div className="text-red-500 text-sm mt-1">
									{formErrors.email}
								</div>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="website" className="flex items-center gap-2">
								<Globe className="h-4 w-4" />
								Website
							</Label>
							<Input 
								id="website"
								name="website"
								type="url"
								placeholder="Enter company website URL"
								value={formData?.website || ""}
								onChange={(e) => onDataChange({ ...formData, website: e.target.value })}
								className={formErrors.website ? 'border-red-500' : ''}
							/>
							{formErrors.website && (
								<div className="text-red-500 text-sm mt-1">
									{formErrors.website}
								</div>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
