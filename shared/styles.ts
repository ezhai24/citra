const breakpoints = [767];
export const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`,
);

export const Colors = {
  BRAND: {
    DARK: '#F53280',
    LIGHT: '#FEADDC',
  },
  NEUTRALS: {
    DARKGRAY: '#90908E',
    GRAY: '#E4E4E4',
    BLACK: '#191919',
    WHITE: '#FFFFFF',
  },
};
