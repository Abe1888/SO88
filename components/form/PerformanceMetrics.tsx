import { BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface PerformanceMetricsProps {
	formData: {
		campaignGoals?: string[];
		otherGoal?: string;
		reportingFrequency?: string;
		otherReportingFrequency?: string;
	};
	onDataChange: (data: any) => void;
}

export function PerformanceMetrics({ formData, onDataChange }: PerformanceMetricsProps) {
	const handleChange = (field: string, value: any) => {
		onDataChange({ ...formData, [field]: value });
	};

	const handleGoalChange = (goal: string, checked: boolean) => {
		const currentGoals = formData.campaignGoals || [];
		const newGoals = checked
			? [...currentGoals, goal]
			: currentGoals.filter(g => g !== goal);
		onDataChange({ ...formData, campaignGoals: newGoals });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<BarChart3 className="h-5 w-5" />
					Performance Metrics
				</CardTitle>
				<CardDescription>Track and measure your content marketing success</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="space-y-4">
					<Label>Primary Campaign Goals</Label>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							"Brand Awareness",
							"Lead Generation",
							"Community Engagement",
							"Sales & Conversions",
							"Website Traffic",
						].map((goal) => (
							<div key={goal} className="flex items-center space-x-2">
								<Checkbox 
									id={goal.toLowerCase().replace(/\s+/g, "-")}
									checked={(formData.campaignGoals || []).includes(goal)}
									onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
								/>
								<Label htmlFor={goal.toLowerCase().replace(/\s+/g, "-")} className="text-sm font-normal">
									{goal}
								</Label>
							</div>
						))}
						<div className="flex items-center space-x-2">
							<Checkbox 
								id="other-goal"
								checked={!!formData.otherGoal}
								onCheckedChange={(checked) => {
									if (!checked) {
										handleChange('otherGoal', '');
									}
								}}
							/>
							<Label htmlFor="other-goal" className="text-sm font-normal">
								Other
							</Label>
						</div>
					</div>
					<Input 
						placeholder="Specify goal" 
						className="mt-2"
						value={formData.otherGoal || ""}
						onChange={(e) => handleChange('otherGoal', e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="reporting">Reporting Frequency</Label>
					<Select 
						value={formData.reportingFrequency || ""} 
						onValueChange={(value) => handleChange('reportingFrequency', value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select frequency" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="weekly">Weekly</SelectItem>
							<SelectItem value="biweekly">Bi-weekly</SelectItem>
							<SelectItem value="monthly">Monthly</SelectItem>
							<SelectItem value="quarterly">Quarterly</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
					{formData.reportingFrequency === 'other' && (
						<Input 
							placeholder="Specify reporting frequency"
							className="mt-2"
							value={formData.otherReportingFrequency || ""}
							onChange={(e) => handleChange('otherReportingFrequency', e.target.value)}
						/>
					)}
				</div>
			</CardContent>
		</Card>
	);

}