import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

interface FilePreviewModalProps {
	isOpen: boolean
	onClose: () => void
	file: {
		name: string
		path: string
		type: string
	} | null
}

export function FilePreviewModal({ isOpen, onClose, file }: FilePreviewModalProps) {
	if (!file) return null;

	const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(file.type)
	const isPDF = file.type === 'pdf'

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl h-[80vh]">
				<DialogHeader>
					<DialogTitle className="flex justify-between items-center">
						<span>{file.name}</span>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => window.open(file.path, '_blank')}
							>
								<Download className="h-4 w-4 mr-2" />
								Download
							</Button>
							<Button variant="ghost" size="sm" onClick={onClose}>
								<X className="h-4 w-4" />
							</Button>
						</div>
					</DialogTitle>
				</DialogHeader>
				<div className="flex-1 overflow-auto">
					{isImage && (
						<img
							src={file.path}
							alt={file.name}
							className="max-w-full h-auto"
						/>
					)}
					{isPDF && (
						<iframe
							src={file.path}
							className="w-full h-full"
							title={file.name}
						/>
					)}
					{!isImage && !isPDF && (
						<div className="flex items-center justify-center h-full">
							<p>Preview not available. Please download the file to view it.</p>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}