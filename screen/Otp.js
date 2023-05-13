import {useState} from "react";
import {Button, Text} from "react-native-paper";
import {TextInput, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import theme from "../theme/theme";
import { AntDesign , FontAwesome5 , Octicons } from '@expo/vector-icons';
import styles from "../components/styles/style";

const Otp = (props) => {
    const [text , setText] = useState('');
    const [otp_input_count , set_otp_input_count] = useState(4);
    const handelNextInput = (index)=> {

    }

    return (
        <View>
            <View>
                <Text style={innerStyles.bg}> تایید ورود به ایفل </Text>
            </View>
            <View style={innerStyles.card}>
                <AntDesign style={innerStyles.icon} name="message1" size={100} color="black" />
                <Text style={innerStyles.login_text}>
                    کد تایید 4 رقمی ارسال شده را وارد نمایید
                </Text>
                <View style={styles.container}>
                    <View style={[styles.row,innerStyles.formGroup]}>
                        <View style={styles.col}>
                            <View style={styles.row}>
                                {
                                    [...Array(otp_input_count).keys()].map((input,index) => (
                                        <View style={styles.col} key={index}>
                                            <TextInput
                                                inputMode={"numeric"}
                                                keyboardType={'numeric'}
                                                maxLength={1}
                                                style={innerStyles.formControl}
                                            />
                                        </View>
                                    ))
                                }
                            </View>

                        </View>
                    </View>


                </View>
                <View>
                    <Button
                        onPress={() => props.navigation.push('Home')}
                        mode={"contained"} style={innerStyles.primary_btn}>
                        <Text style={innerStyles.primary_btn_text}>
                            ورود به اپلیکیشن
                        </Text>
                    </Button>
                </View>
                <View>
                    <TouchableNativeFeedback>
                    <Button mode={'contained-tonal'} style={innerStyles.tonal_btn}>

                        <Text style={innerStyles.tonal_btn_text}> اصلاح شماره موبایل </Text>
                    </Button>
                    </TouchableNativeFeedback>
                </View>
            </View>

        </View>
    );
}

const innerStyles = StyleSheet.create({
    bg : {
        backgroundColor : theme.colors.primary ,
        textAlign : "center" ,
        paddingTop : 20,
        paddingRight : 20,
        paddingLeft : 20,
        paddingBottom : 80,
        fontFamily : "Light" ,
        color : "#fff",
        fontSize : 20
    },
    icon : {
        textAlign : "center",
        marginBottom : 20
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
        width : "80%",
        marginLeft : 'auto' ,
        marginRight : 'auto' ,
        fontFamily : "Light",
        textAlign :"center" ,
        paddingHorizontal : 10 ,
        paddingVertical : 10 ,
        borderRadius : 10,
        // shadowColor : "#ccc",
        // elevation: 3,
        // transform: [{ scaleX: -1 }],
        // backgroundColor : "#FAFAFA",
    },
    formControl : {
        direction : "rtl" ,
        width : "100%",
        height : 50 ,
        fontFamily : "Light",
        textAlign :"center" ,
        backgroundColor : "#FAFAFA",
        paddingHorizontal : 10 ,
        borderRadius : 10 ,
    },
    card : {
        backgroundColor : "#fff",
        height : "100%" ,
        marginTop : -50 ,
        paddingBottom : 100,
        borderRadius : 50 ,
        display : "flex" ,
        justifyContent : "center"
    },
    primary_btn : {
        borderRadius : 10,
        padding : 10 ,
        width : 200 ,
        marginTop : 10,
        marginRight : 'auto',
        marginLeft : 'auto',
        shadowColor : 'rgba(255, 72, 129, 0.36)',
        elevation: 3,
    },
    primary_btn_text : {
       fontFamily :"Medium",
        color :"#fff",
    },
    tonal_btn : {
        borderRadius : 10,
        padding : 0 ,
        width : 180,
        marginTop : 40,
        marginRight : 'auto',
        marginLeft : 'auto',
        backgroundColor : theme.colors.primaryContainer
    },
    tonal_btn_text : {
        fontFamily :"Medium",
        fontSize : 12 ,
        padding : 0 ,
        color :theme.colors.primary,
    },

});

export default Otp ;