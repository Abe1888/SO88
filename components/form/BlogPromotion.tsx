import { useState } from "react"
import { Megaphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface BlogPromotionProps {
	promotionChannels: string[];
	socialSnippets: boolean;
	repurposingFormats: string[];
	onDataChange: (data: any) => void;
}

export function BlogPromotion({ 
	promotionChannels, 
	socialSnippets, 
	repurposingFormats, 
	onDataChange 
}: BlogPromotionProps) {
	const [formData, setFormData] = useState({
		promotionChannels: promotionChannels || [],
		socialSnippets: socialSnippets || false,
		repurposingFormats: repurposingFormats || [],
		otherChannel: "",
		otherFormat: ""
	});

	const handleChange = (field: string, value: any) => {
		const newData = { ...formData, [field]: value };
		setFormData(newData);
		onDataChange?.(newData);
	};

	const handleChannelChange = (channel: string, checked: boolean) => {
		const newChannels = checked 
			? [...formData.promotionChannels, channel]
			: formData.promotionChannels.filter(c => c !== channel);
		handleChange('promotionChannels', newChannels);
	};

	const handleFormatChange = (format: string, checked: boolean) => {
		const newFormats = checked 
			? [...formData.repurposingFormats, format]
			: formData.repurposingFormats.filter(f => f !== format);
		handleChange('repurposingFormats', newFormats);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Megaphone className="h-5 w-5" />
					Blog Promotion
				</CardTitle>
				<CardDescription>Define your blog promotion strategy and content distribution</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="space-y-4">
					<Label>Where should we promote new blog posts?</Label>
					<div className="flex flex-wrap gap-4">
						{["Social Media", "Email Newsletter"].map((channel) => (
							<div key={channel} className="flex items-center space-x-2">
								<Checkbox 
									id={channel.toLowerCase().replace(/\s+/g, "-")}
									checked={formData.promotionChannels.includes(channel)}
									onCheckedChange={(checked) => handleChannelChange(channel, checked as boolean)}
								/>
								<Label htmlFor={channel.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
									{channel}
								</Label>
							</div>
						))}
						<div className="flex items-center space-x-2">
							<Checkbox 
								id="other-promotion"
								checked={formData.otherChannel !== ""}
								onCheckedChange={(checked) => !checked && handleChange('otherChannel', '')}
							/>
							<Label htmlFor="other-promotion" className="text-sm font-normal">
								Other
							</Label>
						</div>
					</div>
					<Input 
						placeholder="Specify promotion channel" 
						className="mt-2"
						value={formData.otherChannel}
						onChange={(e) => handleChange('otherChannel', e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="snippets">Create social media snippets/graphics for each post?</Label>
					<Select 
						value={formData.socialSnippets ? "yes" : "no"} 
						onValueChange={(value) => handleChange('socialSnippets', value === "yes")}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="yes">Yes</SelectItem>
							<SelectItem value="no">No</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-4">
					<Label>Content Repurposing</Label>
					<div className="grid sm:grid-cols-2 gap-4">
						{["Infographics", "Short-form videos", "LinkedIn Articles", "Email Campaigns"].map((format) => (
							<div key={format} className="flex items-center space-x-2">
								<Checkbox 
									id={format.toLowerCase().replace(/\s+/g, "-")}
									checked={formData.repurposingFormats.includes(format)}
									onCheckedChange={(checked) => handleFormatChange(format, checked as boolean)}
								/>
								<Label htmlFor={format.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
									{format}
								</Label>
							</div>
						))}
						<div className="flex items-center space-x-2">
							<Checkbox 
								id="other-format"
								checked={formData.otherFormat !== ""}
								onCheckedChange={(checked) => !checked && handleChange('otherFormat', '')}
							/>
							<Label htmlFor="other-format" className="text-sm font-normal">
								Other
							</Label>
						</div>
					</div>
					<Input 
						placeholder="Specify format" 
						className="mt-2"
						value={formData.otherFormat}
						onChange={(e) => handleChange('otherFormat', e.target.value)}
					/>
				</div>
			</CardContent>
		</Card>
	);
}