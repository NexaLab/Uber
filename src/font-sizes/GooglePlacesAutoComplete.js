import { Dimensions, PixelRatio } from "react-native";





const { width } = Dimensions.get('window');
const scaleFactor = PixelRatio.getFontScale();






// Calculate the ratio to scale the font size
const targetWidth = 384; // The width at which you want to maintain the same font size
const ratio = width / targetWidth;









const dropUpLocationBaseFontSize = 16;
const dropUpLocationAdjustedFontSize = dropUpLocationBaseFontSize / scaleFactor;
export const dropUpLocationFontSize = dropUpLocationAdjustedFontSize * ratio;