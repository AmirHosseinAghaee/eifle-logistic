import styles from "../styles/style";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import theme from "../../theme/theme";
import priceFormat from "../../modules/priceFormat";

const WalletTransaction = ({title , description , price , type}) => {
    return (<View style={[styles.card , {padding : 10 , marginBottom : 15}]}>
        <View style={styles.row}>
            <View style={styles.col}>
                <Text style={{fontFamily: "Bold" , textAlign :"right"}}>
                    {title}
                </Text>
                <Text style={{fontFamily: "Light" , textAlign :"right"}}>
                    {description}
                </Text>
            </View>
                <View style={styles.row}>
                    <Text style={ type === "add" ?  innerStyles.price_add_text :innerStyles.price_minus_text }>
                        {
                            type === "add" ? '+' : '-'
                        }
                    </Text>
                    <Text style={type === "add" ? innerStyles.price_add : innerStyles.price_minus}>
                        {priceFormat(price)}
                    </Text>
                    <Text style={ type === "add" ?  innerStyles.price_add_text :innerStyles.price_minus_text }>
                        تومان
                    </Text>
                </View>


        </View>
    </View>)
}


const innerStyles = StyleSheet.create({

    price_minus : {
        fontFamily : "Bold" ,
        fontSize : 15,
        marginHorizontal : 5 ,
        color : theme.colors.primary
    } ,
    price_minus_text : {
        fontFamily : "Medium" ,
        fontSize : 12,
        color : theme.colors.primary
    } ,
    price_add : {
        fontFamily : "Bold" ,
        fontSize : 15,
        marginHorizontal : 5 ,
        color : theme.colors.success
    } ,
    price_add_text : {
        fontFamily : "Medium" ,
        fontSize : 12,
        color : theme.colors.success
    }
})

export default  WalletTransaction ;