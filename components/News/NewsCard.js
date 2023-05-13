import {Image, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import styles from "../styles/style";
import {Button, Text} from "react-native-paper";

const NewsCard = ({navigation}) => {
    return (
        <TouchableNativeFeedback onPress={() => navigation.push('NewsInfo')}>
        <View style={[styles.card , {padding: 5 , marginBottom : 10}]}>
            <View style={styles.row}>
                <View style={styles.col_auto}>
                    <Image
                        style={innerStyles.new_img}
                        source={require('./../../assets/images/product_1.png')}
                    />
                </View>
                <View style={styles.col}>
                    <Text style={{fontFamily : "Bold" , textAlign : "right"}}>
                        خلیج فارس از شرایط مطلوب جوی برای رفت و آمدهای دریایی برخوردار است
                    </Text>
                    <Text style={{fontFamily : "Light" , textAlign : "right" ,
                        fontSize : 10 ,
                        color : "#6B6B6B"
                    }}>
                        به گزارش پایگاه خبری قشم؛ به نقل از ایرنا، مرتضی....
                    </Text>
                    <View style={[styles.row , {justifyContent : "space-between"}]}>
                        <Text style={{
                            fontFamily : "Light" ,
                            textAlign : "right" ,
                            fontSize : 10 ,
                            color : "#6B6B6B"
                        }}>
                            شش روز پیش
                        </Text>
                        <Button mode={'contained'}
                                onPress={() => console.log("more news")}
                        >
                            <Text style={{
                                fontFamily : "Medium" ,
                                fontSize : 10 ,
                                color : "#fff" ,
                            }}>
                                مشاهده
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
        </TouchableNativeFeedback>
    );
}

const innerStyles = StyleSheet.create({
    product_img : {
        width : '100%' ,
        height : 60
    },
    new_img : {
        width : 90 ,
        height : 90
    }
})

export default NewsCard ;