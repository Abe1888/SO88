import { Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, ChangeEvent } from "react"

interface SocialMediaAccountsProps {
	formData: any;
	onDataChange: (data: any) => void;
	formErrors?: { [key: string]: string };
	initialData?: any;
}

const platforms = [
	{ id: "linkedin", label: "LinkedIn" },
	{ id: "facebook", label: "Facebook" },
	{ id: "instagram", label: "Instagram" },
	{ id: "x", label: "X" },
	{ id: "tiktok", label: "TikTok" },
	{ id: "youtube", label: "YouTube" },
	{ id: "other", label: "Other" },
]

export function SocialMediaAccounts({ formData, onDataChange, formErrors = {}, initialData }: SocialMediaAccountsProps) {
	const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(formData?.platformSelection?.split(',') || []);
	const [otherPlatformValue, setOtherPlatformValue] = useState(formData?.otherPlatform || "");

	const handlePlatformChange = (platformId: string, checked: boolean) => {
		const newPlatforms = checked
			? [...selectedPlatforms, platformId]
			: selectedPlatforms.filter((id) => id !== platformId);
		setSelectedPlatforms(newPlatforms);
		onDataChange({ 
			...formData, 
			platformSelection: newPlatforms.join(','),
			selectedPlatforms: newPlatforms // Add this for better data structure
		});
	};

	return (
		<section className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Share2 className="h-5 w-5" />
						Social Media Accounts
					</CardTitle>
					<CardDescription>Manage your social media presence</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					<div className="space-y-2">
						<Label htmlFor="existingAccounts">Do you have existing social media accounts?</Label>
						<Select
						  defaultValue={formData?.existing_accounts || ""}
						  onValueChange={(value) => onDataChange({ ...formData, existing_accounts: value })}
						>

							<SelectTrigger>
								<SelectValue placeholder="Select an option" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="yes">Yes</SelectItem>
								<SelectItem value="no">No</SelectItem>
								<SelectItem value="na">Not applicable</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="accountDetails">Account Details</Label>
						<Textarea
							id="accountDetails"
							name="accountDetails"
							placeholder="e.g., LinkedIn: your-company, Facebook: your-company"
							onChange={(e) => onDataChange({ 
								...formData, 
								accountDetails: e.target.value,
								accounts: e.target.value // Keep for backward compatibility
							})}
							value={formData?.accountDetails || formData?.accounts || ''}
						/>
					</div>

					<div className="space-y-4">
						<Label>Which platforms do you need new accounts created for?</Label>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{platforms.map((platform) => (
								<div key={platform.id} className="flex items-center space-x-2">
									<Checkbox 
										id={`platform-${platform.id}`} 
										name={`platform-${platform.id}`}
										checked={selectedPlatforms.includes(platform.id)}
										onCheckedChange={(checked) => handlePlatformChange(platform.id, checked as boolean)}

									/>
									<Label htmlFor={`platform-${platform.id}`} className="text-sm font-normal">
										{platform.label}
									</Label>
								</div>
							))}
						</div>
						{selectedPlatforms.includes("other") && (
							<Input 
								placeholder="Specify platform" 
								className="mt-2"
								value={otherPlatformValue}
								onChange={(e) => {
								  setOtherPlatformValue(e.target.value);
								  onDataChange({ ...formData, otherPlatform: e.target.value });
								}}
							/>
						)}
						{formErrors.platforms && (
							<div className="text-red-500 text-sm mt-1">
								{formErrors.platforms}
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</section>
	)
}