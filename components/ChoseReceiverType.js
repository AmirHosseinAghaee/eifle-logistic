import {StyleSheet, Text, View} from "react-native";
import styles from "./styles/style";
import {Button} from "react-native-paper";
import {useState} from "react";
import theme from "./../theme/theme";
import generateBoxShadowStyle from "./styles/generateBoxShadowStyle";
import { Feather } from '@expo/vector-icons';

function ChoseReceiverType({setDrawer ,handleClosePress,setDrawerHeight,setDrawerType}) {
    const [selected , setSelected] = useState(-1);
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
            <View style={styles.row}>
                <Button mode={'contained-tonal'} style={[innerStyles.btn_shadow , styles.col_6 , innerStyles.new_btn , selected === 0 ? innerStyles.new_btn_active : {}]}
                        onPress={() => {
                            setSelected(0);
                            setDrawerHeight('35%')
                            setDrawerType('BoxResiveCode')
                        }}
                >

                    <Text style={[selected === 0 ? innerStyles.new_btn_active_text : {} ,{fontFamily : "Light"}]}>
                        <Feather name={selected === 0 ? 'check-circle' : 'circle'} />
                        مشتری
                    </Text>
                </Button>
                <Button mode={'contained-tonal'} style={[styles.col_6 , innerStyles.new_btn,selected === 1 ? innerStyles.new_btn_active : {}]}
                        onPress={() => {
                            setSelected(1);
                            setDrawerHeight('60%')
                            setDrawerType('UsersList')
                        }}
                >
                    <Text style={[{fontFamily : "Light" } , selected === 1 ? innerStyles.new_btn_active_text : {}]}>
                        <Feather name={selected === 1 ? 'check-circle' : 'circle'} />
                        ایفل یار
                    </Text>
                </Button>
            </View>
        </View>
    );
}
const innerStyles = StyleSheet.create({
    btn_shadow : generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717') ,
    new_btn : {
        backgroundColor : "#f5f5f5",
        elevation: 5,
        borderRadius : 10
    },
    new_btn_active : {
        borderStyle : "solid" ,
        backgroundColor : "#fff",
        borderWidth : 1 ,
        borderColor : theme.colors.primary
    } ,
    new_btn_active_text : {
        color : theme.colors.primary
    },
})

export default ChoseReceiverType;