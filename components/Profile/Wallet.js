import theme from "../../theme/theme";
import styles from "../styles/style";
import {View, StyleSheet, ScrollView} from "react-native";
import {FontAwesome5 , MaterialCommunityIcons } from "@expo/vector-icons";
import {Button, Text} from "react-native-paper";
import WalletTransaction from "./WalletTransaction";

const Wallet = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.card , {marginTop : 30 , padding : 20}]}>
            <View style={[styles.row , {justifyContent : "center"}]}>
                <FontAwesome5 name="coins" style={{marginLeft:  5}} />
                <Text style={{fontFamily : "Bold" , textAlign : "center"}}>
                    اعتبار فعلی
                </Text>
            </View>
            <View style={[styles.row , innerStyles.wallet_price_area]}>
                <Text style={innerStyles.wallet_price_area_price}>
                    1,000,000
                </Text>
                <Text style={innerStyles.wallet_price_type}>
                    تومان
                </Text>
            </View>
            <View>
                <Button mode={'contained'} style={innerStyles.wallet_increse_btn}
                onPress={() => console.log('ok')}
                >
                    <Text style={innerStyles.wallet_increse_btn_text}> افزایش اعتبار </Text>
                </Button>
            </View>
        </View>
            <View style={[ styles.row ,  {marginTop : 20}]}>
                <MaterialCommunityIcons style={{marginLeft : 5}} name="bank-transfer" size={24} color="black" />
                <Text style={innerStyles.title}>
                    تراکنش های ایفل جزیره
                </Text>
            </View>
            <ScrollView>
                <View style={{paddingBottom : 350}}>


                <WalletTransaction
                    title={'برداشت از کیف پول'}
                    description={'خرید یک دستگاه جاروبرقی'}
                    price={15000000}
                    type={'minus'}
                />


                <WalletTransaction
                    title={'افزایش موجودی'}
                    description={'هدیه به مناسبت روز مرد'}
                    price={500000}
                    type={'add'}
                />

                <WalletTransaction
                    title={'افزایش موجودی'}
                    description={'هدیه به مناسبت روز تولد'}
                    price={1000}
                    type={'add'}
                />
                </View>
            </ScrollView>
        </View>
    );
}

const innerStyles = StyleSheet.create({
    wallet_price_area : {
        backgroundColor : theme.colors.gray,
        padding : 15 ,
        justifyContent : "center"
    },
    wallet_price_area_price : {
        fontFamily : "Bold" ,
        fontSize : 20 ,
        color : theme.colors.success
    },
    wallet_price_type : {
        fontFamily : "Light" ,
        fontSize : 12 ,
        marginRight : 5 ,
        color : theme.colors.success
    },
    wallet_increse_btn : {
        borderRadius : 12 ,
        paddingVertical : 10 ,
        marginVertical : 15 ,
    },
    wallet_increse_btn_text : {
        fontFamily : "Medium" ,
        color  : "#fff" ,
    } ,
    title : {
        fontFamily : "Bold" ,
        textAlign : "right"
    } ,
});

export default  Wallet ;