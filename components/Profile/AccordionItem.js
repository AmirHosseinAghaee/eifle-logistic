import styles from "../styles/style";
import {Alert, Linking, Platform, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Button, Chip, Divider, IconButton} from "react-native-paper";
import theme from "../../theme/theme";
import Animated, {FadeOut, Layout, SlideInRight} from "react-native-reanimated";
import {useState} from "react";

function AccordionItem({setDrawer,type,setDrawerHeight,index}) {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);
    const callNumber = phone => {
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else  {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };


    return (
        <TouchableNativeFeedback onPress={handlePress} >
            <Animated.View
                entering={SlideInRight.delay(index*30)}
                exiting={FadeOut}
                layout={Layout.springify()}
                style={[styles.card, {marginBottom: 10 , padding: 10 , overflow:'hidden'}]}>
            <View onPress={handlePress} style={[styles.row]}>
                    <View style={styles.col}>
                        <Text style={{fontFamily: "ExtraBold"}}>
                            شماره سفارش 1135984
                        </Text>
                    </View>
                <View style={styles.col_auto}>
                    <View style={styles.row}>
                        {
                            type === 'my_box' && (
                                <IconButton  icon="phone" mode={'outlined'} onPress={() => callNumber('0912345678')} />

                            )
                        }

                        {
                            expanded ? (
                                <IconButton  icon="close" mode={'outlined'} onPress={handlePress} />
                                ) : (
                                <IconButton icon="dots-horizontal" mode={'outlined'} onPress={handlePress} />
                                )
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
                                            <Button mode={"contained"} style={innerStyles.rounded} onPress={() => {
                                                setDrawer('open');
                                                setDrawerHeight('20%')
                                            }}>
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

        </Animated.View>
        </TouchableNativeFeedback>
    );
}

const innerStyles = StyleSheet.create({
    rounded : {
        borderRadius : 10 ,
    }
})

export default AccordionItem;