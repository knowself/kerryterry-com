import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const validateHeadingHierarchy = (headings: HTMLHeadingElement[]): boolean => {
  let currentLevel = 1;
  
  for (const heading of headings) {
    const level = parseInt(heading.tagName[1]);
    
    // Heading levels should not skip levels (e.g., h1 to h3)
    if (level > currentLevel + 1) {
      console.warn(`Invalid heading hierarchy: Skipped heading level ${currentLevel + 1}`);
      return false;
    }
    
    currentLevel = level;
  }
  
  return true;
};

export const validateImageAltText = (images: HTMLImageElement[]): boolean => {
  for (const image of images) {
    if (!image.alt) {
      console.warn(`Missing alt text for image: ${image.src}`);
      return false;
    }
    
    // Alt text should be descriptive (more than just a few characters)
    if (image.alt.length < 5) {
      console.warn(`Alt text too short for image: ${image.src}`);
      return false;
    }
  }
  
  return true;
};

// React component for semantic headings
export const Heading = ({ level, children, className = '' }: HeadingProps) => {
  const Tag = `h${level}`;
  return React.createElement(Tag, { className }, children);
};

// Helper function to generate structured heading IDs
export const generateHeadingId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to extract main keywords from text
export const extractKeywords = (text: string): string[] => {
  const stopWords = new Set(['and', 'or', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'with']);
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
};

// Helper function to generate meta description
export const generateMetaDescription = (text: string, maxLength: number = 160): string => {
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  let description = '';
  
  for (const sentence of sentences) {
    if ((description + sentence).length <= maxLength) {
      description += sentence.trim() + '. ';
    } else {
      break;
    }
  }
  
  return description.trim();
};
