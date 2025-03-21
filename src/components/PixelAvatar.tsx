
import React from 'react';

interface PixelAvatarProps {
  className?: string;
}

const PixelAvatar: React.FC<PixelAvatarProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-32 h-32 md:w-40 md:h-40 mx-auto ${className}`}>
      <div className="absolute inset-0 bg-pixel-blue animate-pulse-pixel" style={{ 
        clipPath: `polygon(
          /* Head */
          8px 8px, 24px 8px, 24px 24px, 8px 24px,
          /* Body */
          8px 32px, 24px 32px, 24px 48px, 8px 48px,
          /* Left Arm */
          0px 32px, 8px 32px, 8px 48px, 0px 48px,
          /* Right Arm */
          24px 32px, 32px 32px, 32px 48px, 24px 48px,
          /* Left Leg */
          8px 48px, 16px 48px, 16px 64px, 8px 64px,
          /* Right Leg */
          16px 48px, 24px 48px, 24px 64px, 16px 64px
        )`,
        transform: 'scale(2.5)',
        imageRendering: 'pixelated'
      }} />
      
      {/* Eyes */}
      <div className="absolute bg-background dark:bg-background" style={{ 
        top: '28%', 
        left: '37%', 
        width: '4px', 
        height: '4px',
        transform: 'scale(2.5)',
        imageRendering: 'pixelated'
      }} />
      <div className="absolute bg-background dark:bg-background" style={{ 
        top: '28%', 
        left: '53%', 
        width: '4px', 
        height: '4px',
        transform: 'scale(2.5)',
        imageRendering: 'pixelated'
      }} />
    </div>
  );
};

export default PixelAvatar;
