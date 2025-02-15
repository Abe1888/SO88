"use client"

import { useEffect, useState } from 'react';
import { 
	Globe, 
	Palette, 
	FileText, 
	Users, 
	BookOpen, 
	Share2, 
	Search, 
	BarChart2,
	Info,
	Eye,
	LucideIcon,
	ClipboardList,
	ArrowDownWideNarrow,
	ChevronUp,
	ChevronDown
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { PageWrapper } from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";



interface FormSubmission {
	id: string;
	companyName: string;
	contactName: string;
	email: string;
	contactNumber: string | null;
	socialMedia: any;
	branding: any;
	contentStrategy: any;
	engagement: any;
	blogPost: any;
	blogPromotion: any;
	seoStrategy: any;
	performanceMetrics: any;
	additionalDetails: any;
	createdAt: string;
}

interface SectionConfig {
	icon: LucideIcon;
	color: string;
}

const SECTION_CONFIGS: Record<string, SectionConfig> = {
	socialMedia: { icon: Globe, color: 'bg-blue-500/10 text-blue-600' },
	branding: { icon: Palette, color: 'bg-purple-500/10 text-purple-600' },
	contentStrategy: { icon: FileText, color: 'bg-green-500/10 text-green-600' },
	engagement: { icon: Users, color: 'bg-orange-500/10 text-orange-600' },
	blogPost: { icon: BookOpen, color: 'bg-pink-500/10 text-pink-600' },
	blogPromotion: { icon: Share2, color: 'bg-indigo-500/10 text-indigo-600' },
	seoStrategy: { icon: Search, color: 'bg-teal-500/10 text-teal-600' },
	performanceMetrics: { icon: BarChart2, color: 'bg-red-500/10 text-red-600' },
	additionalDetails: { icon: Info, color: 'bg-gray-500/10 text-gray-600' }
};




const ethiofleetData = {
	id: "ETH001",
	companyName: "ETHIOFLEET SOLUTION",
	contactName: "Abebe Kebede",
	email: "contact@ethiofleet.com",
	contactNumber: "+251911234567",
	socialMedia: {
		selectedPlatforms: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
		existing_accounts: "Yes",
		accountDetails: "Active on Facebook and LinkedIn, need to improve Twitter and Instagram presence"
	},
	branding: {
		brandColor: "#1E4D2B",
		secondaryColor: "#FFA500",
		primaryFont: "Montserrat",
		secondaryFont: "Open Sans"
	},
	contentStrategy: {
		contentTopics: "Fleet management tips\nVehicle maintenance\nTransportation industry news\nSafety guidelines\nTechnology updates",
		postingFrequency: "3-4 times per week",
		postingTimes: "9:00 AM - 5:00 PM",
		postingDays: ["Monday", "Wednesday", "Friday"],
		contentMix: ["Industry News", "Tips & Guides", "Company Updates", "Client Success Stories"]
	},
	engagement: {
		goals: ["Increase Brand Awareness", "Lead Generation", "Customer Engagement"],
		metrics: ["Engagement Rate", "Click-through Rate", "Conversion Rate"],
		responseTime: "Within 2 hours",
		monitoringFrequency: "Daily",
		communityGuidelines: "Professional and informative communication, prompt response to inquiries"
	},
	blogPost: {
		frequency: "Weekly",
		length: "800-1200 words",
		topics: ["Fleet Management", "Vehicle Maintenance", "Transportation Tech", "Industry Insights"]
	},
	blogPromotion: {
		channels: ["Social Media", "Email Newsletter", "Industry Forums"],
		formats: ["Blog Excerpts", "Infographics", "Video Summaries"],
		socialSnippets: true
	},
	seoStrategy: {
		keywordFocus: ["fleet management ethiopia", "vehicle tracking", "transportation solutions"],
		seoStyle: "Informative and Professional",
		keywordSource: "Industry Research",
		linkBuilding: "Focus on transportation and logistics industry partnerships"
	},
	performanceMetrics: {
		kpis: ["Website Traffic", "Lead Generation", "Social Media Growth"],
		campaignGoals: ["Market Leadership", "Brand Authority", "Customer Acquisition"],
		reportingFrequency: "Monthly"
	},
	additionalDetails: {
		campaigns: "Quarterly promotional campaigns",
		hasBudget: "yes",
		budget: "$2000-3000 monthly",
		internalResources: "Marketing team of 3 members",
		compliance: "Transportation industry regulations",
		marketingGoals: "Establish as leading fleet management solution in Ethiopia",
		resourceUrls: ["https://ethiofleet.com/resources", "https://ethiofleet.com/blog"],
		youtubeLinks: ["https://youtube.com/ethiofleet"]
	},
	createdAt: new Date().toISOString()
};

interface DataSectionProps {

	data: Record<string, any>;
}

const DataSection = ({ data }: DataSectionProps) => {
	const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
	
	const renderValue = (val: any) => {
		if (Array.isArray(val)) {
			return val.join(', ');
		}
		if (typeof val === 'object' && val !== null) {
			return Object.entries(val)
				.map(([k, v]) => `${k}: ${String(v)}`)
				.join(', ');
		}
		return String(val);
	};

	if (!data) return null;

	return (
		<div className="w-full">
			<div className="grid gap-4">
				{Object.entries(data)
					.filter(([key]) => key !== 'companyName' && key !== 'contactName' && key !== 'contactNumber' && key !== 'email' && key !== 'id')
					.map(([key, value]) => {
						const config = SECTION_CONFIGS[key as keyof typeof SECTION_CONFIGS] || {
							icon: Info,
							color: 'bg-gray-500/10 text-gray-600'
						};
						const Icon = config.icon;

						return (
							<motion.div
								key={key}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="bg-white/80 rounded-lg p-4 border border-gray-100/50 hover:border-current/20 hover:bg-white hover:shadow-sm transition-all"
							>
								<div className="flex items-center justify-between mb-3">
									<div className="flex items-center gap-2">
										<div className={`p-1.5 rounded-lg ${config.color} group-hover:bg-opacity-20 transition-colors ring-1 ring-black/5 shadow-sm`}>
											<Icon className="h-4 w-4" />
										</div>
										<span className="text-sm font-semibold">{key.replace(/_/g, ' ')}</span>
									</div>
									<Badge variant="outline" className={`text-xs ${config.color.replace('bg-', 'text-').replace('/10', '')} bg-white/80 shadow-sm`}>
										{Array.isArray(value) ? `${value.length} items` : 
										 typeof value === 'object' && value !== null ? `${Object.keys(value || {}).length} fields` : '1 value'}
									</Badge>
								</div>
								<div className="text-gray-600 space-y-2">
									<div className="relative">
										{Array.isArray(value) ? (
											<div className="flex flex-wrap gap-1.5">
												{(expandedSections[key] ? value : value.slice(0, 6)).map((item: any, index: number) => (
													<Badge 
														key={index} 
														variant="secondary"
														className={`px-2 py-0.5 rounded-full text-xs font-normal ${config.color} hover:bg-opacity-20 transition-colors`}
													>
														{item}
													</Badge>
												))}
												{value.length > 6 && (
													<Button 
														variant="ghost" 
														size="sm" 
														onClick={(e) => {
															e.stopPropagation();
															setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
														}}
														className={`text-xs ${config.color.replace('bg-', 'text-').replace('/10', '')} hover:bg-gray-50 flex items-center gap-1`}
													>
														{expandedSections[key] ? (
															<>
																<ChevronUp className="h-3 w-3" />
																Show less
															</>
														) : (
															<>
																<ChevronDown className="h-3 w-3" />
																+{value.length - 6} more
															</>
														)}
													</Button>
												)}
											</div>
										) : typeof value === 'object' && value !== null ? (
											<div className="grid gap-2">
												{(expandedSections[key] ? Object.entries(value) : Object.entries(value).slice(0, 3)).map(([k, val]) => (
													<motion.div
														key={k}
														initial={{ opacity: 0, y: 5 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.2, ease: "easeOut" }}
														className="bg-white/80 rounded-lg p-2.5 border border-gray-100/50 hover:border-current/20 hover:bg-white hover:shadow-sm transition-all"
													>
														<span className="font-medium text-gray-800 text-xs block mb-1.5 flex items-center gap-1.5">
															<div className="w-1 h-1 rounded-full bg-current opacity-60"></div>
															{k.replace(/_/g, ' ')}
														</span>
														<div className="text-gray-600 text-sm">{renderValue(val)}</div>
													</motion.div>
												))}
												{Object.keys(value).length > 3 && (
													<Button 
														variant="ghost" 
														size="sm" 
														onClick={(e) => {
															e.stopPropagation();
															setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
														}}
														className={`text-xs ${config.color.replace('bg-', 'text-').replace('/10', '')} hover:bg-gray-50 flex items-center gap-1`}
													>
														{expandedSections[key] ? (
															<>
																<ChevronUp className="h-3 w-3" />
																Show less
															</>
														) : (
															<>
																<ChevronDown className="h-3 w-3" />
																View {Object.keys(value).length - 3} more fields
															</>
														)}
													</Button>
												)}
											</div>
										) : (
											<span className="text-gray-700 text-sm">{String(value)}</span>
										)}
									</div>
								</div>
							</motion.div>
						);
					})}
			</div>
		</div>
	);
};









const SubmissionCard = ({ submission }: { submission: FormSubmission }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="bg-white rounded-xl shadow-sm border overflow-hidden"
		>
			{/* Header */}
			<div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
				<div className="flex justify-between items-start">
					<div className="space-y-1">
						<h2 className="text-2xl font-semibold text-primary tracking-tight">{submission.companyName}</h2>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<span className="flex items-center gap-1">
								<span className="font-medium">ID:</span> {submission.id}
							</span>
							<span>•</span>
							<span>{new Date(submission.createdAt).toLocaleDateString()}</span>
						</div>
					</div>
					<Badge variant="outline" className="text-sm">
						Active
					</Badge>
				</div>
			</div>

			{/* Quick Info */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50/50 border-b">
				<div>
					<p className="text-xs text-gray-500 mb-1">Contact</p>
					<p className="text-sm font-medium">{submission.contactName}</p>
				</div>
				<div>
					<p className="text-xs text-gray-500 mb-1">Email</p>
					<p className="text-sm font-medium">{submission.email}</p>
				</div>
				<div>
					<p className="text-xs text-gray-500 mb-1">Phone</p>
					<p className="text-sm font-medium">{submission.contactNumber || 'N/A'}</p>
				</div>
				<div>
					<p className="text-xs text-gray-500 mb-1">Platforms</p>
					<div className="flex flex-wrap gap-1">
						{submission.socialMedia?.selectedPlatforms?.map((platform: string, index: number) => (
							<Badge key={index} variant="secondary" className="text-xs">
								{platform}
							</Badge>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Social Media Details */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Social Media Details
						</h3>
						<div className="space-y-2">
							<p className="text-sm">
								<span className="text-gray-500">Existing Accounts:</span>{' '}
								<span className="font-medium">{submission.socialMedia?.existing_accounts}</span>
							</p>
							{submission.socialMedia?.accountDetails && (
								<div className="text-sm bg-gray-50 p-2 rounded">
									<p className="text-gray-500 mb-1">Account Details:</p>
									<p className="whitespace-pre-line">{submission.socialMedia.accountDetails}</p>
								</div>
							)}
						</div>
					</div>

					{/* Branding */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Branding
						</h3>
						<div className="space-y-2">
							<div className="grid grid-cols-2 gap-2">
								<div>
									<p className="text-gray-500 text-xs">Brand Color</p>
									<div className="flex items-center gap-2 mt-1">
										<div 
											className="w-4 h-4 rounded-full ring-1 ring-inset ring-gray-200"
											style={{ backgroundColor: submission.branding?.brandColor }}
										/>
										<span className="text-sm">{submission.branding?.brandColor}</span>
									</div>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Secondary Color</p>
									<div className="flex items-center gap-2 mt-1">
										<div 
											className="w-4 h-4 rounded-full ring-1 ring-inset ring-gray-200"
											style={{ backgroundColor: submission.branding?.secondaryColor }}
										/>
										<span className="text-sm">{submission.branding?.secondaryColor}</span>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div>
									<p className="text-gray-500 text-xs">Primary Font</p>
									<p className="font-medium">{submission.branding?.primaryFont}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Secondary Font</p>
									<p className="font-medium">{submission.branding?.secondaryFont}</p>
								</div>
							</div>
						</div>
					</div>

					{/* Content Strategy */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Content Strategy
						</h3>
						<div className="space-y-2">
							<div className="text-sm">
								<p className="text-gray-500 text-xs mb-1">Content Topics</p>
								<div className="bg-gray-50 p-2 rounded whitespace-pre-line">
									{submission.contentStrategy?.contentTopics}
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div>
									<p className="text-gray-500 text-xs">Frequency</p>
									<p className="font-medium">{submission.contentStrategy?.postingFrequency}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Posting Times</p>
									<p className="font-medium">{submission.contentStrategy?.postingTimes}</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Posting Days</p>
								<div className="flex flex-wrap gap-1">
									{submission.contentStrategy?.postingDays?.map((day: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs capitalize">
											{day}
										</Badge>
									))}
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Content Mix</p>
								<div className="flex flex-wrap gap-1">
									{submission.contentStrategy?.contentMix?.map((mix: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{mix}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Engagement */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Engagement
						</h3>
						<div className="space-y-2">
							<div>
								<p className="text-gray-500 text-xs mb-1">Goals</p>
								<div className="flex flex-wrap gap-1">
									{submission.engagement?.goals?.map((goal: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{goal}
										</Badge>
									))}
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Metrics</p>
								<div className="flex flex-wrap gap-1">
									{submission.engagement?.metrics?.map((metric: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{metric}
										</Badge>
									))}
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div>
									<p className="text-gray-500 text-xs">Response Time</p>
									<p className="font-medium">{submission.engagement?.responseTime}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Monitoring</p>
									<p className="font-medium">{submission.engagement?.monitoringFrequency}</p>
								</div>
							</div>
							<div className="text-sm">
								<p className="text-gray-500 text-xs">Community Guidelines</p>
								<p className="mt-1">{submission.engagement?.communityGuidelines}</p>
							</div>
						</div>
					</div>

					{/* Blog Management */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Blog Management
						</h3>
						<div className="space-y-2">
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div>
									<p className="text-gray-500 text-xs">Frequency</p>
									<p className="font-medium">{submission.blogPost?.frequency}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Length</p>
									<p className="font-medium">{submission.blogPost?.length}</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Topics</p>
								<div className="flex flex-wrap gap-1">
									{submission.blogPost?.topics?.map((topic: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{topic}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Blog Promotion */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Blog Promotion
						</h3>
						<div className="space-y-2">
							<div>
								<p className="text-gray-500 text-xs mb-1">Channels</p>
								<div className="flex flex-wrap gap-1">
									{submission.blogPromotion?.channels?.map((channel: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{channel}
										</Badge>
									))}
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Formats</p>
								<div className="flex flex-wrap gap-1">
									{submission.blogPromotion?.formats?.map((format: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{format}
										</Badge>
									))}
								</div>
							</div>
							<p className="text-sm">
								<span className="text-gray-500">Social Snippets:</span>{' '}
								{submission.blogPromotion?.socialSnippets ? 'Yes' : 'No'}
							</p>
						</div>
					</div>

					{/* SEO Strategy */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							SEO Strategy
						</h3>
						<div className="space-y-2">
							<div>
								<p className="text-gray-500 text-xs mb-1">Keywords</p>
								<div className="flex flex-wrap gap-1">
									{submission.seoStrategy?.keywordFocus?.map((keyword: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{keyword}
										</Badge>
									))}
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div>
									<p className="text-gray-500 text-xs">Style</p>
									<p className="font-medium">{submission.seoStrategy?.seoStyle}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">Source</p>
									<p className="font-medium">{submission.seoStrategy?.keywordSource}</p>
								</div>
							</div>
							<div className="text-sm">
								<p className="text-gray-500 text-xs">Link Building</p>
								<p className="mt-1">{submission.seoStrategy?.linkBuilding}</p>
							</div>
						</div>
					</div>

					{/* Performance Metrics */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-primary"></div>
							Performance Metrics
						</h3>
						<div className="space-y-2">
							<div>
								<p className="text-gray-500 text-xs mb-1">KPIs</p>
								<div className="flex flex-wrap gap-1">
									{submission.performanceMetrics?.kpis?.map((kpi: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{kpi}
										</Badge>
									))}
								</div>
							</div>
							<div>
								<p className="text-gray-500 text-xs mb-1">Campaign Goals</p>
								<div className="flex flex-wrap gap-1">
									{submission.performanceMetrics?.campaignGoals?.map((goal: string, index: number) => (
										<Badge key={index} variant="secondary" className="text-xs">
											{goal}
										</Badge>
									))}
								</div>
							</div>
							<p className="text-sm">
								<span className="text-gray-500">Reporting Frequency:</span>{' '}
								{submission.performanceMetrics?.reportingFrequency}
							</p>
						</div>
					</div>
				</div>

				{/* Additional Details */}
				<div className="mt-6 pt-6 border-t">
					<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
						<div className="w-1 h-1 rounded-full bg-primary"></div>
						Additional Details
					</h3>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<p className="text-sm">
								<span className="text-gray-500">Campaigns:</span>{' '}
								<span className="font-medium">{submission.additionalDetails?.campaigns}</span>
							</p>
							<p className="text-sm">
								<span className="text-gray-500">Budget:</span>{' '}
								<span className="font-medium">
									{submission.additionalDetails?.hasBudget === 'yes' 
										? submission.additionalDetails?.budget 
										: 'No budget specified'}
								</span>
							</p>
							<p className="text-sm">
								<span className="text-gray-500">Internal Resources:</span>{' '}
								<span className="font-medium">{submission.additionalDetails?.internalResources}</span>
							</p>
							{submission.additionalDetails?.resourceUrls?.length > 0 && (
								<div>
									<p className="text-gray-500 text-xs mb-1">Resource URLs</p>
									<div className="space-y-1">
										{submission.additionalDetails.resourceUrls.map((url: string, index: number) => (
											<p key={index} className="text-sm text-blue-600 hover:underline">
												<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
											</p>
										))}
									</div>
								</div>
							)}
						</div>
						<div className="space-y-2">
							<p className="text-sm">
								<span className="text-gray-500">Compliance:</span>{' '}
								<span className="font-medium">{submission.additionalDetails?.compliance}</span>
							</p>
							<p className="text-sm">
								<span className="text-gray-500">Marketing Goals:</span>{' '}
								<span className="font-medium">{submission.additionalDetails?.marketingGoals}</span>
							</p>
							{submission.additionalDetails?.youtubeLinks?.length > 0 && (
								<div>
									<p className="text-gray-500 text-xs mb-1">YouTube Links</p>
									<div className="space-y-1">
										{submission.additionalDetails.youtubeLinks.map((link: string, index: number) => (
											<p key={index} className="text-sm text-blue-600 hover:underline">
												<a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
											</p>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};


const CompanyInfoCard = ({ submission }: { submission: FormSubmission }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [viewType, setViewType] = useState<'list' | 'grid'>('list');

	return (
		<Card className="overflow-hidden transition-all hover:shadow-md">
			<div 
				className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b cursor-pointer hover:from-primary/15 hover:via-primary/10 transition-colors" 
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<div className="flex justify-between items-center">
					<div>
						<h2 className="text-2xl font-semibold text-primary">{submission.companyName}</h2>
						<div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
							<Badge variant="outline" className="bg-white/50">{submission.id}</Badge>
							<span>•</span>
							<span>{new Date(submission.createdAt).toLocaleDateString()}</span>
						</div>
					</div>
					<Button 
						variant="ghost" 
						size="sm" 
						className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
					>
						{isExpanded ? '−' : '+'}
					</Button>
				</div>
			</div>

			<AnimatePresence>
				{isExpanded && (
					<motion.div
						key={submission.id}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="p-6 space-y-6">
							<div className="flex gap-3 justify-between items-center border-b pb-4">
								<div className="flex gap-2">
									<Button
										variant={viewType === 'list' ? 'default' : 'outline'}
										onClick={() => setViewType('list')}
										size="sm"
										className="gap-2"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<line x1="8" y1="6" x2="21" y2="6"></line>
											<line x1="8" y1="12" x2="21" y2="12"></line>
											<line x1="8" y1="18" x2="21" y2="18"></line>
											<line x1="3" y1="6" x2="3.01" y2="6"></line>
											<line x1="3" y1="12" x2="3.01" y2="12"></line>
											<line x1="3" y1="18" x2="3.01" y2="18"></line>
										</svg>
										List
									</Button>
									<Button
										variant={viewType === 'grid' ? 'default' : 'outline'}
										onClick={() => setViewType('grid')}
										size="sm"
										className="gap-2"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<rect x="3" y="3" width="7" height="7"></rect>
											<rect x="14" y="3" width="7" height="7"></rect>
											<rect x="14" y="14" width="7" height="7"></rect>
											<rect x="3" y="14" width="7" height="7"></rect>
										</svg>
										Grid
									</Button>
								</div>
								<Button variant="outline" size="sm" className="text-gray-500">
									<Eye className="h-4 w-4 mr-2" />
									View Details
								</Button>
							</div>

							{viewType === 'list' ? (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
									<div>
										<p className="text-xs text-gray-500 mb-1.5">Original Title</p>
										<p className="text-sm font-medium">
											{submission.additionalDetails?.originalTitle || 'No Title Provided'}
										</p>
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1.5">Company Name</p>
										<p className="text-sm font-medium">{submission.companyName}</p>
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1.5">Contact</p>
										<p className="text-sm font-medium">{submission.contactName}</p>
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1.5">Email</p>
										<p className="text-sm font-medium">{submission.email}</p>
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1.5">Phone</p>
										<p className="text-sm font-medium">{submission.contactNumber || 'N/A'}</p>
									</div>
								</div>
							) : (

								<div className="bg-gradient-to-br from-gray-50/30 via-white/40 to-gray-50/30 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 shadow-sm relative overflow-hidden">
									<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(0deg,transparent,black)] opacity-10" />
									<div className="relative">
										<DataSection data={submission} />
									</div>
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Card>
	);
};




const TableView = ({ submissions }: { submissions: FormSubmission[] }) => {
	return (
		<div className="space-y-6">
			{submissions.map((submission) => (
				<CompanyInfoCard key={submission.id} submission={submission} />
			))}
		</div>
	);
};







export default function FormViewPage() {
	const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState(true);


	const loadSubmissions = async () => {
		setLoading(true);
		setError('');
		try {



			// Fetch new submissions from API
			const response = await fetch('/api/form', {
				headers: {
					'Cache-Control': 'no-cache'
				}
			});
			
			if (!response.ok) {
				throw new Error(`Failed to fetch submissions: ${response.statusText}`);
			}
			
			const data = await response.json();
			
			if (!data.success) {
				throw new Error(data.error || 'Failed to load submissions');
			}

			// Transform API submissions
			const apiSubmissions = data.submissions.map((submission: any) => ({
				id: submission.id,
				companyName: submission.companyName,
				contactName: submission.contactName,
				email: submission.email,
				contactNumber: submission.contactNumber,
				socialMedia: submission.socialMedia || {},
				branding: submission.branding || {},
				contentStrategy: submission.contentStrategy || {},
				engagement: submission.engagement || {},
				blogPost: submission.blogPost || {},
				blogPromotion: submission.blogPromotion || {},
				seoStrategy: submission.seoStrategy || {},
				performanceMetrics: submission.performanceMetrics || {},
				additionalDetails: submission.additionalDetails || {},
				createdAt: submission.createdAt
			}));

			// Combine ETHIOFLEET data with API submissions
			setSubmissions([ethiofleetData, ...apiSubmissions]);
		} catch (error: any) {
			console.error('Error loading submissions:', error);
			setError(error.message || 'Failed to load submissions');
			// Even if API fails, show ETHIOFLEET data
			setSubmissions([ethiofleetData]);
		} finally {
			setLoading(false);
		}
	};


	useEffect(() => {
		loadSubmissions();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps


	if (loading) {
		return (
			<PageWrapper>
				<div className="max-w-7xl mx-auto p-6">
					<div className="mb-8 bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg animate-pulse">
						<div className="h-8 w-64 bg-primary/20 rounded mb-3"></div>
						<div className="h-4 w-48 bg-primary/10 rounded"></div>
					</div>
					<div className="space-y-4">
						{[1, 2, 3].map((i) => (
							<div key={i} className="bg-white rounded-xl shadow-sm border p-6">
								<div className="h-6 w-48 bg-gray-200 rounded mb-3"></div>
								<div className="h-4 w-32 bg-gray-100 rounded"></div>
							</div>
						))}
					</div>
				</div>
			</PageWrapper>
		);
	}

	if (error) {
		return (
			<PageWrapper>
				<div className="max-w-7xl mx-auto p-6">
					<Card className="p-6 border-red-200 bg-red-50">
						<div className="text-center">
							<h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Submissions</h3>
							<p className="text-red-600">{error}</p>
							<Button 
								onClick={() => window.location.reload()} 
								className="mt-4"
								variant="outline"
							>
								Try Again
							</Button>
						</div>
					</Card>
				</div>
			</PageWrapper>
		);
	}

	return (
		<PageWrapper>
			<div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50/30">
				<div className="mb-8">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-8 rounded-xl border border-primary/10 shadow-sm backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(0deg,transparent,black)] opacity-25 group-hover:opacity-40 transition-opacity" />
                        <div className="flex justify-between items-start relative">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 bg-primary/10 rounded-lg shadow-inner ring-1 ring-primary/20">
                                        <ClipboardList className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                                Form Submissions
                                            </h1>
                                            <Badge variant="outline" className="ml-2 bg-white/50 text-primary">
                                                {submissions.length} Total
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 mt-2">
                                            <ArrowDownWideNarrow className="h-4 w-4 text-primary/60" />
                                            <p className="text-sm">View and manage all form submissions with grid and list layouts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => loadSubmissions()}
                                className="flex items-center gap-2 hover:bg-primary/5 border-primary/20 shadow-sm bg-white/50"
                            >
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary">
                                    <path d="M1.5 7.5a6 6 0 1 1 2.343 4.657l-.707.707A7 7 0 1 0 .5 7.5h2l-2 2-2-2h3z" fill="currentColor"/>
                                </svg>
                                Refresh
                            </Button>
                        </div>
                    </motion.div>
                </div>



				{submissions.length === 0 ? (
					<Card className="p-12 text-center bg-gray-50/50">
						<div className="max-w-sm mx-auto">
							<p className="text-gray-500 text-lg mb-4">No submissions yet</p>
							<p className="text-gray-400 text-sm">Form submissions will appear here once they are received.</p>
						</div>
					</Card>
				) : (
					<div className="space-y-6">
						<TableView submissions={submissions} />
					</div>
				)}
			</div>
		</PageWrapper>
	);
}



