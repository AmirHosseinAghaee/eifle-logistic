import {StyleSheet, TextInput, TouchableNativeFeedback, View} from "react-native";
import styles from "./styles/style";
import {Button, Checkbox, DataTable, Divider, IconButton, RadioButton, Text} from "react-native-paper";
import theme from "../theme/theme";
import {AntDesign, Fontisto} from '@expo/vector-icons';
import {useState} from "react";

const Filter = () => {
    const [checked, setChecked] = useState("first");
    return (
        <View style={[styles.card]}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={innerStyles.card_title}>
                        <AntDesign name="filter" size={15}/>
                        فیلتر های جستجو
                    </Text>
                </View>
            </View>
            <View>

            </View>
            <View style={styles.container}>
                <View>
                    <View style={innerStyles.formInput}>
                        <Text style={{textAlign: "right", fontFamily: "Regular", fontSize: 12, marginBottom: 5}}>
                            جستجو کالا
                        </Text>
                        <View style={[styles.row, innerStyles.formGroup]}>
                            <View style={styles.col}>
                                <TextInput
                                    inputMode={"numeric"}
                                    keyboardType={'numeric'}
                                    maxLength={11}
                                    placeholder={"جستجو کالا ...."}
                                    style={innerStyles.formControl}
                                />
                            </View>
                            <View style={innerStyles.formIcon}>
                                <Fontisto name="zoom" size={15} color="black" />
                            </View>
                        </View>
                    </View>

                    <Text style={{fontFamily: "Medium", textAlign: "right"}}>
                        برند
                    </Text>
                    <View>
                        <Checkbox.Item label="Item" status="checked" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const innerStyles = StyleSheet.create({
    card_title: {
        fontFamily: 'Black',
        textAlign: "right",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    primary_btn: {
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        shadowColor: 'rgba(255, 72, 129, 0.36)',
        elevation: 3,
    },
    primary_btn_text: {
        fontFamily: "Medium",
        color: "#fff",
    },
    address_area: {
        backgroundColor: "#FAFAFA",
        borderColor: "#FAFAFA",
        borderWidth: 1,
        marginVertical: 8,
        paddingVertical: 15,
        shadowColor: 'black',
        elevation: 3,
    },
    card_active: {
        backgroundColor: '#fff',
        borderColor: theme.colors.primary,
        borderWidth: 1,
        shadowColor: theme.colors.primary,
        elevation: 3,

    },
    edit_btn: {
        backgroundColor: theme.colors.success
    },
    remove_btn: {
        backgroundColor: '#E9031E'
    },
    formIcon: {
        backgroundColor: "#fff",
        paddingHorizontal: 13,
        paddingVertical: 10,
        borderRadius: 100,
        shadowColor: "#ccc",
        elevation: 5,
    },
    formGroup: {
        direction: "rtl",
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: "Light",
        textAlign: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#ccc",
        elevation: 3,
        // transform: [{ scaleX: -1 }],
        backgroundColor: "#FAFAFA",
    },
    formControl: {
        direction: "rtl",
        width: "100%",
        fontFamily: "Light",
        textAlign: "right",
        paddingHorizontal: 10,
    },
    formInput: {
        marginBottom: 15,
    }


});

export default Filter;
