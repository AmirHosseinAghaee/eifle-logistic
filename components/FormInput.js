import {StyleSheet, TextInput, View} from "react-native";
import {Text} from "react-native-paper";
import styles from "./styles/style";
import {AntDesign} from "@expo/vector-icons";

const FormInput = ({label,placeholder,inputMode='text' ,keyboardType='default', icon}) => {
    return (
        <View style={innerStyles.formInput}>
            <Text style={{textAlign:"right" , fontFamily : "Regular", fontSize : 12,marginBottom : 5}}>
                {label}
            </Text>
            <View style={[styles.row,innerStyles.formGroup]}>
                <View style={innerStyles.formIcon}>
                    {icon}
                </View>
                <View style={styles.col}>
                    <TextInput
                        inputMode={inputMode}
                        keyboardType={keyboardType}
                        // maxLength={11}
                        placeholder={placeholder}
                        style={innerStyles.formControl}
                    />
                </View>
            </View>
        </View>
    ) ;
}


const innerStyles = StyleSheet.create({
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
export default FormInput ;