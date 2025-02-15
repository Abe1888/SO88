import { useState } from "react"
import { BookOpen, Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface BlogPostFormData {
	blogFrequency: string;
	blogLength: string;
	blogTopics: string[];
	otherTopic: string;
	referenceFiles: FileList | null;
	blogTopicSource: string;
}

interface BlogPostManagementProps {
	formData: BlogPostFormData;
	onDataChange: (data: BlogPostFormData) => void;
}

export function BlogPostManagement({ formData, onDataChange }: BlogPostManagementProps) {
	const handleChange = (field: keyof BlogPostFormData, value: any) => {
		onDataChange({ ...formData, [field]: value });
	};

	const handleTopicChange = (topic: string, checked: boolean) => {
		const newTopics = checked
			? [...(formData.blogTopics || []), topic]
			: (formData.blogTopics || []).filter((t: string) => t !== topic);
		onDataChange({ ...formData, blogTopics: newTopics });
	};



	return (
		<Card>
		  <CardHeader>
			<CardTitle className="flex items-center gap-2">
			  <BookOpen className="h-5 w-5" />
			  Blog Post Management
			</CardTitle>
			<CardDescription>Set your blog posting preferences and content guidelines</CardDescription>
		  </CardHeader>
		  <CardContent className="grid gap-6">
			<div className="grid md:grid-cols-2 gap-4">
			  <div className="space-y-2">
				<Label htmlFor="blog-frequency">Blog Post Frequency</Label>
				<Select value={formData.blogFrequency} onValueChange={(value) => handleChange('blogFrequency', value)}>
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
				<Label htmlFor="blog-length">Preferred Blog Length</Label>
				<Select value={formData.blogLength} onValueChange={(value) => handleChange('blogLength', value)}>
				  <SelectTrigger>
					<SelectValue placeholder="Select length" />
				  </SelectTrigger>
				  <SelectContent>
					<SelectItem value="short">Short (500-800 words)</SelectItem>
					<SelectItem value="medium">Medium (800-1200 words)</SelectItem>
					<SelectItem value="long">Long (1200-2000 words)</SelectItem>
					<SelectItem value="detailed">Detailed (2000+ words)</SelectItem>
				  </SelectContent>
				</Select>
			  </div>
			</div>

			<div className="space-y-4">
			  <Label>Blog Topics</Label>
			  <div className="grid sm:grid-cols-2 gap-4">
				{[
				  "Informational/How-to Guides",
				  "Industry News & Trends",
				  "Case Studies & Success Stories",
				  "Thought Leadership",
				  "Product/Service Updates",
				].map((topic) => (
				  <div key={topic} className="flex items-center space-x-2">
					<Checkbox 
					  id={topic.toLowerCase().replace(/\s+/g, "-")}
					  checked={formData.blogTopics?.includes(topic)}
					  onCheckedChange={(checked: boolean | 'indeterminate') => handleTopicChange(topic, checked === true)}
					/>
					<Label htmlFor={topic.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
					  {topic}
					</Label>
				  </div>
				))}
				<div className="flex items-center space-x-2">
				  <Checkbox 
					id="other-topic"
					checked={formData.otherTopic !== ""}
					onCheckedChange={(checked: boolean | 'indeterminate') => {
					  if (checked === false) {
						onDataChange({ ...formData, otherTopic: "" });
					  }
					}}
				  />
				  <Label htmlFor="other-topic" className="text-sm font-normal">
					Other
				  </Label>
				</div>
			  </div>
			  <Input 
				placeholder="Specify topic" 
				className="mt-2"
				value={formData.otherTopic}
				onChange={(e) => handleChange('otherTopic', e.target.value)}
			  />
			</div>

			<div className="space-y-2">
			  <Label className="flex items-center gap-2">
				<Upload className="h-4 w-4" />
				Reference Materials & Competitor Examples
			  </Label>
			  <Input 
				type="file" 
				multiple 
				accept=".pdf,.doc,.docx,.txt"
				onChange={(e) => handleChange('referenceFiles', e.target.files)}
			  />
			</div>

			<div className="space-y-2">
			  <Label htmlFor="blog-topic-source">Topic Source</Label>
			  <Select value={formData.blogTopicSource} onValueChange={(value) => handleChange('blogTopicSource', value)}>
				<SelectTrigger>
				  <SelectValue placeholder="Select source" />
				</SelectTrigger>
				<SelectContent>
				  <SelectItem value="internal">Internal Team</SelectItem>
				  <SelectItem value="agency">Agency Partner</SelectItem>
				  <SelectItem value="freelance">Freelance Writers</SelectItem>
				  <SelectItem value="mixed">Mixed Sources</SelectItem>
				</SelectContent>
			  </Select>
			</div>
		  </CardContent>
		</Card>
	);
}