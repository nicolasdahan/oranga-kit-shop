import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary
cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dlfofeope',
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY || '446333691722363',
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET || 'LCGpxWOTcrBHtbXs4znbvusK_GE',
});

export default cloudinary;

// Fonction pour uploader une image
export const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'dadafoot_uploads');

    fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dlfofeope'}/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.secure_url) {
          resolve(data.secure_url);
        } else {
          reject(new Error('Upload failed'));
        }
      })
      .catch(error => reject(error));
  });
};

// Fonction pour optimiser une URL d'image
export const getOptimizedImageUrl = (url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
} = {}) => {
  if (!url.includes('cloudinary.com')) return url;
  
  const { width, height, quality = 'auto', format = 'auto' } = options;
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality !== 'auto') transformations.push(`q_${quality}`);
  if (format !== 'auto') transformations.push(`f_${format}`);
  
  if (transformations.length === 0) return url;
  
  const baseUrl = url.split('/upload/')[0];
  const imagePath = url.split('/upload/')[1];
  
  return `${baseUrl}/upload/${transformations.join(',')}/${imagePath}`;
}; 