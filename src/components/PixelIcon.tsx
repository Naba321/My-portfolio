
import React from 'react';

interface PixelIconProps {
  name: 'react' | 'node' | 'typescript' | 'database' | 'cloud';
  className?: string;
}

const PixelIcon: React.FC<PixelIconProps> = ({ name, className = '' }) => {
  const iconPatterns = {
    react: `polygon(
      /* Outer circle */
      12px 4px, 20px 4px, 20px 8px, 24px 8px, 24px 12px, 28px 12px, 28px 20px, 24px 20px, 24px 24px, 20px 24px, 20px 28px, 12px 28px, 12px 24px, 8px 24px, 8px 20px, 4px 20px, 4px 12px, 8px 12px, 8px 8px, 12px 8px, 12px 4px,
      /* Inner circle */
      14px 14px, 18px 14px, 18px 18px, 14px 18px, 14px 14px
    )`,
    node: `polygon(
      /* Main shape */
      8px 4px, 24px 4px, 24px 8px, 28px 8px, 28px 12px, 28px 20px, 24px 20px, 24px 24px, 24px 28px, 8px 28px, 8px 24px, 4px 24px, 4px 20px, 4px 12px, 4px 8px, 8px 8px, 8px 4px,
      /* Detail */
      12px 12px, 20px 12px, 20px 16px, 12px 16px, 12px 12px
    )`,
    typescript: `polygon(
      /* Main square */
      4px 4px, 28px 4px, 28px 28px, 4px 28px, 4px 4px,
      /* T shape */
      12px 8px, 20px 8px, 20px 12px, 18px 12px, 18px 24px, 14px 24px, 14px 12px, 12px 12px, 12px 8px
    )`,
    database: `polygon(
      /* Top ellipse */
      8px 4px, 24px 4px, 24px 8px, 28px 8px, 28px 12px, 24px 12px, 24px 16px,
      /* Bottom ellipse */
      24px 20px, 28px 20px, 28px 24px, 24px 24px, 24px 28px, 8px 28px, 8px 24px, 4px 24px, 4px 20px, 8px 20px,
      /* Connect sides */
      8px 16px, 4px 16px, 4px 12px, 8px 12px, 8px 4px
    )`,
    cloud: `polygon(
      /* Cloud shape */
      8px 12px, 12px 12px, 12px 8px, 20px 8px, 20px 12px, 24px 12px, 24px 16px, 28px 16px, 28px 20px, 24px 20px, 24px 24px, 8px 24px, 8px 20px, 4px 20px, 4px 16px, 8px 16px, 8px 12px
    )`
  };

  const getColor = () => {
    switch (name) {
      case 'react': return 'bg-pixel-blue';
      case 'node': return 'bg-pixel-green';
      case 'typescript': return 'bg-pixel-blue';
      case 'database': return 'bg-pixel-purple';
      case 'cloud': return 'bg-pixel-yellow';
      default: return 'bg-pixel-blue';
    }
  };

  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className={`absolute inset-0 ${getColor()}`} style={{ 
        clipPath: iconPatterns[name],
        imageRendering: 'pixelated'
      }} />
    </div>
  );
};

export default PixelIcon;
