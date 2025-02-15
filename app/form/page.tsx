"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { toast, Toaster } from "react-hot-toast"

import { Loader2 } from "lucide-react"
import { useDropzone } from 'react-dropzone'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Card } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/PageWrapper"

// Form Components
import { CompanyInformation } from "@/components/form/CompanyInformation"
import { SocialMediaAccounts } from "@/components/form/SocialMediaAccounts"
import { Branding } from "@/components/form/Branding"
import { ContentStrategy } from "@/components/form/ContentStrategy"
import { Engagement } from "@/components/form/Engagement"
import { BlogPostManagement } from "@/components/form/BlogPostManagement"
import { BlogPromotion } from "@/components/form/BlogPromotion"
import { SEOStrategy } from "@/components/form/SEOStrategy"
import { PerformanceMetrics } from "@/components/form/PerformanceMetrics"
import { AdditionalDetails } from "@/components/form/AdditionalDetails"

// Types
interface FormData {
	id?: string;
	companyInfo: {
		companyName: string;
		contactName: string;
		email: string;
	};
	socialMedia: Record<string, any>;
	branding: {
		brandColor: string;
		secondaryColor: string;
		textColor: string;
		primaryFont: string;
		secondaryFont: string;
		logo: File | null;
		brandingGuidelines: File | null;
		logoUrl?: string;
	};
	contentStrategy: Record<string, any>;
	engagement: {
		goals: string[];
		metrics: string[];
		responseTime: string;
		communityGuidelines: string;
		tactics: string[];
		crisisManagement: string;
		tools: string[];
		monitoringFrequency: string;
	};
	blogPost: BlogPostFormData;
	blogPromotion: {
		promotionChannels: string[];
		socialSnippets: boolean;
		repurposingFormats: string[];
	};
	seoStrategy: {
		keywordSource: string;
		seoStyle: string;
		linkingStrategy: string;
		metaDescriptions: boolean;
		competitorAnalysis: boolean;
	};
	performanceMetrics: {
		campaignGoals: string[];
		reportingFrequency: string;
		otherReportingFrequency?: string;
	};
	additionalDetails: {
		campaigns: string;
		hasBudget: string;
		budget: string;
		internalResources: string;
		resourceDocuments: File[];
		youtubeLinks: string[];
		compliance: string;
	};
}


interface BlogPostFormData {
	blogFrequency: string;
	blogLength: string;
	blogTopics: string[];  // Changed from topics
	otherTopic: string;
	referenceFiles: FileList | null;
	blogTopicSource: string;  // Changed from topicSource
}







interface FormPageProps {
	initialData?: Partial<FormData>;
	isEditing?: boolean;
}

type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;


// ExamplePostPreview component
const ExamplePostPreview = ({ 
	brandColor, 
	textFontColor, 
	selectedFont,
	selectedPaletteColorName, 
	logoUrl 
}: {
	brandColor: string;
	textFontColor: string;
	selectedFont: string;
	selectedPaletteColorName: string;
	logoUrl: string;

}) => {
	return (
		<div className="space-y-6">
			<div className="mt-4" style={{ 
				color: textFontColor,
				fontFamily: selectedFont,
				backgroundColor: brandColor,
				padding: '20px',
				borderRadius: '8px' 
			}}>
				{logoUrl && <img src={logoUrl} alt="Logo" className="max-h-20 mb-4" />}
				<h1 className="text-xl font-bold mb-2">Brand Preview</h1>
				<p className="mb-2">Selected color: {selectedPaletteColorName}</p>
				<div className="flex gap-2 flex-wrap">
					<div className="px-3 py-1 rounded" style={{ backgroundColor: brandColor, border: '1px solid ' + textFontColor }}>
						Primary Color
					</div>
					<div className="px-3 py-1 rounded" style={{ backgroundColor: 'transparent', border: '1px solid ' + textFontColor }}>
						Text Color
					</div>
				</div>
			</div>


			{/* Social Media Preview */}
			<div className="border-b dark:border-gray-700">
				<div className="p-6">
					<div className="space-y-6">
						<div className="flex items-center justify-between pb-4 border-b border-border">
							<div className="space-y-1">
								<h2 className="text-2xl font-semibold tracking-tight">Social Media Preview</h2>
								<p className="text-sm text-muted-foreground">Experience the power of our social media management tools across platforms.</p>
							</div>
						</div>
						<div className="grid gap-6 md:grid-cols-2">
							{/* LinkedIn Preview */}
							<div className="rounded-lg border bg-card text-card-foreground shadow-sm social-preview-card overflow-hidden">
								<div className="p-4 border-b border-border">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
											{logoUrl ? <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" /> : <span className="text-xs text-muted-foreground">Logo</span>}
										</div>
										<div className="flex items-center text-sm text-muted-foreground">
											<svg className="w-4 h-4 mr-1 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
												<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
											</svg>
											LinkedIn
										</div>
									</div>
								</div>
								<div className="p-4 space-y-4">
									<div className="aspect-video bg-muted rounded-md flex items-center justify-center">
										<span className="text-sm text-muted-foreground">Your Content Here</span>
									</div>
									<div className="space-y-2">
										<p className="text-sm" style={{ color: textFontColor, fontFamily: selectedFont }}>
											Revolutionize your social media management with cutting-edge automation solutions.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full" 
												style={{ backgroundColor: `${brandColor}25`, color: brandColor }}>
												#{selectedPaletteColorName.replace(/\s+/g, '')}
											</span>
											<span className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
												style={{ backgroundColor: `${brandColor}25`, color: brandColor }}>
												#SocialMediaAutomation
											</span>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 border-t border-border flex items-center justify-between">
									<div className="flex items-center gap-4">
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4">
												<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
											</svg>
											<span>142</span>
										</button>
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4">
												<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
											</svg>
											<span>28</span>
										</button>
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 h-4 w-4">
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											<span>56</span>
										</button>
									</div>
									<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs">
										Boost Post
									</button>
								</div>
							</div>

							{/* Facebook Preview */}
							<div className="rounded-lg border bg-card text-card-foreground shadow-sm social-preview-card overflow-hidden">
								<div className="p-4 border-b border-border">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
											{logoUrl ? <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" /> : <span className="text-xs text-muted-foreground">Logo</span>}
										</div>
										<div className="flex items-center text-sm text-muted-foreground">
											<svg className="w-4 h-4 mr-1 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
												<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
											</svg>
											Facebook
										</div>
									</div>
								</div>
								<div className="p-4 space-y-4">
									<div className="aspect-video bg-muted rounded-md flex items-center justify-center">
										<span className="text-sm text-muted-foreground">Your Content Here</span>
									</div>
									<div className="space-y-2">
										<p className="text-sm" style={{ color: textFontColor, fontFamily: selectedFont }}>
											Unlock the power of AI-driven social media strategies. Transform your online presence today! 🚀
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
												style={{ backgroundColor: `${brandColor}25`, color: brandColor }}>
												#{selectedPaletteColorName.replace(/\s+/g, '')}
											</span>
											<span className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
												style={{ backgroundColor: `${brandColor}25`, color: brandColor }}>
												#AIpoweredMarketing
											</span>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 border-t border-border flex items-center justify-between">
									<div className="flex items-center gap-4">
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4">
												<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
											</svg>
											<span>328</span>
										</button>
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4">
												<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
											</svg>
											<span>47</span>
										</button>
										<button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 h-4 w-4">
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											<span>89</span>
										</button>
									</div>
									<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs">
										Boost Post
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function FormPage({ initialData, isEditing = false }: FormPageProps) {
	const router = useRouter();







	const [formData, setFormData] = useState<FormData>({
		companyInfo: {
			companyName: initialData?.companyInfo?.companyName || "",
			contactName: initialData?.companyInfo?.contactName || "",
			email: initialData?.companyInfo?.email || ""
		},
		socialMedia: initialData?.socialMedia || {},
		branding: {
			brandColor: initialData?.branding?.brandColor || "#2CC295",
			secondaryColor: initialData?.branding?.secondaryColor || "#095544",
			textColor: initialData?.branding?.textColor || "#333333",
			primaryFont: initialData?.branding?.primaryFont || "Arial, sans-serif",
			secondaryFont: initialData?.branding?.secondaryFont || "",
			logo: null,
			brandingGuidelines: null,
			logoUrl: initialData?.branding?.logoUrl || ""
		},
		contentStrategy: initialData?.contentStrategy || {},
		engagement: {
			goals: initialData?.engagement?.goals || [],
			metrics: initialData?.engagement?.metrics || [],
			responseTime: initialData?.engagement?.responseTime || "",
			communityGuidelines: initialData?.engagement?.communityGuidelines || "",
			tactics: initialData?.engagement?.tactics || [],
			crisisManagement: initialData?.engagement?.crisisManagement || "",
			tools: initialData?.engagement?.tools || [],
			monitoringFrequency: initialData?.engagement?.monitoringFrequency || ""
		},
		blogPost: {
			blogFrequency: initialData?.blogPost?.blogFrequency || "",
			blogLength: initialData?.blogPost?.blogLength || "",
			blogTopics: initialData?.blogPost?.blogTopics || [],
			otherTopic: initialData?.blogPost?.otherTopic || "",
			referenceFiles: null,
			blogTopicSource: initialData?.blogPost?.blogTopicSource || ""
		},
		blogPromotion: {
			promotionChannels: initialData?.blogPromotion?.promotionChannels || [],
			socialSnippets: initialData?.blogPromotion?.socialSnippets || false,
			repurposingFormats: initialData?.blogPromotion?.repurposingFormats || []
		},
		seoStrategy: {
			keywordSource: initialData?.seoStrategy?.keywordSource || "",
			seoStyle: initialData?.seoStrategy?.seoStyle || "",
			linkingStrategy: initialData?.seoStrategy?.linkingStrategy || "",
			metaDescriptions: initialData?.seoStrategy?.metaDescriptions || false,
			competitorAnalysis: initialData?.seoStrategy?.competitorAnalysis || false
		},
		performanceMetrics: {
			campaignGoals: initialData?.performanceMetrics?.campaignGoals || [],
			reportingFrequency: initialData?.performanceMetrics?.reportingFrequency || "",
			otherReportingFrequency: initialData?.performanceMetrics?.otherReportingFrequency
		},
		additionalDetails: {
			campaigns: initialData?.additionalDetails?.campaigns || "",
			hasBudget: initialData?.additionalDetails?.hasBudget || "",
			budget: initialData?.additionalDetails?.budget || "",
			internalResources: initialData?.additionalDetails?.internalResources || "",
			resourceDocuments: initialData?.additionalDetails?.resourceDocuments || [],
			youtubeLinks: initialData?.additionalDetails?.youtubeLinks || [],
			compliance: initialData?.additionalDetails?.compliance || ""
		}
	});
	
	// Form state
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
	const [showSuccessDialog, setShowSuccessDialog] = useState(false);
	const [showErrorDialog, setShowErrorDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	
	// File state
	const [resourceFiles, setResourceFiles] = useState<File[]>([]);
	const [referenceFiles, setReferenceFiles] = useState<File[]>([]);
	const [resourceDocuments, setResourceDocuments] = useState<File[]>([]);
	
	const [youtubeLinks, setYoutubeLinks] = useState<string[]>([]);




	const handleResourceDocuments = (acceptedFiles: File[]) => {
		setResourceDocuments(acceptedFiles);
	}

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: handleResourceDocuments,
		maxFiles: 20,
		maxSize: 52428800,
		accept: {
			'application/pdf': ['.pdf'],
			'application/msword': ['.doc'],
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
			'application/vnd.ms-powerpoint': ['.ppt'],
			'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
			'application/vnd.ms-excel': ['.xls'],
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
			'application/x-indesign': ['.ind'],
			'application/illustrator': ['.ai'],
			'image/jpeg': ['.jpg', '.jpeg'],
			'image/png': ['.png'],
			'image/svg+xml': ['.svg'],
			'video/mp4': ['.mp4'],
			'audio/mpeg': ['.mp3'],
			'video/quicktime': ['.mov', '.qt'],
			'application/x-photoshop': ['.psd'],
			'image/vnd.adobe.photoshop': ['.psd'],
			'application/photoshop': ['.psd']
		}
	})

	const validateYoutubeLink = (link: string): boolean => {
		const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}$/;
		return youtubeRegex.test(link);
	}

	const handleYoutubeLinks = (event: TextareaChangeEvent) => {
		const links = event.target.value.split('\n').filter(link => link.trim() !== '');
		const validLinks = links.filter(link => validateYoutubeLink(link.trim()));
		if (links.length !== validLinks.length) {
			alert('Some YouTube links are invalid and will be removed');
		}
		setYoutubeLinks(validLinks);
	}

	const handleSectionChange = (section: string, data: any) => {

		setFormData(prev => ({
			...prev,
			[section]: data
		}))
	}




	const validateTotalFileSize = (files: File[]): boolean => {
		const totalSize = files.reduce((sum, file) => sum + file.size, 0);
		return totalSize <= 100 * 1024 * 1024; // 100MB
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formElement = event.currentTarget;
		setIsSubmitting(true);
		setFormErrors({});

		try {
			// Company Information validation
			if (!formData.companyInfo.companyName || formData.companyInfo.companyName.trim().length < 2) {
				setFormErrors(prev => ({ ...prev, companyName: 'Company name must be at least 2 characters' }));
				throw new Error('Company name is invalid');
			}
			if (!formData.companyInfo.contactName || formData.companyInfo.contactName.trim().length < 2) {
				setFormErrors(prev => ({ ...prev, contactName: 'Contact name must be at least 2 characters' }));
				throw new Error('Contact name is invalid');
			}

			// Validate total file size
			const allFiles = [...resourceFiles, ...referenceFiles, ...resourceDocuments];
			if (!validateTotalFileSize(allFiles)) {
				throw new Error('Total file size exceeds 100MB limit');
			}

			// Submit form data to API endpoint
			const response = await fetch('/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Failed to submit form');
			}

			// Log form data for debugging
			console.log('Form submitted successfully:', formData);

			setDialogMessage(
				`Form Submitted Successfully:\n` +
				`• Company: ${formData.companyInfo.companyName}\n` +
				`• Contact: ${formData.companyInfo.contactName}\n` +
				`• Email: ${formData.companyInfo.email}\n` +
				`• Social Media Accounts: ${Object.keys(formData.socialMedia).length} configured\n` +
				`• Content Strategy: ${Object.keys(formData.contentStrategy).length} items defined\n` +
				`• Blog Topics: ${formData.blogPost.blogTopics.length} topics planned`
			);
			setShowSuccessDialog(true);
			
			// Add navigation after short delay
			setTimeout(() => {
				router.push('/form_view');
			}, 1500);

			if (!isEditing) {
				formElement.reset();
				setFormData({
					companyInfo: {
						companyName: "",
						contactName: "",
						email: ""
					},
					socialMedia: {},
					branding: {
						brandColor: "#2CC295",
						secondaryColor: "#095544",
						textColor: "#333333",
						primaryFont: "Arial, sans-serif",
						secondaryFont: "",
						logo: null,
						brandingGuidelines: null,
						logoUrl: ""
					},
					contentStrategy: {},
					engagement: {
						goals: [],
						metrics: [],
						responseTime: "",
						communityGuidelines: "",
						tactics: [],
						crisisManagement: "",
						tools: [],
						monitoringFrequency: ""
					},
					blogPost: {
						blogFrequency: "",
						blogLength: "",
						blogTopics: [],
						otherTopic: "",
						referenceFiles: null,
						blogTopicSource: ""
					},
					blogPromotion: {
						promotionChannels: [],
						socialSnippets: false,
						repurposingFormats: []
					},
					seoStrategy: {
						keywordSource: "",
						seoStyle: "",
						linkingStrategy: "",
						metaDescriptions: false,
						competitorAnalysis: false
					},
					performanceMetrics: {
						campaignGoals: [],
						reportingFrequency: "",
						otherReportingFrequency: ""
					},
					additionalDetails: {
						campaigns: "",
						hasBudget: "",
						budget: "",
						internalResources: "",
						resourceDocuments: [] as File[],
						youtubeLinks: [] as string[],
						compliance: ""
					}
				});

				// Reset all state values
				setResourceFiles([]);
				setReferenceFiles([]);
				setResourceDocuments([]);
				setYoutubeLinks([]);
			}

			// Show success message
			toast.success('Form submitted successfully!');
		} catch (error: any) {
			console.error('Form submission error:', error);
			toast.error(error.message);
			setFormErrors(prev => ({ ...prev, submit: error.message }));
		} finally {
			setIsSubmitting(false);
		}
	}








	return (
		<PageWrapper>
			<AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<AlertDialogContent className="max-w-[425px]">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-green-600 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
							Success
						</AlertDialogTitle>
						<AlertDialogDescription>
							<div className="mt-4 space-y-2">
								<p className="font-medium text-gray-900">{dialogMessage.split('\n')[0]}</p>
								<div className="space-y-1 text-sm text-gray-600">
									{dialogMessage.split('\n').slice(1).map((line, index) => (
										<p key={index} className="pl-4">{line}</p>
									))}
								</div>
								<p className="text-sm text-gray-500 pt-2">
									{isEditing ? 'Your changes have been saved.' : 'You can continue filling out the rest of the form.'}
								</p>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction className="bg-green-600 text-white hover:bg-green-700">
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
				<AlertDialogContent className="max-w-[425px]">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-red-600 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
							</svg>
							Form Validation Error
						</AlertDialogTitle>
						<AlertDialogDescription>
							<div className="mt-4 space-y-2">
								<p className="font-medium text-gray-900">Please correct the following errors:</p>
								<div className="space-y-1 text-sm text-red-600">
									{dialogMessage.split('\n').map((line, index) => (
										<div key={index} className="flex items-start gap-2">
											<span className="mt-1">•</span>
											<p>{line}</p>
										</div>
									))}
								</div>
								<div className="mt-4 p-3 bg-gray-50 rounded-md">
									<p className="text-sm font-medium text-gray-900">Example of valid input:</p>
									<div className="mt-2 text-sm text-gray-600">
										<p>• Company Name: "Acme Corporation"</p>
										<p>• Contact Name: "John Smith"</p>
										<p>• Phone: "+1 234-567-8900"</p>
										<p>• Email: "john@acmecorp.com"</p>
									</div>
								</div>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">
							Fix Errors
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					duration: 5000,
					style: {
						background: '#333',
						color: '#fff',
					},
					success: {
						style: {
							background: 'green',
						},
					},
					error: {
						style: {
							background: 'red',
						},
					},
				}}
			/>
			<div className="max-w-5xl mx-auto space-y-8 p-6">
				{/* Brand and Social Media Preview */}
				<Card className="p-6 bg-background shadow-lg">
					<ExamplePostPreview
						brandColor={formData.branding.brandColor}
						textFontColor={formData.branding.textColor}
						selectedFont={formData.branding.primaryFont}
						selectedPaletteColorName="Mountain Meadow"

						logoUrl={formData.branding.logo ? URL.createObjectURL(formData.branding.logo) : ""}
					/>
				</Card>

				{/* Form Content */}
				<Card className="p-6">
					<form onSubmit={handleSubmit} className="space-y-8">

						<CompanyInformation 
							formData={formData.companyInfo}
							onDataChange={(data) => handleSectionChange('companyInfo', data)}
							formErrors={formErrors}
						/>
						<SocialMediaAccounts 
							formData={formData.socialMedia}
							onDataChange={(data) => handleSectionChange('socialMedia', data)}
							formErrors={formErrors}
						/>
						<Branding 
							formData={formData.branding}
							onDataChange={(data) => handleSectionChange('branding', data)}
						/>
						<ContentStrategy 
							formData={formData.contentStrategy}
							onDataChange={(data) => handleSectionChange('contentStrategy', data)}
						/>
						<Engagement 
							formData={formData.engagement}
							onDataChange={(data) => handleSectionChange('engagement', data)}
						/>
						<BlogPostManagement 
							formData={formData.blogPost}
							onDataChange={(data) => handleSectionChange('blogPost', data)}
						/>
						<BlogPromotion 
							promotionChannels={formData.blogPromotion.promotionChannels}
							socialSnippets={formData.blogPromotion.socialSnippets}
							repurposingFormats={formData.blogPromotion.repurposingFormats}
							onDataChange={(data) => handleSectionChange('blogPromotion', data)}
						/>
						<SEOStrategy 
							formData={formData.seoStrategy}
							onDataChange={(data) => handleSectionChange('seoStrategy', data)}
						/>
						<PerformanceMetrics 
							formData={formData.performanceMetrics}
							onDataChange={(data) => handleSectionChange('performanceMetrics', data)}
						/>
						<AdditionalDetails 
							campaigns={formData.additionalDetails.campaigns}
							hasBudget={formData.additionalDetails.hasBudget}
							budget={formData.additionalDetails.budget}
							internalResources={formData.additionalDetails.internalResources}
							resourceDocuments={formData.additionalDetails.resourceDocuments}
							youtubeLinks={formData.additionalDetails.youtubeLinks}
							compliance={formData.additionalDetails.compliance}
							onDataChange={(data) => handleSectionChange('additionalDetails', data)}
						/>

						{formErrors.submit && (
							<div className="text-red-500 text-sm mt-2">
								{formErrors.submit}
							</div>
						)}

						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Submitting...
								</>
							) : (
								'Submit Form'
							)}
						</Button>
					</form>
				</Card>
			</div>
		</PageWrapper>
	);
}
