import styles from "./styles/style";
import {StyleSheet, View} from "react-native";
import {TextInput} from "react-native-paper";
import {createRef, useRef, useState} from "react";

function OtpInputs({count=5}) {
    const [numbers, setNumbers] = useState([]);
    const inputsRef = useRef([ ...Array(count).keys() ].map(() => createRef()));
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