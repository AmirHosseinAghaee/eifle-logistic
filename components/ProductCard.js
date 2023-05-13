import styles from "./styles/style";
import {Image, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Button, Text} from "react-native-paper";
import {Entypo,EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";

import Price from "./Price";
import theme from "../theme/theme";

const ProductCard = ({navigation}) => {
    return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Product')} >
        <View style={[styles.card , {marginBottom : 10}]}>
            <View style={styles.row}>
                <View style={styles.col_3}>
                    <Image style={{width: '100%' , height : 150,resizeMode : "contain"}} source={require('./../assets/images/product_1.png')} />
                </View>
                <View style={styles.col}>
                    <Text style={innerStyles.cart_title}>
                        بافت راه راه قهوه ای کد مدل 2022145
                    </Text>
                    <View style={[styles.row]}>
                        <View style={styles.col}>
                            <Text style={{textAlign: "right"}}>
                                <Text style={innerStyles.cart_badge_warning}>
                                    <Entypo name="shop" size={12} />
                                    فروشگاه ایفل
                                </Text>
                            </Text>
                            <View style={styles.row}>
                                <EvilIcons name="location" size={24} color="black" />
                                <Text style={{fontFamily : "Light" , fontSize : 12}}>
                                    قشم
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.col]}>
                            <Price
                                price={2500000}
                                price_without_discount={3000000}
                                type={'تومان'}
                            />
                          {/*  <Button disabled={true} mode={'contained'}>
                                <Text style={{fontFamily : "Light" , padding : 0}}>
                                    ناموجود
                                </Text>
                            </Button>*/}
                        </View>
                    </View>

                </View>
            </View>
        </View>
        </TouchableNativeFeedback>
    );
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
        color :  '#908787' ,
        backgroundColor : '#F3F3F3'
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

export default  ProductCard ;