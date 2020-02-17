import { lightenDarkenColor } from "../utils/style";

// Theme colors
export const primaryColor = "#0078D4";
export const secondaryColor = "#348983";
// Text colors
export const textColor = "#D8ECEA";
export const brightTextColor = lightenDarkenColor(textColor, 120);
export const darkTextColor = lightenDarkenColor(textColor, 80);
// Other colors
export const whiteColor = "#FFFFFF";

// Screen resolutions
export const smallScrWidth = "768px";
export const mediumScrWidth = "1024px";
export const largeScrWidth = "1366px";

// Font sizes
export const smallFont = "12px";
export const normalFont = "16px";
export const largeFont = "24px";
export const xLargeFont = "32px";
