import {StyleSheet} from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20 ,
    },
    bellHeaderBadge: {
        position: 'absolute',
        top: 4,
        right: 6,
        backgroundColor: theme.colors.primary,
        fontFamily: "Medium"
    },
    text: {
        color: '#393939',
        fontWeight: 'bold',
        fontFamily: "Medium"
    },
    slide: {
        fontFamily: "Medium"
    },
    row: {
        // --bs-gutter-x: 1.5rem;
        // --bs-gutter-y: 0;
        direction:"rtl",
        display: 'flex',
        flexDirection : "row-reverse",
        flexWrap: 'wrap',
        marginHorizontal: 0,
        alignItems:"center",
        // width : "100%",
    },
    justifyContentBetween :{
        justifyContent: 'space-between',
    },
    fontExtraLight : {
        fontFamily :"ExtraLight"
    },
    fontLight : {
        fontFamily :"Light"
    },
    fontRegular : {
        fontFamily :"Regular"
    },
    fontMedium : {
        fontFamily :"Medium"
    },
    fontBold : {
        fontFamily :"Bold"
    },
    fontExtraBold : {
        fontFamily :"ExtraBold"
    },
    fontBlack : {
        fontFamily :"Black"
    },
    fontSemiBold : {
        fontFamily :"SemiBold"
    },
    fontThin : {
        fontFamily :"Thin"
    },
    textCenter : {
        textAlign : "center"
    },
    moreBtn : {
        fontFamily : "Medium",
        fontSize : 12,
    },
    btn: {
        width: 200,
    },
    persianFont: {
        fontFamily: "Bold"
    },
    category_title : {
        fontFamily : "ExtraBold",
        fontSize : 13,
    },
    card : {
        backgroundColor : "#fff",
        shadowColor : "#ccc",
        elevation: 3,
        borderRadius : 15 ,

    },
    col: {
        flex: 1,
        padding : 5
    },
    col_auto: {
        flex: 0,
        width: 'auto' ,
        padding :5,
    },
    col_1: {
        flex: 0,
        width: ' 8.33333333%',
        padding :5,
    },
    col_2: {
        flex: 0,
        width: ' 16.66666667%',
        padding :5,
    },
    col_3: {
        flex: 0,
        width: ' 25%',
        padding :5,
    },
    col_4: {
        flex: 0,
        width: ' 33.33333333%',
        padding :5,
    },
    col_5: {
        flex: 0,
        width: ' 41.66666667%',
        padding :5,
    },

    col_6: {
        flex: 0,
        width: ' 50%',
        padding :5,
    },
    col_7: {
        flex: 0,
        width: ' 58.33333333%',
        padding :5,
    },
    col_8: {
        flex: 0,
        width: ' 66.66666667%',
        padding :5,
    },
    col_9: {
        flex: 0,
        width: ' 75%',
        padding :5,
    },
    col_10: {
        flex: 0,
        width: ' 83.33333333%',
        padding :5,
    },

    col_11: {
        flex: 0,
        width: ' 91.66666667%',
        padding :5,
    },
    col_12: {
        flex: 0,
        width: ' 100%',
        padding :5,
    },
    product_btn : {
        padding : 0 ,
        marginRight : 'auto' ,
        marginLeft : "auto"
    },
    product_btn_text : {
        fontFamily : "Medium",
        fontSize : 12,
        padding : 0 ,
    } ,

});

// export const generateBoxShadowStyle = (
//     xOffset,
//     yOffset,
//     shadowColorIos,
//     shadowOpacity,
//     shadowRadius,
//     elevation,
//     shadowColorAndroid,
// ) => {
//     if (Platform.OS === 'ios') {
//         styles.boxShadow = {
//             shadowColor: shadowColorIos,
//             shadowOpacity,
//             shadowRadius,
//             shadowOffset: {width: xOffset, height: yOffset},
//
//         };
//     } else if (Platform.OS === 'android') {
//         styles.boxShadow = {   elevation,
//             shadowColor: shadowColorAndroid,
//         };
//     } };

export default styles;