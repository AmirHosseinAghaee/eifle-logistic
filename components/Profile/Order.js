import styles from "../styles/style";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {Button, Chip, Text} from "react-native-paper";
import Price from "../Price";
import theme from "../../theme/theme";

const Order = () => {
    return(<View style={[styles.card , {padding : 10 , marginBottom : 12}]}>
        <View style={styles.row}>
            <View style={styles.col}>
                <Text style={innerStyles.order_title_text}>
                    کد سفارش :
                    <Text style={innerStyles.order_title_text_bold}>
                        307131242
                    </Text>
                </Text>
            </View>
            <View style={styles.col}>
                <Text style={[innerStyles.order_title_text ,{textAlign:'left'}]}>
                    1401/09/23
                </Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.col}>
                <ScrollView horizontal={true} style={{width: "100%" , height: 70 ,transform: [{ scaleX: -1 }]}}>
                    <View style={[styles.row,{transform: [{ scaleX: -1 }]}]}>
                        <View style={[innerStyles.product_img_area]}>
                            <Image
                                style={innerStyles.product_img}
                                source={require('../../assets/images/product_1.png')}
                            />
                        </View>
                        <View style={[innerStyles.product_img_area]}>
                            <Image
                                style={innerStyles.product_img}
                                source={require('../../assets/images/product_2.png')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.col_auto}>
                <Price
                    price={1250000}
                    price_without_discount={1300000}
                />
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.col_auto}>
                <Chip
                    style={{backgroundColor : 'rgba(55, 125, 113, 0.15)' }}
                    selectedColor={theme.colors.success}
                >
                    <Text style={{textAlign:"right" ,fontFamily : "Light"}}>
                        تحویل داد شده
                    </Text>
                </Chip>

            </View>
            <View style={[styles.col_auto , {marginLeft : 'auto'}]}>
                <Button mode={'contained-tonal'}
                        style={{borderRadius : 5}}
                >
                    <Text style={{color : theme.colors.primary, fontFamily :"Medium"}}>
                        مشاهده فاکتور
                    </Text>
                </Button>
            </View>
        </View>
    </View>)
}

const innerStyles = StyleSheet.create({
    order_title_text : {
        fontFamily : "Light",
        textAlign : "right" ,
        color : '#6B6B6B'
    },
    order_title_text_bold : {
        fontFamily : "Bold",
        textAlign : "right" ,
    } ,
    product_img_area : {
        width : 60 ,
        height : 60
    },
    product_img : {
        width : '100%' ,
        height : 60
    }
});
export default Order ;