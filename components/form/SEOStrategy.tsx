import { Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface SEOStrategyProps {
	formData: {
		keywordSource?: string;
		seoStyle?: string;
		linkingStrategy?: string;
		metaDescriptions?: boolean;
		competitorAnalysis?: boolean;
	};
	onDataChange: (data: any) => void;
}

export function SEOStrategy({ formData, onDataChange }: SEOStrategyProps) {
	const handleChange = (field: string, value: any) => {
		onDataChange({
			...formData,
			[field]: value
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Search className="h-5 w-5" />
					SEO Strategy
				</CardTitle>
				<CardDescription>Define your SEO approach and keyword strategy</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="space-y-2">
					<Label htmlFor="keyword-source">Keyword Source</Label>
					<Select 
						value={formData.keywordSource || ""} 
						onValueChange={(value) => handleChange('keywordSource', value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="short-tail">Short-tail Keywords</SelectItem>
							<SelectItem value="long-tail">Long-tail Keywords</SelectItem>
							<SelectItem value="mixed">Mixed Approach</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="seo-style">SEO Style</Label>
					<Select 
						value={formData.seoStyle || ""} 
						onValueChange={(value) => handleChange('seoStyle', value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select style" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="aggressive">Aggressive</SelectItem>
							<SelectItem value="moderate">Moderate</SelectItem>
							<SelectItem value="conservative">Conservative</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="linking">Linking Strategy</Label>
					<Select 
						value={formData.linkingStrategy || ""} 
						onValueChange={(value) => handleChange('linkingStrategy', value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select strategy" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="internal">Internal Linking Focus</SelectItem>
							<SelectItem value="external">External Linking Focus</SelectItem>
							<SelectItem value="balanced">Balanced Approach</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-4">
					<div className="flex items-center space-x-2">
						<Checkbox 
							id="meta-descriptions"
							checked={formData.metaDescriptions || false}
							onCheckedChange={(checked) => handleChange('metaDescriptions', checked)}
						/>
						<Label htmlFor="meta-descriptions" className="text-sm font-normal">
							Meta Descriptions & SEO Titles Needed
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox 
							id="competitor-analysis"
							checked={formData.competitorAnalysis || false}
							onCheckedChange={(checked) => handleChange('competitorAnalysis', checked)}
						/>
						<Label htmlFor="competitor-analysis" className="text-sm font-normal">
							Competitor SEO Analysis
						</Label>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}