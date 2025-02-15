import { MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface EngagementProps {
	formData: {
		goals: string[];
		metrics: string[];
		responseTime: string;
		communityGuidelines: string;
		tactics: string[];
		crisisManagement: string;
		tools: string[];
		monitoringFrequency: string;
	};
	onDataChange: (data: any) => void;
}

export function Engagement({ formData, onDataChange }: EngagementProps) {
	return (
		<section className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<MessageSquare className="h-5 w-5" />
						Engagement
					</CardTitle>
					<CardDescription>Define your engagement strategy and monitoring approach</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					{/* Engagement Goals */}
					<div className="space-y-2">
						<Label>Engagement Goals</Label>
						<Select 
							value={formData.goals?.[0] || ""}
							onValueChange={(value) => onDataChange({ 
								...formData, 
								goals: [value] 
							})}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select primary goal" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="community-growth">Community Growth</SelectItem>
								<SelectItem value="brand-awareness">Brand Awareness</SelectItem>
								<SelectItem value="customer-support">Customer Support</SelectItem>
								<SelectItem value="lead-generation">Lead Generation</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Engagement Metrics */}
					<div className="space-y-2">
						<Label>Engagement Metrics</Label>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								"Comments",
								"Shares",
								"Likes",
								"Click-through Rate",
								"Reach",
								"Impressions"
							].map((metric) => (
								<div key={metric} className="flex items-center space-x-2">
									<Checkbox 
										id={metric.toLowerCase().replace(/\s+/g, "-")}
										checked={formData.metrics?.includes(metric)}
										onCheckedChange={(checked) => {
											const newMetrics = checked
												? [...(formData.metrics || []), metric]
												: (formData.metrics || []).filter(m => m !== metric);
											onDataChange({ ...formData, metrics: newMetrics });
										}}
									/>
									<Label htmlFor={metric.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
										{metric}
									</Label>
								</div>
							))}
						</div>
					</div>

					{/* Response Time */}
					<div className="space-y-2">
						<Label>Response Time Target</Label>
						<Select 
							value={formData.responseTime || ""}
							onValueChange={(value) => onDataChange({ 
								...formData, 
								responseTime: value 
							})}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select response time" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1-hour">Within 1 Hour</SelectItem>
								<SelectItem value="2-4-hours">2-4 Hours</SelectItem>
								<SelectItem value="24-hours">Within 24 Hours</SelectItem>
								<SelectItem value="48-hours">Within 48 Hours</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Community Guidelines */}
					<div className="space-y-2">
						<Label>Community Guidelines</Label>
						<Input 
							placeholder="Enter community guidelines"
							value={formData.communityGuidelines || ""}
							onChange={(e) => onDataChange({ 
								...formData, 
								communityGuidelines: e.target.value 
							})}
						/>
					</div>

					{/* Engagement Tactics */}
					<div className="space-y-2">
						<Label>Engagement Tactics</Label>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								"Q&A Sessions",
								"Live Streams",
								"Polls",
								"Interactive Stories",
								"Community Challenges",
								"User-Generated Content"
							].map((tactic) => (
								<div key={tactic} className="flex items-center space-x-2">
									<Checkbox 
										id={tactic.toLowerCase().replace(/\s+/g, "-")}
										checked={formData.tactics?.includes(tactic)}
										onCheckedChange={(checked) => {
											const newTactics = checked
												? [...(formData.tactics || []), tactic]
												: (formData.tactics || []).filter(t => t !== tactic);
											onDataChange({ ...formData, tactics: newTactics });
										}}
									/>
									<Label htmlFor={tactic.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
										{tactic}
									</Label>
								</div>
							))}
						</div>
					</div>

					{/* Crisis Management */}
					<div className="space-y-2">
						<Label>Crisis Management Approach</Label>
						<Select 
							value={formData.crisisManagement || ""}
							onValueChange={(value) => onDataChange({ 
								...formData, 
								crisisManagement: value 
							})}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select approach" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="standard">Standard Protocol</SelectItem>
								<SelectItem value="escalation">Escalation Based</SelectItem>
								<SelectItem value="team">Team Managed</SelectItem>
								<SelectItem value="custom">Custom Approach</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Engagement Tools */}
					<div className="space-y-2">
						<Label>Engagement Tools</Label>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								"Hootsuite",
								"Buffer",
								"Sprout Social",
								"Later",
								"Planoly",
								"Custom Tool"
							].map((tool) => (
								<div key={tool} className="flex items-center space-x-2">
									<Checkbox 
										id={tool.toLowerCase().replace(/\s+/g, "-")}
										checked={formData.tools?.includes(tool)}
										onCheckedChange={(checked) => {
											const newTools = checked
												? [...(formData.tools || []), tool]
												: (formData.tools || []).filter(t => t !== tool);
											onDataChange({ ...formData, tools: newTools });
										}}
									/>
									<Label htmlFor={tool.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
										{tool}
									</Label>
								</div>
							))}
						</div>
					</div>

					{/* Monitoring Frequency */}
					<div className="space-y-2">
						<Label>Monitoring Frequency</Label>
						<Select 
							value={formData.monitoringFrequency || ""}
							onValueChange={(value) => onDataChange({ 
								...formData, 
								monitoringFrequency: value 
							})}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select frequency" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="real-time">Real-time</SelectItem>
								<SelectItem value="hourly">Hourly</SelectItem>
								<SelectItem value="daily">Daily</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}