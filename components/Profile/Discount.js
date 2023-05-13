import {StyleSheet, View,ToastAndroid } from "react-native";
import styles from "../styles/style";
import {Divider, Text} from "react-native-paper";
import * as Clipboard from 'expo-clipboard';
import theme from "../../theme/theme";
import {useState} from "react";

const Discount = ({title , discritpion ,expire_time , code}) => {
    const [copyText , setCopyText ] = useState('');

    const handelCopy = (code) => {
        Clipboard.setString(code)
        ToastAndroid.show('کد تخفیف کپی شد.', ToastAndroid.SHORT);
        setCopyText('کپی شد !')
        setTimeout(() => {
            setCopyText('')
        } , 1000)
    }
    return (
        <View style={[styles.card , {padding : 15 , marginBottom : 15}]}>
            <View>
                <Text style={{fontFamily: "Bold" , textAlign :"right" , fontSize : 13}}>
                    {title}
                </Text>
                <Text style={{fontFamily: "Light" , textAlign :"right" , fontSize : 11}}>
                    {discritpion}
                </Text>
                <Divider style={{marginVertical : 10}} />
                <View style={styles.row}>
                    <View style={styles.col_auto}>
                            <Text style={innerStyles.badge_gray}>
                                تا
                                {expire_time}
                                دیگر معتبر است
                            </Text>
                    </View>
                    <View style={styles.col}>
                        <Text onPress={() => handelCopy(code)} style={innerStyles.badge_copy}>
                            {!copyText ? 'کپی متن ' + code : copyText}
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    ) ;
}
const innerStyles = StyleSheet.create({
    badge_gray : {
        backgroundColor : theme.colors.gray ,
        padding : 10 ,
        color : "#969696",
        fontSize : 11 ,
        textAlign : "center",
        borderRadius : 10 ,
        fontFamily : "Regular"
    },
    badge_copy : {
        borderColor : theme.colors.primary,
        borderStyle : "dashed",
        borderWidth : 1 ,
        padding : 10 ,
        color : theme.colors.primary,
        fontSize : 11 ,
        textAlign : "center",
        borderRadius : 10 ,
        fontFamily : "Regular"
    }
})
export default Discount;