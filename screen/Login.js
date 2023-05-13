import {Image, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Button, Text} from "react-native-paper";
import {TextInput} from "react-native";
import theme from "../theme/theme";
import {AntDesign, FontAwesome5, Octicons} from '@expo/vector-icons';
import {useState} from "react";
import styles from "../components/styles/style";
import FormInput from "../components/FormInput";

const Login = (props) => {
    const [text , setText] = useState('');
    const handelOtp = () => {
        console.log('Handel Otp')
        props.navigation.navigate('Otp')
    }
    return (
        <View>
            <View>
                <Text style={innerStyles.bg}> ورود به ایفل یار </Text>
            </View>
            <View style={innerStyles.card}>
                <Image source={require('./../assets/icon.png')} style={{marginLeft :"auto" ,marginRight :"auto" ,marginBottom : 50}}/>
                <View style={[styles.container]}>
                    <View style={[styles.row , {justifyContent : "center"}]}>
                        <View style={styles.col_8}>
                            <FormInput
                                label={'نام کاربری'}
                                placeholder={'نام کاربری'}
                                keyboardType={'default'}
                                inputMode={'text'}
                                icon={<AntDesign name="user" size={24} color="black" />}
                            />
                            <FormInput
                                label={'رمز عبور'}
                                placeholder={'رمز عبور'}
                                keyboardType={'default'}
                                inputMode={'text'}
                                icon={<AntDesign name="lock" size={24} color="black" />}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Button
                        onPress={handelOtp} mode={'contained-tonal'}
                        mode={"contained"} style={innerStyles.primary_btn}>
                        <Text style={innerStyles.primary_btn_text}> ارسال کد تایید </Text>
                    </Button>
                </View>
                <View>
                    <TouchableNativeFeedback>
                    <Button style={innerStyles.tonal_btn}>

                        <Text style={innerStyles.tonal_btn_text}> کد معرف </Text>
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
        paddingTop : 50,
        paddingRight : 20,
        paddingLeft : 20,
        paddingBottom : 80,
        fontFamily : "Light" ,
        color : "#fff",
        fontSize : 20
    },
    icon : {
        textAlign : "center",
        marginBottom : 10
    },
    login_text : {
        textAlign :"right" ,
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
        shadowColor : "#ccc",
        elevation: 3,
        // transform: [{ scaleX: -1 }],
        backgroundColor : "#FAFAFA",
    },
    formControl : {
        direction : "rtl" ,
        width : "100%",
        fontFamily : "Light",
        textAlign :"center" ,
        paddingHorizontal : 10 ,
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
        width : 110,
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

export default Login ;