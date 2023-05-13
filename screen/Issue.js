import {StyleSheet, View} from "react-native";
import {Button, Card, Chip, DataTable, Divider, Text} from "react-native-paper";
import theme from "../theme/theme";
import styles from "../components/styles/style";
import { AntDesign } from '@expo/vector-icons';

export default function Issue (props) {
return (
    <View style={[styles.container,innerStyles.message_container]}>
    <View style={[styles.card , {width : '100%' , paddingHorizontal : 10}]}>
        <AntDesign name="checkcircleo" size={40} style={innerStyles.message_icon} />
        <Text style={innerStyles.successMessage}>
            خرید شما با موفقیت انجام  گردید
        </Text>
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell style={{justifyContent : "flex-start"}} >
                        <Text style={{fontFamily : "Bold"}}>
                            0912365478
                        </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{justifyContent : "flex-end"}} >
                        <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                            شماره تلفن :
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{justifyContent : "flex-start"}} >
                        <Text style={{fontFamily : "Bold"}}>
                            1401/11/17 - 23:45
                        </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{justifyContent : "flex-end"}} >
                        <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                            تاریخ و ساعت :
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{justifyContent : "flex-start"}} >
                        <Text style={{fontFamily : "Bold"}}>
                            7569332111565798
                        </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{justifyContent : "flex-end"}} >
                        <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                            شماره پیگیری :
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
                onPress={()=> props.navigation.push('Profile')}
                mode={"contained"}
                style={innerStyles.primary_btn}
            >
                <Text style={innerStyles.primary_btn_text}> پیگیری خرید </Text>
            </Button>
        </View>
    </View>
    </View>
);
}

const innerStyles = StyleSheet.create({
    message_container : {
        display : "flex" ,
        justifyContent :"center" ,
        alignItems  : "center" ,
        height : '100%' ,
    },
    message_icon : {
      textAlign :"center" ,
        color : theme.colors.success,
        paddingTop : 20
    },
    successMessage : {
        fontFamily : "Black",
        textAlign : "center",
        color : theme.colors.success,
        paddingVertical : 10
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
        width : 200 ,
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
    }
});