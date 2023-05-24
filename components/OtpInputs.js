import styles from "./styles/style";
import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {createRef, useRef, useState} from "react";
import CustomAlert from "./CustomAlert";

function OtpInputs({count=5 , handelSubmitKey}) {
    const [numbers, setNumbers] = useState([]);
    const inputsRef = useRef([ ...Array(count).keys() ].map(() => createRef()));
    const handelOtp = (text,index) => {
        const num = [...numbers];
        num[index] = text ;
        setNumbers(num)
    }

    const handleKeyDown = (e,index) => {

        if(e.nativeEvent.key !== "Backspace")
            inputsRef.current[index+1]?.focus()
        else if(e.nativeEvent.key === "Backspace" && numbers[index] === '')
            inputsRef.current[index-1]?.focus()
    }

    return (
        <View style={[styles.row ,innerStyles.otpArea]}>
            {[ ...Array(count).keys() ].map((item, index) => (
                <View style={styles.col_auto} key={index}>
                    <TextInput
                        style={innerStyles.otpInput}
                        returnKeyType="next"
                        onSubmitEditing={() => { inputsRef.current[index+1].focus() }}
                        ref={(el) => inputsRef.current[index] = el}
                        contentStyle={innerStyles.otpInputContent}
                        onChangeText={(text) => handelOtp(text,index)}
                        onKeyPress={(e) => handleKeyDown(e,index)}
                        value={numbers[index]}
                        mode={'flat'}
                        underlineColor={'transparent'}
                        maxLength={1}
                        keyboardType="numeric"
                    />
                </View>
            ))}
            <Button mode={'contained'} style={{ borderRadius : 10 , width : "100%" , marginTop : 20}}
            onPress={() => handelSubmitKey(numbers)}
            >
                <Text style={{fontFamily : "Light" , color : "#fff"}}>
                تایید
                </Text>
            </Button>

        </View>
    );
}
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
export default OtpInputs;