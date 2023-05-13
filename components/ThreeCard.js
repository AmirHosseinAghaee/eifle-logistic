import styles from "./styles/style";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Button, Card} from "react-native-paper";

const ThreeCard = ({title,more_link,items}) => {

    return (
        <View style={styles.container}>
            {/* View for Card Title */}
            <View style={[styles.row, styles.justifyContentBetween]}>
                <Text style={styles.category_title} variant="displayLarge">{title}</Text>
                <Button mode={'text'} onPress={() => console.log('more btn')}>
                    <Text style={styles.moreBtn}>مشاهده همه</Text>
                </Button>
            </View>
            <View style={[innerStyles.twoInTwoProduct_row ]}>
                <View style={[innerStyles.twoInTwoProduct_col6,innerStyles.twoInTwoProduct_col6_right]}>
                    <View style={[innerStyles.product_card_large_area, innerStyles.cardBorderRadius]}>
                        <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                            <Card style={innerStyles.twoInTwoProduct_right}>
                                <Card.Cover style={innerStyles.product_card_large_img}
                                            source={require('./../assets/images/prdouct_3.png')}/>
                                <Card.Content>
                                    <Text style={[innerStyles.card_subtitle]} variant="displayLarge">سرخ
                                        جارو برقی وینسنت پلاس مدل FZFC7625
                                    </Text>
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
                <View style={innerStyles.twoInTwoProduct_col6}>
                    <View style={[innerStyles.product_card_large_area, innerStyles.cardBorderRadius]}>
                        <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                            <Card style={styles.card}>
                                <Card.Cover style={innerStyles.product_card_small_img}
                                            source={require('./../assets/images/product_2.png')}/>
                                <Card.Content>
                                    <Text style={[innerStyles.card_subtitle]} variant="displayLarge">سرخ
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
                    <View style={[innerStyles.product_card_large_area, innerStyles.cardBorderRadius]}>
                        <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                            <Card style={styles.card}>
                                <Card.Cover style={innerStyles.product_card_small_img}
                                            source={require('./../assets/images/product_1.png')}/>
                                <Card.Content>
                                    <Text style={[innerStyles.card_subtitle]} variant="displayLarge">سرخ
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
            </View>
        </View>
    ) ;
}

const innerStyles = StyleSheet.create({
    twoInTwoProduct_row : {
        display: 'flex',
        flexDirection : "row-reverse",
    },
    twoInTwoProduct_col6 : {
        flex: 0,
        width: ' 50%',
        padding :5,
        // backgroundColor : "#ccc"
    },
    twoInTwoProduct_col6_right : {
        backgroundColor : "#fff" ,
        justifyContent : "center",
        borderRadius : 10,
        shadowColor : "#ccc",
        elevation: 3,
        marginVertical : 5
    },
    twoInTwoProduct_right : {
        shadowColor: 'transparent',
        elevation: 0,
        backgroundColor : null,
    },

    product_card_large_area : {
        width : "100%" ,
        marginBottom : 8 ,
    },
    product_card_large_img : {
        width : "80%" ,
        marginRight : "auto" ,
        marginLeft : "auto" ,
        marginBottom : 8,
        borderRadius : 10,
        padding : 5,
        backgroundColor : "transparent",
    },
    product_card_small_img : {
        width : 120 ,
        height : 120,
        borderRadius : 100 ,
        marginBottom : 8,
        marginRight : "auto" ,
        marginLeft : "auto" ,
        padding : 5,
        backgroundColor : "transparent",
    },
    card_subtitle: {
        fontSize: 13,
        textAlign: "center",
        fontFamily: "Medium",
    },

});

export default ThreeCard ;