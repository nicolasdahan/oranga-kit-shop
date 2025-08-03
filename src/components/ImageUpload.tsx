import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadImage, getOptimizedImageUrl } from '@/lib/cloudinary';
import { useLanguage } from '@/context/LanguageContext';

interface ImageUploadProps {
  onImagesUploaded: (urls: string[]) => void;
  maxImages?: number;
  className?: string;
}

const ImageUpload = ({ onImagesUploaded, maxImages = 5, className = '' }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const newImages: string[] = [];

    try {
      for (let i = 0; i < Math.min(files.length, maxImages - uploadedImages.length); i++) {
        const file = files[i];
        
        // Validation du fichier
        if (!file.type.startsWith('image/')) {
          console.error('File is not an image:', file.name);
          continue;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB max
          console.error('File too large:', file.name);
          continue;
        }

        const imageUrl = await uploadImage(file);
        newImages.push(imageUrl);
      }

      const allImages = [...uploadedImages, ...newImages];
      setUploadedImages(allImages);
      onImagesUploaded(allImages);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    onImagesUploaded(newImages);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const input = fileInputRef.current;
      if (input) {
        input.files = files;
        handleFileSelect({ target: { files } } as any);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Zone de drop */}
      <div
        className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-colors ${
          uploading ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <div className="space-y-2">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">
              {uploading ? 'Uploading...' : 'Drop images here or click to select'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG up to 10MB each
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || uploadedImages.length >= maxImages}
          >
            Select Images
          </Button>
        </div>
      </div>

      {/* Images uploadées */}
      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          <Label>Uploaded Images ({uploadedImages.length}/{maxImages})</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedImages.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={getOptimizedImageUrl(url, { width: 200, height: 200, quality: 80 })}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload; 