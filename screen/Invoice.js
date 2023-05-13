import {ScrollView, StyleSheet, View} from "react-native";
import {Button, Card, Chip, DataTable, Divider, IconButton, MD3Colors, Text} from "react-native-paper";
import theme from "../theme/theme";
import styles from "../components/styles/style";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CartItems from "../components/CartItems";

export default function Invoice (props) {
return (
    <View style={{flex: 1}}>
        <View style={[styles.container]}>
            <View style={[styles.card,{padding : 5 , marginTop : 20}]}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={{textAlign:'right' , fontFamily : "Black"}}>
                            آدرس
                            <Ionicons name="location-outline" size={20} color="black" />
                        </Text>
                    </View>
                    <View style={styles.col_auto}>
                        <IconButton
                            icon="pencil"
                            color='primary'
                            mode={'outlined'}
                            iconColor={theme.colors.primary}
                            onPress={() => console.log('2')}
                            style={innerStyles.edit_btn}
                        >
                        </IconButton>
                    </View>

                </View>
                <Text style={innerStyles.address_text}>
                    جزیره قشم، شهر درگهان، پشت پاساژ نور، جنب بانک صادرات (شعبه سرپرستی مناطق آزاد سابق)، دفتر مرکزی برج فروشگاهی ایفل
                </Text>
            </View>
        </View>
        <ScrollView style={{marginVertical : 10}}>
            <CartItems />
        </ScrollView>
        <View style={[styles.card , innerStyles.bottomDetail]}>
            <Text style={innerStyles.card_title}>
                صورت حساب
            </Text>
            <View>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell style={{justifyContent : "flex-start"}} >
                            <Text style={{fontFamily : "Bold"}}>
                                3 عدد
                            </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{justifyContent : "flex-end"}} >
                            <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                                تعداد کالا:
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{justifyContent : "flex-start"}} >
                            <Text style={{fontFamily : "Bold"}}>
                                4.250.000 ریال
                            </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{justifyContent : "flex-end"}} >
                            <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                                قیمت کل کالا :
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{justifyContent : "flex-start"}} >
                            <Text style={{fontFamily : "Bold"}}>
                                500.000 ریال
                            </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{justifyContent : "flex-end"}} >
                            <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                                هزینه ارسال:
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
            </View>
            <View style={[styles.row,innerStyles.price_area]}>
                <View style={styles.col_6}>
                    <Text style={{textAlign:"right",fontFamily : "Medium" , color : theme.colors.success}}>
                        مبلغ پرداخت شده:
                    </Text>
                </View>
                <View style={styles.col_6}>
                    <Text style={innerStyles.user_type_price_area}>
                        <Text style={innerStyles.user_type_price}>
                            1.250.000
                        </Text>
                        تومان
                    </Text>
                </View>
            </View>
            <Divider/>
            <View>
                <Button
                    onPress={()=> props.navigation.push('Issue')}
                    mode={"contained"}
                    style={innerStyles.primary_btn}
                >
                    <Text style={innerStyles.primary_btn_text}> پرداخت فاکتور </Text>
                </Button>
            </View>
        </View>
    </View>
);
}

const innerStyles = StyleSheet.create({
    address_text : {
        fontFamily : "Light",
        textAlign :"right"
    },
    card_title : {
        fontFamily:'Black' ,
        textAlign : "right" ,
        paddingVertical : 10 ,
        paddingHorizontal : 15,
    },
    edit_btn : {
        borderColor : theme.colors.primary,
        // backgroundColor : "#ccc",
    },
    price_area : {
        backgroundColor : 'rgba(55, 125, 113, 0.13)',
        borderColor : theme.colors.success,
        borderWidth : 1 ,
        borderStyle : "dashed",
        borderRadius : 12,
        paddingVertical : 10,
        paddingHorizontal : 5,
        marginVertical : 10,
    },
    user_type_price_area : {
        fontFamily : "Medium",
        textAlign : "left",
        fontSize : 10 ,
        direction : "rtl",
        color : theme.colors.success
    },
    user_type_price : {
        fontFamily : "Bold",
        textAlign : "right",
        fontSize : 20 ,
        color : theme.colors.success
    } ,
    primary_btn : {
        borderRadius : 20,
        paddingVertical : 8,
        width : 250 ,
        marginTop : 10,
        marginBottom : 10,
        marginRight : 'auto',
        marginLeft : 'auto',
        shadowColor : 'rgba(255, 72, 129, 0.36)',
        elevation: 3,
    } ,
    primary_btn_text : {
        fontFamily :"Medium",
        color :"#fff",
    } ,
    bottomDetail :{
        paddingHorizontal :15 ,

    }
});