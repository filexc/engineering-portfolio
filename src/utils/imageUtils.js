// Utility function to get the correct image path for both local and production
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // For GitHub Pages, we need to include the repository name
  if (process.env.NODE_ENV === 'production') {
    return `/engineering-portfolio/${cleanPath}`;
  }
  
  // For local development, use the path as-is
  return `/${cleanPath}`;
};
