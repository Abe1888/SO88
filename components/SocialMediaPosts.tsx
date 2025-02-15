"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Facebook, Linkedin, Instagram, Heart, MessageCircle, Share2, Youtube } from "lucide-react"

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
	</svg>
)

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 19.75 4.75v3.5a7.939 7.939 0 0 1-3.15 1.07v4.14c0 5.05-5.24 9.39-10.61 7.19-3.39-1.39-5.99-5.61-4.01-9.33C3.7 7.01 8.07 5.25 11.93 6.87v3.66c-.68-.35-1.48-.47-2.25-.34-1.88.32-3.17 2.15-2.33 4.04.72 1.64 2.87 2.57 4.49 1.69 1.4-.77 1.94-2.24 1.94-3.82V0h2.82v5.82Z" fill="currentColor"/>
	</svg>
)

const socialPosts = [
	{
		platform: "facebook",
		icon: Facebook,
		username: "TechStartup",
		time: "2h ago",
		content: "Excited to announce our latest AI-powered features! 🚀 #TechInnovation #AI",
		likes: "2.3K",
		comments: "458",
		shares: "234",
		color: "from-[#1877F2]/10 to-[#1877F2]/20",
		iconColor: "text-[#1877F2]",
		bgColor: "bg-[#1877F2]/10",
		hoverColor: "hover:text-[#1877F2]"
	},
	{
		platform: "linkedin",
		icon: Linkedin,
		username: "Tech Innovation Inc.",
		time: "4h ago",
		content: "Join us in revolutionizing social media management! 🌟 #Innovation #Tech #Growth",
		likes: "1.2K",
		comments: "324",
		shares: "167",
		color: "from-[#0A66C2]/10 to-[#0A66C2]/20",
		iconColor: "text-[#0A66C2]",
		bgColor: "bg-[#0A66C2]/10",
		hoverColor: "hover:text-[#0A66C2]"
	},
	{
		platform: "x",
		icon: XIcon,
		username: "@techplatform",
		time: "1h ago",
		content: "Our AI just got smarter! 🤖✨ Check out the latest updates and see how we're transforming social media management. #AI #Innovation",
		likes: "3.4K",
		comments: "892",
		shares: "1.2K",
		color: "from-[#000000]/10 to-[#000000]/20",
		iconColor: "text-[#000000]",
		bgColor: "bg-[#000000]/10",
		hoverColor: "hover:text-[#000000]"
	},
	{
		platform: "instagram",
		icon: Instagram,
		username: "tech.platform",
		time: "3h ago",
		content: "Transform your social media presence with AI-powered insights 📱✨ #SocialMedia #AI #Digital",
		likes: "5.6K",
		comments: "982",
		shares: "445",
		color: "from-[#E4405F]/10 to-[#E4405F]/20",
		iconColor: "text-[#E4405F]",
		bgColor: "bg-[#E4405F]/10",
		hoverColor: "hover:text-[#E4405F]"
	},
	{
		platform: "tiktok",
		icon: TikTokIcon,
		username: "@techplatform",
		time: "30m ago",
		content: "Watch how our AI transforms social media management in seconds! 🎯 #TechTok #AITechnology",
		likes: "10.2K",
		comments: "1.2K",
		shares: "2.3K",
		color: "from-[#000000]/10 to-[#000000]/20",
		iconColor: "text-[#000000]",
		bgColor: "bg-[#000000]/10",
		hoverColor: "hover:text-[#000000]"
	},
	{
		platform: "youtube",
		icon: Youtube,
		username: "Tech Platform",
		time: "1h ago",
		content: "Quick guide: Mastering social media with AI 📱 #Shorts #TechTips #SocialMedia",
		likes: "8.7K",
		comments: "756",
		shares: "1.5K",
		color: "from-[#FF0000]/10 to-[#FF0000]/20",
		iconColor: "text-[#FF0000]",
		bgColor: "bg-[#FF0000]/10",
		hoverColor: "hover:text-[#FF0000]"
	}
]

const containerVariants = {
	initial: { y: 0 },
	animate: {
		y: [0, -1200],
		transition: {
			y: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 45,
				ease: "linear",
			}
		}
	}
}

const postVariants = {
	initial: { opacity: 0, y: 20, scale: 0.98 },
	animate: { 
		opacity: 1, 
		y: 0, 
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			mass: 1
		}
	},
	hover: {
		y: -5,
		scale: 1.02,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 25
		}
	}
}

const PostCard = ({ post }: { post: typeof socialPosts[0] }) => {
	const Icon = post.icon
	
	return (
		<motion.div
		  variants={postVariants}
		  initial="initial"
		  animate="animate"
		  whileHover="hover"
		>
		  <Card className="group relative p-4 mb-4 backdrop-blur-sm border border-border/40 dark:border-border/20 transition-all duration-300 hover:border-primary/40 hover:shadow-xl bg-background/50">
			<div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-[0.15] transition-all duration-300 group-hover:opacity-30`} />
			<div className="relative">
			  <div className="flex items-center mb-3">
				<div className={`h-8 w-8 mr-2 rounded-full ${post.bgColor} ring-1 ring-border/10 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
				  <Icon className={`h-5 w-5 ${post.iconColor}`} />
				</div>
				<div>
				  <div className={`font-semibold text-sm ${post.iconColor}`}>{post.username}</div>
				  <div className="text-xs text-muted-foreground/80">{post.time}</div>
				</div>
			  </div>
			  <p className="text-sm mb-3 leading-relaxed">{post.content}</p>
			  <div className="flex items-center space-x-6 text-xs text-muted-foreground/80">
				<div className={`flex items-center group/action ${post.hoverColor} transition-colors`}>
				  <Heart className={`h-4 w-4 mr-1.5 group-hover/action:scale-110 transition-transform`} />
				  {post.likes}
				</div>
				<div className={`flex items-center group/action ${post.hoverColor} transition-colors`}>
				  <MessageCircle className={`h-4 w-4 mr-1.5 group-hover/action:scale-110 transition-transform`} />
				  {post.comments}
				</div>
				<div className={`flex items-center group/action ${post.hoverColor} transition-colors`}>
				  <Share2 className={`h-4 w-4 mr-1.5 group-hover/action:scale-110 transition-transform`} />
				  {post.shares}
				</div>
			  </div>
			</div>
		  </Card>
		</motion.div>
	)
}

export function SocialMediaPosts() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-transparent backdrop-blur-sm" />
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className="space-y-6 pt-6 px-8 max-w-sm mx-auto"
				style={{ willChange: 'transform' }}
			>
				{[...socialPosts, ...socialPosts, ...socialPosts, ...socialPosts].map((post, index) => (
					<motion.div
						key={`${post.platform}-${index}`}
						variants={postVariants}
						initial="initial"
						animate="animate"
						transition={{
							delay: index * 0.2,  // Longer delay between posts
						}}
					>
						<PostCard post={post} />
					</motion.div>
				))}

			</motion.div>
		</div>
	)
}