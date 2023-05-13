import {ScrollView, View} from "react-native";
import styles from "../styles/style";
import {Divider, Text} from "react-native-paper";
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import theme from "../../theme/theme";
import Price from "../Price";

const UserRolePlan = () => {
    return (  <ScrollView horizontal={true} style={{width: "100%" , marginTop : 10 , height: 300 ,transform: [{ scaleX: -1 }]}}>
        <View style={[styles.row,{transform: [{ scaleX: -1 }]}]}>
            <View style={[{width: 180 , marginLeft : 10}]}  >
                <View style={[styles.card,innerStyles.card_active , {padding : 15}]}>
                    <Text style={
                        {
                            fontFamily :"Light",
                            fontSize: 10 ,
                            textAlign : "center"
                        }}>
                        ماهانه
                    </Text>
                    <Text style={
                        {
                            fontFamily : "Bold" ,
                            paddingBottom : 20 ,
                            textAlign : "center"
                        }}>
                        کاربر معمولی
                    </Text>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                نمایش قیمت ها
                            </Text>
                        </View>
                        <Divider/>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <FontAwesome5 name="times-circle" style={{marginLeft : 5 , color :theme.colors.primary}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                تخفیفات دوره ای
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <FontAwesome5 name="times-circle" style={{marginLeft : 5 , color :theme.colors.primary}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                خرید اقساط
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <FontAwesome5 name="times-circle" style={{marginLeft : 5 , color :theme.colors.primary}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                ارسال رایگان
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Divider/>
                        <Text style={{
                            paddingVertical : 10,
                            fontFamily : "Bold" ,
                            textAlign : "center" ,
                            color : theme.colors.success ,
                            fontSize : 12
                        }}>
                            رایگان
                        </Text>
                    </View>

                </View>
            </View>
            <View style={{width: 180 , marginLeft : 10}} >
                <View style={[styles.card , {padding : 15}]}>
                    <Text style={
                        {
                            fontFamily :"Light",
                            fontSize: 10 ,
                            textAlign : "center"
                        }}>
                        ماهانه
                    </Text>
                    <Text style={
                        {
                            fontFamily : "Bold" ,
                            paddingBottom : 20 ,
                            textAlign : "center"
                        }}>
                        کاربر نقره ای
                    </Text>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                نمایش قیمت ها
                            </Text>
                        </View>
                        <Divider/>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                تخفیفات دوره ای
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                خرید اقساط
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <FontAwesome5 name="times-circle" style={{marginLeft : 5 , color :theme.colors.primary}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                ارسال رایگان
                            </Text>
                        </View>

                    </View>

                    <View >
                        <Divider/>
                        <Text style={{
                            paddingVertical : 10,
                            fontFamily : "Bold" ,
                            backgroundColor : theme.colors.gray ,
                            textAlign : "center" ,
                            color : theme.colors.success ,
                            fontSize : 12
                        }}>
                            <Price
                                price={10000}
                            />
                        </Text>
                    </View>

                </View>
            </View>
            <View style={{width: 180 , marginLeft : 10}} >
                <View style={[styles.card , {padding : 15}]}>
                    <Text style={
                        {
                            fontFamily :"Light",
                            fontSize: 10 ,
                            textAlign : "center"
                        }}>
                        ماهانه
                    </Text>
                    <Text style={
                        {
                            fontFamily : "Bold" ,
                            paddingBottom : 20 ,
                            textAlign : "center"
                        }}>
                        کاربر طلایی
                    </Text>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                نمایش قیمت ها
                            </Text>
                        </View>
                        <Divider/>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                تخفیفات دوره ای
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                خرید اقساط
                            </Text>
                        </View>
                        <Divider/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={styles.row}>
                            <AntDesign name="checkcircleo" style={{marginLeft : 5 , color :theme.colors.success}} />
                            <Text style={{fontFamily : "Light" , textAlign : "right" , fontSize : 12}}>
                                ارسال رایگان
                            </Text>
                        </View>
                    </View>

                    <View >
                        <Divider/>
                        <Text style={{
                            paddingVertical : 10,
                            fontFamily : "Bold" ,
                            textAlign : "center" ,
                            backgroundColor : theme.colors.warning,
                            color : theme.colors.success ,
                            fontSize : 12
                        }}>
                            <Price
                                price={20000}
                                price_without_discount={25000}
                            />
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    </ScrollView>) ;
}

const innerStyles = StyleSheet.create({
    card_active : {
        backgroundColor : '#fff',
        borderColor : theme.colors.primary ,
        borderWidth : 1 ,
        shadowColor : theme.colors.primary,
        elevation: 3,
    }
})

export default UserRolePlan ;