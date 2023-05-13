import styles from "./styles/style";
import {ScrollView,StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Button, Card} from "react-native-paper";

const CarouselCard = ({navigation,title , more_link , items}) => {
    const handelProductPage = () => {
        navigation.navigate('Product')
    }
    return (
        <View style={styles.container}>
        <View style={[styles.row, styles.justifyContentBetween]}>
            <Text style={styles.category_title} variant="displayLarge">{title}</Text>
            <Button mode={'text'} onPress={() => console.log('more btn')}>
                <Text style={styles.moreBtn}>مشاهده همه</Text>
            </Button>
        </View>
        <ScrollView horizontal={true} style={{width: "100%" , height: 240 ,transform: [{ scaleX: -1 }]}}>
            <View style={[styles.row,{transform: [{ scaleX: -1 }]}]}>
                <View style={[innerStyles.product_card]}>
                    <TouchableNativeFeedback onPress={handelProductPage}>
                        <Card style={styles.card}>
                            <Card.Cover style={innerStyles.product_card_image}
                                        source={require('./../assets/images/product_1.png')}/>
                            <Card.Content>
                                <Text style={[innerStyles.product_card_subtitle]} variant="displayLarge">سرخ
                                    کن 5.7 لیتری آزور مدل AZ-409AF</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button style={styles.product_btn} mode={"contained"}>
                                    <Text style={styles.product_btn_text}>مشاهده</Text>
                                </Button>
                            </Card.Actions>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[innerStyles.product_card]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <Card.Cover style={innerStyles.product_card_image}
                                        source={require('./../assets/images/product_2.png')}/>
                            <Card.Content>
                                <Text style={[innerStyles.product_card_subtitle]} variant="displayLarge">سرخ
                                    کن 5.7 لیتری آزور مدل AZ-409AF</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button style={styles.product_btn} mode={"contained"}>
                                    <Text style={styles.product_btn_text}>مشاهده</Text>
                                </Button>
                            </Card.Actions>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[innerStyles.product_card]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <Card.Cover style={innerStyles.product_card_image}
                                        source={require('./../assets/images/product_1.png')}/>
                            <Card.Content>
                                <Text style={[innerStyles.product_card_subtitle]} variant="displayLarge">سرخ
                                    کن 5.7 لیتری آزور مدل AZ-409AF</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button style={styles.product_btn} mode={"contained"}>
                                    <Text style={styles.product_btn_text}>مشاهده</Text>
                                </Button>
                            </Card.Actions>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[innerStyles.product_card]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <Card.Cover style={innerStyles.product_card_image}
                                        source={require('./../assets/images/product_1.png')}/>
                            <Card.Content>
                                <Text style={[innerStyles.product_card_subtitle]} variant="displayLarge">سرخ
                                    کن 5.7 لیتری آزور مدل AZ-409AF</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button style={styles.product_btn} mode={"contained"}>
                                    <Text style={styles.product_btn_text}>مشاهده</Text>
                                </Button>
                            </Card.Actions>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </ScrollView>
    </View>);
}
const innerStyles = StyleSheet.create({
    product_card: {
        width: 150,
        paddingHorizontal : 3,
    },
    product_card_image: {
        padding: 10,
        backgroundColor: null,
        margin: 5,
        height: 120,
        resizeMode: "contain" ,
    },
    product_card_subtitle: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: "Medium",
    },
});
export default  CarouselCard ;
