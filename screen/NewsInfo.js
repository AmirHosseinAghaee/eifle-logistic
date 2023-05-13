import {ScrollView, StyleSheet, View} from "react-native";
import styles from "../components/styles/style";
import {Button, Card, Text} from "react-native-paper";

function NewsInfo() {
    return (
        <ScrollView>
            <View style={[styles.container , {paddingTop : 15 , marginBottom : 10 }]}>
                <Card style={styles.card}>
                    {/*<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
                    <Card.Cover style={innerStyles.cardCover} source={require('./../assets/images/profile.jpg')} />
                    <Card.Content>
                        <View style={[styles.row , {justifyContent : "space-between" , marginVertical: 10}]}>
                            <Text style={innerStyles.time_text} variant="labelSmall">شش روز پیش</Text>
                            <Text style={innerStyles.read_time_text} variant="labelSmall">مدت زمان مطالعه ۱۰ دقیقه</Text>
                        </View>

                        <Text style={innerStyles.card_text_title}>
                            خلیج فارس از شرایط مطلوب جوی برای رفت و آمدهای دریایی برخوردار است
                        </Text>
                        <Text style={innerStyles.card_text_body}>
                            به گزارش پایگاه خبری قشم؛ به نقل از ایرنا، مرتضی فاخری روز چهارشنبه در گفت و گویی اظهار داشت: طبق پیش بینی های هواشناسی دریایی انجام شده سمت باد از سوی غرب و با شرایط ملایم به حداکثر تا ۱۴ نات و ارتفاع موج نیز به کمتر از نیم متر خواهد رسید که گویای وضعیت مطلوب دریانوردی است.
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
}
const innerStyles = StyleSheet.create({
    cardCover : {
        // borderBottomLeftRadius : 0 ,
        // borderBottomRightRadius : 0 ,
    } ,
    time_text : {
        fontFamily : "Light" ,
        color : "#6B6B6B"
    },
    read_time_text : {
        fontFamily : "Light" ,
    },
    card_text_title : {
        fontFamily : "Bold" ,
        fontSize : 16,
        marginBottom : 5 ,
        textAlign : "right"
    },
    card_text_body : {
        fontFamily : "Light" ,
        textAlign : "right"
    }
})
export default NewsInfo;