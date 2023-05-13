import {StyleSheet, View} from "react-native";
import styles from "./styles/style";
import {Text} from "react-native-paper";
import theme from "../theme/theme";
import priceFormat from "../modules/priceFormat";

const Price = ({price , price_without_discount , type='تومان' , title}) => {
    return(
        <View style={{marginBottom : 0}} >
            {
                price_without_discount && (
                    <View style={styles.row}>
                        <Text style={innerStyles.discount}>
                            {
                                Math.round( (((price_without_discount - price) / price_without_discount) * 100 ) ) + "%"
                            }
                        </Text>
                        <Text style={innerStyles.price_discount}>
                            {priceFormat(price_without_discount)}
                        </Text>
                    </View>
                )
            }
            <View style={innerStyles.price_area}>
                {
                    title && (
                        <Text style={innerStyles.price_title}>
                            {title} :
                        </Text>
                    )
                }

                <Text style={innerStyles.price}>
                    {priceFormat(price)}
                </Text>
                <Text style={innerStyles.price_type}>
                    {type}
                </Text>
            </View>

        </View>
    ) ;
}
const innerStyles = StyleSheet.create({
    price_area : {
        display: 'flex' ,
        flexDirection: 'row-reverse' ,
        alignItems : 'center'
    },
    price_title : {
        fontFamily : "Medium" ,
        fontSize : 13 ,
    },
    price : {
        fontFamily : "Bold",
        fontSize : 18 ,
        marginHorizontal : 2,
        color : theme.colors.success
    },
    price_type : {
        fontSize : 12 ,
        fontFamily : "Light"
    } ,
    price_discount : {
        fontFamily : "Light" ,
        fontSize : 12 ,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
    discount : {
        backgroundColor : theme.colors.primary,
        color : '#fff',
        borderRadius : 5 ,
        marginLeft : 5,
        fontSize: 10 ,
        paddingHorizontal : 5 ,
        fontFamily: "Bold"
    },
});
export default Price ;