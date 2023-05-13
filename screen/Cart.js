import {Image,ScrollView, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Button, Card, Chip, DataTable, Divider, IconButton, Text} from "react-native-paper";
import styles from "../components/styles/style";
import theme from "../theme/theme";
import CartItem from "../components/CartItem";
import CartItems from "../components/CartItems";


export default function Cart (props) {
return (
    <>
    <ScrollView>
        <CartItems />
    </ScrollView>
    <View style={[styles.row, innerStyles.product_footer]}>
        <View style={styles.col}>
            <Text style={{textAlign:"right",fontFamily : "Medium"}}>
                مجموع سبد خرید :
            </Text>
            <View style={styles.row}>
                <Text style={innerStyles.product_footer_price}>
                    1.250.000
                </Text>
                <Text style={{textAlign:"right",fontFamily : "Light" , marginHorizontal : 5}}>
                    ریال
                </Text>
            </View>
            {/*<Text style={innerStyles.product_footer_title}>
                تنها 1 عدد باقیمانده است
            </Text>*/}

        </View>
        <View style={styles.col_auto}>
            <Button mode={'contained'} onPress={() => props.navigation.push("Invoice")}>
                <Text style={{fontFamily : 'Medium' , color : "#fff"}}>
                    تکمیل فرآِیند خرید
                </Text>
            </Button>

        </View>
    </View>
    </>
);
}

const innerStyles = StyleSheet.create({
    product_footer : {
        paddingVertical : 10 ,
        position : "absolute" ,
        bottom : 0 ,
        paddingHorizontal : 20 ,
        elevation : 10,
        shadowColor : "rgba(204,204,204,0.49)",
        backgroundColor : "#fff",
    },
    product_footer_title : {
        textAlign:"right",
        fontFamily : "Light" ,
        color : theme.colors.primary
    },
    product_footer_price : {
        textAlign:"right",
        fontFamily : "Medium",
        fontSize : 20 ,
        color : theme.colors.success
    }
});