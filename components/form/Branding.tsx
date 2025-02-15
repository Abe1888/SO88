import { Palette, Upload, Type } from "lucide-react"
import { ColorPalette } from "@/components/ColorPalette"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BrandingProps {
	formData: any;
	onDataChange: (data: any) => void;
}


function ColorPreview({ name, hex, className }: { name: string; hex: string; className?: string }) {
	return (
		<div className={`rounded-lg overflow-hidden shadow-sm ${className}`}>
			<div className="h-24 w-full" style={{ backgroundColor: hex }} />
			<div className="p-2 bg-white border text-sm">
				<div className="font-medium">{name}</div>
				<div className="text-muted-foreground uppercase">{hex}</div>
			</div>
		</div>
	)
}

function FontPreview({
	letter,
	alphabet,
	numbers,
	fontFamily,
	weight,
	className,
}: { letter: string; alphabet: string; numbers: string; fontFamily: string; weight: string; className?: string }) {
	return (
		<div className={`p-6 rounded-lg text-center text-white ${className}`} style={{ fontFamily }}>
			<div className="text-6xl mb-4" style={{ fontWeight: weight }}>
				{letter}
			</div>
			<div className="text-sm mb-2">{alphabet}</div>
			<div className="text-sm mb-2">{numbers}</div>
			<div className="text-sm">
				{fontFamily} {weight}
			</div>
		</div>
	)
}

export function Branding({ formData, onDataChange }: BrandingProps) {
	const handleColorSelect = (color: string) => {
		onDataChange({ ...formData, brandColor: color });
	};

	const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			onDataChange({ ...formData, logo: file });
		}
	};


	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Palette className="h-5 w-5" />
					Branding
				</CardTitle>
				<CardDescription>Upload your brand assets and define your visual identity</CardDescription>
			</CardHeader>
			  <CardContent className="p-6 pt-0 grid gap-6">
				{/* Input Fields Section */}
				<div className="grid md:grid-cols-2 gap-4">
				  {/* Logo Upload */}
				  <div className="space-y-2">
					<Label className="flex items-center gap-2">
					  <Upload className="h-4 w-4" />
					  Logo
					</Label>
					<Input 
					  type="file" 
					  accept="image/*" 
					  onChange={handleLogoUpload}

					/>
				  </div>
				  {/* Primary Color */}
				  <div className="space-y-2">
					<Label htmlFor="primary-color">Primary Color</Label>
					<div className="flex gap-2">
					  <Input 
						type="color" 
						id="primary-color" 
						value={formData.brandColor || "#2CC295"}
						onChange={(e) => onDataChange({ ...formData, brandColor: e.target.value })}
						className="w-12 h-10 p-1" 
					  />
					  <Input 
						value={formData.brandColor || "#2CC295"}
						onChange={(e) => onDataChange({ ...formData, brandColor: e.target.value })}
					  />
					</div>
				  </div>
				</div>

				{/* Color Fields */}
				<div className="grid md:grid-cols-2 gap-4">
				  {/* Secondary Color */}
				  <div className="space-y-2">
					<Label htmlFor="secondary-color">Secondary Color</Label>
					<div className="flex gap-2">
					  <Input 
						type="color" 
						id="secondary-color" 
						value={formData.secondaryColor || "#095544"}
						onChange={(e) => onDataChange({ ...formData, secondaryColor: e.target.value })}
						className="w-12 h-10 p-1" 
					  />
					  <Input 
						value={formData.secondaryColor || "#095544"}
						onChange={(e) => onDataChange({ ...formData, secondaryColor: e.target.value })}
					  />
					</div>
				  </div>
				  {/* Text Color */}
				  <div className="space-y-2">
					<Label htmlFor="text-color">Text Color</Label>
					<div className="flex gap-2">
					  <Input 
						type="color" 
						id="text-color" 
						value={formData.textColor || "#333333"}
						onChange={(e) => onDataChange({ ...formData, textColor: e.target.value })}
						className="w-12 h-10 p-1" 
					  />
					  <Input 
						value={formData.textColor || "#333333"}
						onChange={(e) => onDataChange({ ...formData, textColor: e.target.value })}
					  />
					</div>
				  </div>
				</div>

				{/* Font Fields */}
				<div className="grid md:grid-cols-2 gap-4">
				  {/* Primary Font */}
				  <div className="space-y-2">
					<Label htmlFor="font" className="flex items-center gap-2">
					  <Type className="h-4 w-4" />
					  Primary Font
					</Label>
					<Select 
					  value={formData.primaryFont || "Arial, sans-serif"}
					  onValueChange={(value) => onDataChange({ ...formData, primaryFont: value })}
					>
					  <SelectTrigger>
						<SelectValue placeholder="Select font" />
					  </SelectTrigger>
					  <SelectContent>
						<SelectItem value="Arial, sans-serif">Arial</SelectItem>
						<SelectItem value="'Times New Roman', serif">Times New Roman</SelectItem>
						<SelectItem value="'Helvetica', sans-serif">Helvetica</SelectItem>
						<SelectItem value="'Georgia', serif">Georgia</SelectItem>
					  </SelectContent>
					</Select>
				  </div>
				  {/* Secondary Font */}
				  <div className="space-y-2">
					<Label htmlFor="secondary-font">Secondary Font</Label>
					<Select 
					  value={formData.secondaryFont || ""}
					  onValueChange={(value) => onDataChange({ ...formData, secondaryFont: value })}
					>
					  <SelectTrigger>
						<SelectValue placeholder="Select font" />
					  </SelectTrigger>
					  <SelectContent>
						<SelectItem value="Arial, sans-serif">Arial</SelectItem>
						<SelectItem value="'Times New Roman', serif">Times New Roman</SelectItem>
						<SelectItem value="'Helvetica', sans-serif">Helvetica</SelectItem>
						<SelectItem value="'Georgia', serif">Georgia</SelectItem>
					  </SelectContent>
					</Select>
				  </div>
				</div>

				{/* Guidelines Upload */}
				<div className="space-y-2">
				  <Label className="flex items-center gap-2">
					<Upload className="h-4 w-4" />
					Branding Guidelines
				  </Label>
				  <Input 
					type="file" 
					accept=".pdf,.doc,.docx"
					onChange={(e) => {
					  if (e.target.files && e.target.files[0]) {
						onDataChange({ ...formData, brandingGuidelines: e.target.files[0] });
					  }
					}}
				  />
				</div>

				{/* Color Palette */}

				<ColorPalette
				  brandColor={formData.brandColor || "#2CC295"}
				  secondaryBrandColor={formData.secondaryColor || "#095544"}
				  textFontColor={formData.textColor || "#333333"}
				  selectedFont={formData.primaryFont || "Arial, sans-serif"}
				  onColorSelect={handleColorSelect}
				  compact={true}
				/>
			</CardContent>
		</Card>
	)
}