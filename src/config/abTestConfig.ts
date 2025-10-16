/**
 * A/B Testing Configuration
 * 
 * Toggle these flags to test different variations of UI elements.
 * Set to true/false to switch between variants.
 * 
 * Usage: Import this config and use the flags in your components:
 * import { abTestConfig } from '@/config/abTestConfig';
 * 
 * if (abTestConfig.heroLayout === 'centered') { ... }
 */

export const abTestConfig = {
  // Hero Section Layout
  // Options: 'split' (image + text side by side) or 'centered' (centered text with background)
  heroLayout: 'split' as 'split' | 'centered',
  
  // Portfolio Grid Density
  // Options: 2 or 3 columns on desktop
  portfolioColumns: 3 as 2 | 3,
  
  // Button Style
  // Options: 'filled' (solid background) or 'outlined' (border only)
  primaryButtonStyle: 'filled' as 'filled' | 'outlined',
  
  // Navigation Style
  // Options: 'sticky' (always visible) or 'auto-hide' (hides on scroll down)
  navigationBehavior: 'sticky' as 'sticky' | 'auto-hide',
  
  // Contact Form Position
  // Options: 'right' or 'left' side of the contact section
  contactFormPosition: 'right' as 'right' | 'left',
  
  // Show Stats Section
  showStatsSection: true,
  
  // Show Particle Background
  showParticleBackground: true,
  
  // Animation Intensity
  // Options: 'subtle' (minimal animations) or 'rich' (more pronounced animations)
  animationIntensity: 'subtle' as 'subtle' | 'rich',
  
  // Project Card Hover Effect
  // Options: 'lift' (card lifts up) or 'scale' (card scales up)
  projectCardHover: 'lift' as 'lift' | 'scale',
  
  // Color Scheme Accent
  // Options: 'blue' (default primary) or 'purple' (alternative accent)
  colorAccent: 'blue' as 'blue' | 'purple',
};

/**
 * Helper function to get active variant for analytics tracking
 */
export const getActiveVariants = () => {
  return Object.entries(abTestConfig).reduce((acc, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {} as Record<string, string>);
};
