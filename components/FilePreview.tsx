"use client"

import { FileIcon, ImageIcon, FileTextIcon, TableIcon } from "lucide-react"

interface FilePreviewProps {
	file: string;
	onPreview: (file: { name: string; path: string; type: string }) => void;
}

export function FilePreview({ file, onPreview }: FilePreviewProps) {
	const fileName = file.split('/').pop() || ''
	const fileType = fileName.split('.').pop()?.toLowerCase()
	
	const getFileIcon = () => {
		switch(fileType) {
			case 'jpg':
			case 'jpeg':
			case 'png':
			case 'gif':
				return <ImageIcon className="h-5 w-5" />
			case 'pdf':
				return <FileTextIcon className="h-5 w-5" />
			case 'xlsx':
			case 'xls':
				return <TableIcon className="h-5 w-5" />
			default:
				return <FileIcon className="h-5 w-5" />
		}
	}

	return (
		<div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800">
			{getFileIcon()}
			<span className="text-sm truncate">{fileName}</span>
			<div className="ml-auto flex gap-2">
				<button
					onClick={() => onPreview({ 
						name: fileName, 
						path: file, 
						type: fileType || '' 
					})}
					className="text-sm text-blue-500 hover:text-blue-600"
				>
					Preview
				</button>
				<a 
					href={file}
					download
					className="text-sm text-green-500 hover:text-green-600"
				>
					Download
				</a>
			</div>
		</div>
	)
}