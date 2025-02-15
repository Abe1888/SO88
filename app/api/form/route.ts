import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
	try {
		const formData = await request.json();
		
		// Transform File objects to strings
		const transformedBranding = {
			...formData.branding,
			logo: formData.branding.logo ? formData.branding.logo.name : null,
			brandingGuidelines: formData.branding.brandingGuidelines ? formData.branding.brandingGuidelines.name : null,
		};

		const transformedBlogPost = {
			...formData.blogPost,
			referenceFiles: formData.blogPost.referenceFiles ? 
				Array.from(formData.blogPost.referenceFiles).map((file: any) => file.name) : 
				[],
		};

		const transformedAdditionalDetails = {
			...formData.additionalDetails,
			resourceDocuments: formData.additionalDetails.resourceDocuments ?
				formData.additionalDetails.resourceDocuments.map((file: any) => file.name) :
				[],
		};

		const newSubmission = await prisma.formSubmission.create({
			data: {
				companyName: formData.companyInfo.companyName,
				contactName: formData.companyInfo.contactName,
				email: formData.companyInfo.email,
				contactNumber: formData.companyInfo.contactNumber,
				socialMedia: formData.socialMedia || {},
				branding: transformedBranding,
				contentStrategy: formData.contentStrategy || {},
				engagement: formData.engagement || {},
				blogPost: transformedBlogPost,
				blogPromotion: formData.blogPromotion || {},
				seoStrategy: formData.seoStrategy || {},
				performanceMetrics: formData.performanceMetrics || {},
				additionalDetails: transformedAdditionalDetails,
			},
		});

		return NextResponse.json({ success: true, submission: newSubmission });
	} catch (error: any) {
		console.error('Form submission error:', error);
		return NextResponse.json(
			{ 
				success: false, 
				error: error.message || 'Failed to save submission',
				details: process.env.NODE_ENV === 'development' ? error : undefined
			}, 
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const submissions = await prisma.formSubmission.findMany({
			select: {
				id: true,
				companyName: true,
				contactName: true,
				email: true,
				contactNumber: true,
				socialMedia: true,
				branding: true,
				contentStrategy: true,
				engagement: true,
				blogPost: true,
				blogPromotion: true,
				seoStrategy: true,
				performanceMetrics: true,
				additionalDetails: true,
				createdAt: true
			},
			orderBy: {
				createdAt: 'desc'
			}
		});
		return NextResponse.json({ success: true, submissions });
	} catch (error: any) {
		console.error('Failed to fetch submissions:', error);
		return NextResponse.json(
			{ 
				success: false, 
				error: error.message || 'Failed to fetch submissions',
				details: process.env.NODE_ENV === 'development' ? error : undefined
			}, 
			{ status: 500 }
		);
	}
}