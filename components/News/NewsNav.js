import {StyleSheet, View} from "react-native";
import styles from "../styles/style";
import {Button, Text} from "react-native-paper";
import theme from "../../theme/theme";
import {useState} from "react";

function NewsNav() {
    const [selected , setSelected] = useState(0);
    return (
        <View style={styles.row}>
            <Button mode={'contained-tonal'} style={[styles.col_6 , innerStyles.new_btn , selected === 0 ? innerStyles.new_btn_active : {}]}
                    onPress={() => setSelected(0)}
            >
                <Text style={[selected === 0 ? innerStyles.new_btn_active_text : {} ,{fontFamily : "Light"}]}> اخبار جزیره </Text>
            </Button>
            <Button mode={'contained-tonal'} style={[styles.col_6 , innerStyles.new_btn,selected === 1 ? innerStyles.new_btn_active : {}]}
                    onPress={() => setSelected(1)}
            >
                <Text style={[{fontFamily : "Light" } , selected === 1 ? innerStyles.new_btn_active_text : {}]}> اخبار ایفل جزیره </Text>
            </Button>
        </View>
    );
}

const innerStyles = StyleSheet.create({
    new_btn : {
        backgroundColor : "#fff",
        borderRadius : 10
    },
    new_btn_active : {
        borderStyle : "solid" ,
        borderWidth : 1 ,
        borderColor : theme.colors.primary
    } ,
    new_btn_active_text : {
        color : theme.colors.primary
    },
})

export default NewsNav;