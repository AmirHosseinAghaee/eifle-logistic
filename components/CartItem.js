import styles from "./styles/style";
import {Image, StyleSheet, View} from "react-native";
import {IconButton, Text} from "react-native-paper";
import theme from "../theme/theme";
import {useState} from "react";
import Price from "./Price";
import { FontAwesome ,MaterialCommunityIcons } from '@expo/vector-icons';

const CartItem = () => {
    const [count ,setCount] = useState(1);
    const handleCounter = (type) => {
        if(type=== 'add')
            setCount(count + 1);
        else if (type=== 'minus' && count >= 1)
            setCount(count - 1);
    }
    return (
        <View style={[styles.card , {marginBottom : 10}]}>
            <View style={styles.row}>
            <View style={styles.col_3}>
                <Image style={{width: '100%' , height : 200,resizeMode : "contain"}} source={require('./../assets/images/product_1.png')} />
            </View>
            <View style={styles.col}>
                <Text style={innerStyles.cart_title}>
                    بافت راه راه قهوه ای کد مدل 2022145
                </Text>
                <Text  style={{textAlign: "right"}}>
                    <Text style={[styles.row ,innerStyles.cart_badge_warning]}>
                        <MaterialCommunityIcons name="check-decagram" size={12}  />
                        <Text style={{fontFamily : "Medium"}}>
                        محصول ویژه کاربران طلایی
                        </Text>
                    </Text>
                </Text>
                <View  style={innerStyles.cart_badges_row}>
                    <Text  style={innerStyles.cart_badges}>
                        سرخابی
                    </Text>
                    <Text  style={innerStyles.cart_badges}>
                        XXL
                    </Text>
                </View>
                <Text  style={{textAlign: "right"}}>
                    <Text style={innerStyles.cart_badge_success}>
                        <FontAwesome name="money" size={12} />
                        خرید نقدی
                    </Text>
                </Text>
                <View style={{display: 'flex' ,flexDirection: 'row-reverse' , justifyContent : "space-between" , alignItems : "center"}}>
                    <Price
                        title={'قیمت'}
                        price={250000}
                        type={'تومان'}
                    />
                    <View style={{display: 'flex' ,flexDirection: 'row-reverse' , alignItems : "center"}}>
                        <IconButton
                            icon="plus"
                            iconColor={"#fff"}
                            containerColor={theme.colors.primary}
                            size={10}
                            onPress={() => handleCounter('add')}
                        />
                        <Text style={{fontFamily : "Medium" , width : 21 , textAlign : 'center'}}>
                            {count}
                        </Text>
                        <IconButton
                            icon="minus"
                            iconColor={"#fff"}
                            containerColor={theme.colors.primary}
                            size={10}
                            onPress={() => handleCounter('minus')}
                        />
                    </View>
                </View>
            </View>
        </View>
        </View>
    ) ;
}

const innerStyles = StyleSheet.create({
    cart_title : {
        fontFamily : "Bold" ,
        textAlign : "right"
    },
    cart_badge_warning : {
        fontFamily : "Medium" ,
        textAlign : "right" ,
        fontSize : 12 ,
        color :  '#EAA800' ,
        backgroundColor : theme.colors.warning
    },
    cart_badge_success : {
        fontFamily : "Medium" ,
        fontSize : 12 ,
        textAlign : "right" ,
        color :  theme.colors.success ,
        width : 'auto' ,
        backgroundColor : 'rgba(55, 125, 113, 0.15)' ,
    },
    cart_badges_row : {
        marginVertical : 5 ,
        display : "flex" ,
        flexDirection : "row-reverse"
    },
    cart_badges : {
        borderRadius : 10 ,
        paddingVertical : 5 ,
        paddingHorizontal : 10  ,
        fontSize : 11 ,
        borderColor : "#ccc" ,
        marginLeft : 5 ,
        borderWidth : 1 ,
        fontFamily : "Light"
    },
});

export default CartItem ;