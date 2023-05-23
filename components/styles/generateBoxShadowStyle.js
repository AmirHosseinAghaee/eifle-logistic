import {Platform} from "react-native";
const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
) => {
    if (Platform.OS === 'ios') {
         return {
            shadowColor: shadowColorIos,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {width: xOffset, height: yOffset},

        };
    } else if (Platform.OS === 'android') {
        return {   elevation,
            shadowColor: shadowColorAndroid,
        };
    } };

export default generateBoxShadowStyle;