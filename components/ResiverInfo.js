import {StyleSheet, TextInput, TouchableNativeFeedback, View} from "react-native";
import styles from "./styles/style";
import {Button, DataTable, Divider, IconButton, RadioButton, Text} from "react-native-paper";
import theme from "../theme/theme";
import {AntDesign,Ionicons, Octicons} from '@expo/vector-icons';

import {useState} from "react";

const ResiverInfo =() => {
    const [checked ,setChecked] = useState("first");
    return(
        <View style={[styles.card]}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={innerStyles.card_title}>
                        اطلاعات گیرنده سفارش
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={innerStyles.formInput}>
                    <Text style={{textAlign:"right" , fontFamily : "Regular", fontSize : 12,marginBottom : 5}}>
                        نام گیرنده سفارش
                    </Text>
                    <View style={[styles.row,innerStyles.formGroup]}>
                        <View style={innerStyles.formIcon}>
                            <AntDesign name="user" size={24} color="black" />
                        </View>
                        <View style={styles.col}>
                            <TextInput
                                inputMode={"numeric"}
                                keyboardType={'numeric'}
                                maxLength={11}
                                placeholder={"نام گیرنده"}
                                style={innerStyles.formControl}
                            />
                        </View>
                    </View>
                </View>

                <View style={innerStyles.formInput}>
                    <Text style={{textAlign:"right" , fontFamily : "Regular", fontSize : 12,marginBottom : 5}}>
                        نام خانوادگی گیرنده سفارش
                    </Text>
                    <View style={[styles.row,innerStyles.formGroup]}>
                        <View style={innerStyles.formIcon}>
                            <AntDesign name="user" size={24} color="black" />
                        </View>
                        <View style={styles.col}>
                            <TextInput
                                inputMode={"numeric"}
                                keyboardType={'numeric'}
                                maxLength={11}
                                placeholder={"نام خانوادگی گیرنده"}
                                style={innerStyles.formControl}
                            />
                        </View>
                    </View>
                </View>

                <View style={innerStyles.formInput}>
                    <Text style={{textAlign:"right" , fontFamily : "Regular", fontSize : 12,marginBottom : 5}}>
                        شماره تماس گیرنده سفارش
                    </Text>
                    <View style={[styles.row,innerStyles.formGroup]}>
                        <View style={innerStyles.formIcon}>
                            <AntDesign name="phone" size={24} color="black" />
                        </View>
                        <View style={styles.col}>
                            <TextInput
                                inputMode={"numeric"}
                                keyboardType={'numeric'}
                                maxLength={11}
                                placeholder={"شماره تماس گیرنده"}
                                style={innerStyles.formControl}
                            />
                        </View>
                    </View>
                </View>

                <View style={innerStyles.formInput}>
                    <Text style={{textAlign:"right" , fontFamily : "Regular", fontSize : 12,marginBottom : 5}}>
                        کد پستی گیرنده سفارش
                    </Text>
                    <View style={[styles.row,innerStyles.formGroup]}>
                        <View style={innerStyles.formIcon}>
                            <AntDesign name="mail" size={24} color="black" />
                        </View>
                        <View style={styles.col}>
                            <TextInput
                                inputMode={"numeric"}
                                keyboardType={'numeric'}
                                maxLength={11}
                                placeholder={"کد پستی گیرنده"}
                                style={innerStyles.formControl}
                            />
                        </View>
                    </View>
                </View>

            </View>
            <View>
                <Button
                    onPress={() => console.log('')}
                    mode={"contained"}
                    style={innerStyles.primary_btn}>
                    <Text style={innerStyles.primary_btn_text}> تایید اطلاعات و ادامه </Text>
                </Button>
            </View>

        </View>
    );
}

const innerStyles = StyleSheet.create({
    card_title : {
        fontFamily:'Black' ,
        textAlign : "right" ,
        paddingVertical : 10 ,
        paddingHorizontal : 15,
    },

    primary_btn : {
        paddingVertical : 5,
        paddingHorizontal : 12,
        borderRadius : 10,
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
    address_area : {
        backgroundColor : "#FAFAFA",
        borderColor : "#FAFAFA" ,
        borderWidth : 1 ,
        marginVertical : 8 ,
        paddingVertical : 15 ,
        shadowColor : 'black',
        elevation: 3,
    },
    card_active : {
        backgroundColor : '#fff',
        borderColor : theme.colors.primary ,
        borderWidth : 1 ,
        shadowColor : theme.colors.primary,
        elevation: 3,

    },
    edit_btn : {
      backgroundColor : theme.colors.success
    },
    remove_btn : {
      backgroundColor : '#E9031E'
    },
    login_text : {
        textAlign :"center" ,
        fontFamily : "Black" ,
        marginBottom : 10
    },
    formIcon:{
        backgroundColor : "#fff",
        paddingHorizontal : 13 ,
        paddingVertical : 10 ,
        borderRadius : 100,
        shadowColor : "#ccc",
        elevation: 5,
    },
    formGroup : {
        direction : "rtl" ,
        marginLeft : 'auto' ,
        marginRight : 'auto' ,
        fontFamily : "Light",
        textAlign :"center" ,
        paddingHorizontal : 10 ,
        paddingVertical : 10 ,
        borderRadius : 10,
        shadowColor : "#ccc",
        elevation: 3,
        // transform: [{ scaleX: -1 }],
        backgroundColor : "#FAFAFA",
    },
    formControl : {
        direction : "rtl" ,
        width : "100%",
        fontFamily : "Light",
        textAlign :"right" ,
        paddingHorizontal : 10 ,
    },
    formInput : {
        marginBottom : 15,
    }
});

export default ResiverInfo;
