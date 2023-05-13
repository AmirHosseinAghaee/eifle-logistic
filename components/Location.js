import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import styles from "./styles/style";
import {Button, DataTable, Divider, IconButton, RadioButton, Text} from "react-native-paper";
import theme from "../theme/theme";
import { Ionicons } from '@expo/vector-icons';
import {useState} from "react";

const Location =() => {
    const [checked ,setChecked] = useState("first");
    return(
        // <View style={[styles.card]}>
        <View>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={innerStyles.card_title}>
                        آدرس ها
                    </Text>
                </View>
                <View style={styles.col_auto}>
                    <Button
                        onPress={()=> console.log('test')}
                        mode={"contained"}
                        style={innerStyles.primary_btn}
                    >
                        <Text style={innerStyles.primary_btn_text}>
                            <Ionicons name="add-circle" size={15} />
                            آدرس جدید
                        </Text>
                    </Button>
                </View>
            </View>
            <TouchableNativeFeedback onPress={() => setChecked('first')}>
                <View style={[styles.row ,innerStyles.address_area ,checked === 'first' ? innerStyles.card_active : {} ]}>
                <View style={styles.col_auto}>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                </View>
                <View style={styles.col}>
                    <Text style={{fontFamily : 'Light',textAlign:'right' , fontSize : 11}}>
                        جزیره قشم، شهر درگهان، پشت پاساژ نور، جنب بانک صادرات (شعبه سرپرستی مناطق آزاد سابق)، دفتر مرکزی برج فروشگاهی ایفل
                    </Text>
                </View>
                <View style={[styles.col_auto ,{display : 'flex' , flexDirection:'row'}]}>
                    <IconButton
                        icon="pencil"
                        color='contained'
                        iconColor={'#fff'}
                        onPress={() => console.log('2')}
                        style={innerStyles.edit_btn}
                    >
                    </IconButton>
                    <IconButton
                        icon="delete"
                        color='contained'
                        iconColor={'#fff'}
                        onPress={() => console.log('2')}
                        style={innerStyles.remove_btn}
                    >
                    </IconButton>
                </View>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => setChecked('second')}>
                <View style={[styles.row ,innerStyles.address_area , checked === 'second' ? innerStyles.card_active : {} ]}>
                    <View style={styles.col_auto}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                    </View>
                    <View style={styles.col}>
                        <Text style={{fontFamily : 'Light',textAlign:'right' , fontSize : 11}}>
                            جزیره قشم، شهر درگهان، پشت پاساژ نور، جنب بانک صادرات (شعبه سرپرستی مناطق آزاد سابق)، دفتر مرکزی برج فروشگاهی ایفل
                        </Text>
                    </View>
                    <View style={[styles.col_auto ,{display : 'flex' , flexDirection:'row'}]}>
                        <IconButton
                            icon="pencil"
                            color='contained'
                            iconColor={'#fff'}
                            onPress={() => console.log('2')}
                            style={innerStyles.edit_btn}
                        >
                        </IconButton>
                        <IconButton
                            icon="delete"
                            color='contained'
                            iconColor={'#fff'}
                            onPress={() => console.log('2')}
                            style={innerStyles.remove_btn}
                        >
                        </IconButton>
                    </View>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => setChecked('third')}>
                <View style={[styles.row ,innerStyles.address_area , checked === 'third' ? innerStyles.card_active : {} ]}>
                    <View style={styles.col_auto}>
                        <RadioButton
                            value="third"
                            status={ checked === 'third' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('third')}
                        />
                    </View>
                    <View style={styles.col}>
                        <Text style={{fontFamily : 'Light',textAlign:'right' , fontSize : 11}}>
                            جزیره قشم، شهر درگهان، پشت پاساژ نور، جنب بانک صادرات (شعبه سرپرستی مناطق آزاد سابق)، دفتر مرکزی برج فروشگاهی ایفل
                        </Text>
                    </View>
                    <View style={[styles.col_auto ,{display : 'flex' , flexDirection:'row'}]}>
                        <IconButton
                            icon="pencil"
                            color='contained'
                            iconColor={'#fff'}
                            onPress={() => console.log('2')}
                            style={innerStyles.edit_btn}
                        >
                        </IconButton>
                        <IconButton
                            icon="delete"
                            color='contained'
                            iconColor={'#fff'}
                            onPress={() => console.log('2')}
                            style={innerStyles.remove_btn}
                        >
                        </IconButton>
                    </View>
                </View>
            </TouchableNativeFeedback>

        </View>
    );
}

const innerStyles = StyleSheet.create({
    card_title : {
        fontFamily:'Black' ,
        textAlign : "right" ,
        paddingVertical : 10 ,
        paddingHorizontal : 15,
    },

    primary_btn : {
        borderRadius : 10,
        marginTop : 10,
        marginBottom : 10,
        marginRight : 'auto',
        marginLeft : 'auto',
        shadowColor : 'rgba(255, 72, 129, 0.36)',
        elevation: 3,
    } ,
    primary_btn_text : {
        fontFamily :"Medium",
        color :"#fff",
    } ,
    address_area : {
        backgroundColor : "#FAFAFA",
        borderColor : "#FAFAFA" ,
        borderWidth : 1 ,
        borderRadius : 15 ,
        marginVertical : 8 ,
        paddingVertical : 15 ,
        shadowColor : 'black',
        elevation: 3,
    },
    card_active : {
        backgroundColor : '#fff',
        borderColor : theme.colors.primary ,
        borderWidth : 1 ,
        shadowColor : theme.colors.primary,
        elevation: 3,

    },
    edit_btn : {
      backgroundColor : theme.colors.success
    },
    remove_btn : {
      backgroundColor : '#E9031E'
    },
});

export default Location;
