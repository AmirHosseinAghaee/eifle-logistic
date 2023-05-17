import styles from "../styles/style";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Button, Chip, Divider} from "react-native-paper";
import theme from "../../theme/theme";
import {useState} from "react";

function AccordionItem({setDrawer,type}) {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);

    return (
        <TouchableNativeFeedback onPress={handlePress} >
            <View style={[styles.card, {marginBottom: 10 , padding: 10}]}>
            <View onPress={handlePress} style={[styles.row]}>
                <View style={styles.col}>
                    <Text style={{fontFamily: "ExtraBold"}}>
                        شماره سفارش 1135984
                    </Text>
                </View>
                <View style={styles.col_auto}>
                    <View style={styles.row}>
                        {
                            type === 'my_box' && <Ionicons onPress={() => console.log("give box")} name="call-outline" size={20} style={{marginLeft : 10}} color="black"/>
                        }

                        {
                            expanded ? (<Ionicons name="chevron-up" size={24} color="black"/>) : (
                                <Ionicons  name="chevron-down" size={24} color="black"/>)
                        }
                    </View>


                </View>
            </View>
            {
                expanded && (
                    <View style={[styles.col_12]}>
                        <Text style={{fontFamily : "Light" , color : "#6B6B6B"}}>
                            آدرس :
                        </Text>
                        <Text style={{fontFamily : "Light"}}>
                            جزیره قشم، شهر درگهان، پشت پاساژ نور، جنب بانک صادرات (شعبه سرپرستی مناطق آزاد سابق)، دفتر مرکزی برج فروشگاهی ایفل
                        </Text>
                        <Divider style={{marginVertical : 10}} />
                        <View style={[styles.row , {justifyContent : "space-between"}]}>
                            <View style={styles.col_auto}>
                                <Chip textStyle={{color : theme.colors.primary}}>
                                    <Text style={{fontFamily : "Light"}}>
                                        زمان تحویل :
                                        <Text style={{fontFamily : "Bold"}}>
                                            یک شنبه 23 اسفند
                                        </Text>
                                    </Text>
                                </Chip>
                            </View>
                            <View style={styles.col_auto}>
                                <View style={styles.row}>
                                    {
                                        type !== 'wating' && (
                                            <Button mode={"contained"} style={innerStyles.rounded} onPress={() => setDrawer('open')}>
                                                <Text style={{fontFamily : "Light"}}>
                                                    تحویل بسته
                                                </Text>
                                            </Button>
                                        )
                                    }

                                    {
                                        type === 'wating' && (
                                            <>
                                                <Button mode={"outlined"} style={[ innerStyles.rounded , {borderColor : theme.colors.primary , marginLeft : 5}]} onPress={() => console.log("give box")}>
                                                    <Text compact={true} style={{fontFamily : "Light"}}>
                                                        رد
                                                    </Text>
                                                </Button>

                                                <Button mode={"contained"} style={innerStyles.rounded} buttonColor={theme.colors.success} onPress={() => console.log("give box")}>
                                                    <Text style={{fontFamily : "Light"}}>
                                                        تایید
                                                    </Text>
                                                </Button>
                                            </>
                                        )
                                    }

                                </View>

                            </View>
                        </View>
                    </View>
                )
            }

        </View>
        </TouchableNativeFeedback>
    );
}

const innerStyles = StyleSheet.create({
    rounded : {
        borderRadius : 10 ,
    }
})

export default AccordionItem;