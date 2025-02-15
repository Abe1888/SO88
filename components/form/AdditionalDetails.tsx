import { Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface AdditionalDetailsProps {
	campaigns: string;
	hasBudget: string;
	budget: string;
	internalResources: string;
	resourceDocuments: File[];
	youtubeLinks: string[];
	compliance: string;
	onDataChange: (data: any) => void;
}

export function AdditionalDetails({ 
	campaigns,
	hasBudget,
	internalResources,
	resourceDocuments,
	youtubeLinks,
	compliance,
	onDataChange 
}: AdditionalDetailsProps) {

	const handleChange = (field: string, value: any) => {
		onDataChange?.({
			campaigns,
			hasBudget,
			internalResources, 
			resourceDocuments,
			youtubeLinks,
			compliance,
			[field]: value
		});
	};


	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Upload className="h-5 w-5" />
					Additional Details
				</CardTitle>
				<CardDescription>Provide additional information and resources for your campaign</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="space-y-2">
					<Label htmlFor="campaigns">Ongoing or upcoming campaigns</Label>
					<Textarea 
						id="campaigns" 
						placeholder="Describe any campaigns to integrate" 
						className="min-h-[100px]"
						value={campaigns}
						onChange={(e) => handleChange('campaigns', e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="budget">Do you have a Social Media Advertising Budget?</Label>
					<RadioGroup 
						value={hasBudget}
						onValueChange={(value) => handleChange('hasBudget', value)}
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="yes" id="budget-yes" />
							<Label htmlFor="budget-yes">Yes</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="no" id="budget-no" />
							<Label htmlFor="budget-no">No</Label>
						</div>
					</RadioGroup>
				</div>

				<div className="space-y-2">
					<Label htmlFor="resources">Internal Resources</Label>
					<Textarea 
						id="resources" 
						placeholder="e.g., graphic designers, copywriters" 
						className="min-h-[100px]"
						value={internalResources}
						onChange={(e) => handleChange('internalResources', e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<Label className="flex items-center gap-2">
						<Upload className="h-4 w-4" />
						Upload Resource Documents
					</Label>
					<div className="border-2 border-dashed rounded-lg p-8">
						<div className="flex flex-col items-center justify-center gap-4 text-center">
							<Upload className="h-8 w-8 text-muted-foreground" />
							<div className="text-sm text-muted-foreground">
								<p>Drag and drop files here, or click to select files</p>
								<p className="text-xs">(Max 20 files, 50MB each)</p>
							</div>
							<Input 
								type="file" 
								multiple 
								className="max-w-xs" 
								accept=".pdf,.doc,.docx,.txt,.jpg,.png,.zip"
								onChange={(e) => {
									const files = Array.from(e.target.files || []);
									handleChange('resourceDocuments', files);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="youtube">YouTube Video Links</Label>
					<Textarea 
						id="youtube" 
						placeholder="Enter YouTube video links (one per line)" 
						className="min-h-[100px]"
						value={youtubeLinks.join('\n')}
						onChange={(e) => {
							const links = e.target.value.split('\n').filter(link => link.trim() !== '');
							handleChange('youtubeLinks', links);
						}}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="compliance">Legal/Regulatory Compliance</Label>
					<Textarea 
						id="compliance" 
						placeholder="Any compliance issues to consider" 
						className="min-h-[100px]"
						value={compliance}
						onChange={(e) => handleChange('compliance', e.target.value)}
					/>
				</div>
			</CardContent>
		</Card>
	);
}