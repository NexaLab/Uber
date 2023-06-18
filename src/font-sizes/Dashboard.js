import { Dimensions, PixelRatio } from "react-native";





const { width } = Dimensions.get('window');
const subtitlePoweredByBaseFontSize = 16;
const scaleFactor = PixelRatio.getFontScale();
const adjustedFontSize = subtitlePoweredByBaseFontSize / scaleFactor;

// Calculate the ratio to scale the font size
const targetWidth = 384; // The width at which you want to maintain the same font size
const ratio = width / targetWidth;

// Calculate the final font size
export const subtitlePoweredByfontSize = adjustedFontSize * ratio;










const sloganTextBaseFontSize = 25
const sloganTextAdjustedFontSize = sloganTextBaseFontSize / scaleFactor;
export const sloganTextFontSize = sloganTextAdjustedFontSize * ratio;







const sloganTextSubtitleBaseFontSize = 13.5;
const sloganTextSubtitleAdjustedFontSize = sloganTextSubtitleBaseFontSize / scaleFactor;
export const sloganTextSubtitleFontSize = sloganTextSubtitleAdjustedFontSize * ratio;








const getARideTextBaseFontSize = 18;
const getARideTextAdjustedFontSize = getARideTextBaseFontSize / scaleFactor;
export const getARideTextFontSize = getARideTextAdjustedFontSize * ratio;
