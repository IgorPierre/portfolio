export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const media = {
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  mdUp: `@media (min-width: 769px)`,
  lgUp: `@media (min-width: 1025px)`,
};
