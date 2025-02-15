import { useState } from "react"
import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface ContentStrategyProps {
	formData: any;
	onDataChange: (data: any) => void;
}

export function ContentStrategy({ formData, onDataChange }: ContentStrategyProps) {
	const [selectedContent, setSelectedContent] = useState<string[]>(formData?.contentMix || []);
	const [otherContent, setOtherContent] = useState(formData?.otherContent || "");

	const handleContentChange = (content: string, checked: boolean) => {
		const newContent = checked
			? [...selectedContent, content]
			: selectedContent.filter(c => c !== content);
		setSelectedContent(newContent);
		onDataChange({ ...formData, contentMix: newContent });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<FileText className="h-5 w-5" />
					Content Strategy
				</CardTitle>
				<CardDescription>Plan your content calendar and define your content approach</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="space-y-2">
					<Label htmlFor="content-topics">Content Topics (3-month plan)</Label>
					<Textarea
						id="content-topics"
						placeholder="Example: Month 1: - Post 1: Topic... - Post 2: Topic..."
						className="min-h-[120px]"
						value={formData?.contentTopics || ""}
						onChange={(e) => onDataChange({ ...formData, contentTopics: e.target.value })}
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="posting-frequency">Posting Frequency</Label>
						<Select 
							value={formData?.postingFrequency || ""}
							onValueChange={(value) => onDataChange({ ...formData, postingFrequency: value })}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select frequency" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="daily">Daily</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
								<SelectItem value="biweekly">Bi-weekly</SelectItem>
								<SelectItem value="monthly">Monthly</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="posting-days">Preferred Posting Days</Label>
						<Select 
							value={formData?.postingDays?.[0] || ""}
							onValueChange={(value) => onDataChange({ 
								...formData, 
								postingDays: [value]
							})}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select day" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="monday">Monday</SelectItem>
								<SelectItem value="tuesday">Tuesday</SelectItem>
								<SelectItem value="wednesday">Wednesday</SelectItem>
								<SelectItem value="thursday">Thursday</SelectItem>
								<SelectItem value="friday">Friday</SelectItem>
								<SelectItem value="saturday">Saturday</SelectItem>
								<SelectItem value="sunday">Sunday</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="posting-times">Preferred Posting Times</Label>
					<Input 
						id="posting-times" 
						placeholder="e.g., Monday at 10:00 AM, Wednesday at 2:00 PM"
						value={formData?.postingTimes || ""}
						onChange={(e) => onDataChange({ ...formData, postingTimes: e.target.value })}
					/>
				</div>

				<div className="space-y-4">
					<Label>Content Mix (select all that apply)</Label>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{[
							"Educational Posts",
							"Industry News & Updates",
							"Case Studies & Success Stories",
							"Behind-the-Scenes Content",
							"Promotional Offers & Announcements",
							"User-Generated Content",
							"Video Content",
							"Graphics & Infographics",
							"Blog Article Summaries",
						].map((content) => (
							<div key={content} className="flex items-center space-x-2">
								<Checkbox 
									id={content.toLowerCase().replace(/\s+/g, "-")}
									checked={selectedContent.includes(content)}
									onCheckedChange={(checked) => handleContentChange(content, checked as boolean)}
								/>
								<Label htmlFor={content.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
									{content}
								</Label>
							</div>
						))}
						<div className="flex items-center space-x-2">
							<Checkbox 
								id="other-content"
								checked={otherContent !== ""}
								onCheckedChange={(checked) => !checked && setOtherContent("")}
							/>
							<Label htmlFor="other-content" className="text-sm font-normal">
								Other
							</Label>
						</div>
					</div>
					<Input 
						placeholder="Specify content type" 
						className="mt-2"
						value={otherContent}
						onChange={(e) => {
							setOtherContent(e.target.value);
							onDataChange({ ...formData, otherContent: e.target.value });
						}}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="target-audience">Target Audience</Label>
					<Textarea 
						id="target-audience" 
						placeholder="Demographics, interests, location" 
						className="min-h-[100px]"
						value={formData?.targetAudience || ""}
						onChange={(e) => onDataChange({ ...formData, targetAudience: e.target.value })}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="tone">Tone of Voice</Label>
					<Select
						value={formData?.toneOfVoice || ""}
						onValueChange={(value) => onDataChange({ ...formData, toneOfVoice: value })}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select tone" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="professional">Professional</SelectItem>
							<SelectItem value="casual">Casual</SelectItem>
							<SelectItem value="friendly">Friendly</SelectItem>
							<SelectItem value="authoritative">Authoritative</SelectItem>
							<SelectItem value="technical">Technical</SelectItem>
							<SelectItem value="conversational">Conversational</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardContent>
		</Card>
	)
}

