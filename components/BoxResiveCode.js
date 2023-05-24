import {createRef, useRef, useState} from "react";
import {Text, View, StyleSheet, Keyboard} from "react-native";
import {Button, TextInput} from "react-native-paper";
import styles from "./styles/style";
import OtpInputs from "./OtpInputs";
import CustomAlert from "./CustomAlert";

const BoxResiveCode = ({count = 5,handleClosePress,setDrawer,setDrawerHeight,setDrawerType}) => {
    const [visible, setVisible] = useState(false);
    const [AlertData, setAlertData] = useState(false);
    const handelSubmitKey = (num) => {
        const inputs = num.join('')
        // console.log(inputs)
        setAlertData({
            color : "success",
            text : "بسته مورد نظر با موفقیت تحویل داده شد.",
            handelConfirm : handelClose,
        })
        if(inputs.length !== 5)
        {
            setAlertData({
                color : "error",
                text : "کد وارد شده صحیح نمی باشد.",
                handelConfirm : () => setVisible(false),
            })
        }
        else
            Keyboard.dismiss();

        setVisible(true);


    }
    const handelClose = () => {
        setDrawerHeight('20%');
        setDrawerType('ChoseReceiverType');
        handleClosePress();
        setDrawer('false')
    }
    return (
        <View style={styles.container}>
            <View style={[styles.row , {justifyContent : "space-between" , marginVertical : 10}]}>
                <Text style={{fontFamily : "Black"}}>
                    کد تحویل بسته
                </Text>
                <Button  mode={'text'} onPress={handelClose}>
                    <Text style={{fontFamily : "Light"}}>
                     بستن
                    </Text>
                </Button>
            </View>
            <OtpInputs
                handelSubmitKey={handelSubmitKey}
                count={5}/>

            <CustomAlert
                status={visible}
                setStatus={setVisible}
                color={AlertData.color}
                handelConfirm={AlertData.handelConfirm}
                text={AlertData.text}
                accept_text={'اوکی'}
            />
        </View>
    );
};
const innerStyles = StyleSheet.create({
    otpArea : {
      flexDirection : "row",
      justifyContent : "space-between"
    },
    otpInput : {
        maxWidth : 60,
        backgroundColor : "#fff",
        borderTopRightRadius : 12 ,
        borderTopLeftRadius : 12 ,
        borderBottomLeftRadius : 12 ,
        borderBottomRightRadius : 12 ,
        borderColor : "#ccc",
        borderWidth : 1 ,
    },
    otpInputContent : {
        fontFamily : 'Black',
        fontSize : 30 ,
        textAlign : "center"
    }
})
export default BoxResiveCode;