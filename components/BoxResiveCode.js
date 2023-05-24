import {createRef, useRef, useState} from "react";
import {Text,View, StyleSheet} from "react-native";
import {Button, TextInput} from "react-native-paper";
import styles from "./styles/style";
import OtpInputs from "./OtpInputs";

const BoxResiveCode = ({count = 5,handleClosePress,setDrawer,setDrawerHeight,setDrawerType}) => {
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
                handleClosePress={handleClosePress}
                count={5}/>
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