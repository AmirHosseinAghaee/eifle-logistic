import styles from "./styles/style";
import {Image, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Button, Card} from "react-native-paper";
import theme from "../theme/theme";

const TopRateCard = ({title}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.justifyContentBetween]}>
                <Text style={styles.category_title} variant="displayLarge">{title}</Text>
                <Button mode={'text'} onPress={() => console.log('more btn')}>
                    <Text style={styles.moreBtn}>مشاهده همه</Text>
                </Button>
            </View>

            <View style={styles.row}>
                <View style={[styles.col_6]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <View style={innerStyles.badge_aera}>
                                <Text style={innerStyles.badge}>
                                    1
                                </Text>
                            </View>
                            <Card.Content>
                                        <Image style={innerStyles.product_img} source={require('./../assets/images/product_1.png')}/>
                                        <Text style={[innerStyles.card_subtitle]} variant="displayLarge">
                                            جارو برقی وینسنت پلاس مدل FZFC7625
                                        </Text>
                            </Card.Content>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[styles.col_6]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <View style={innerStyles.badge_aera}>
                                <Text style={innerStyles.badge}>
                                    2
                                </Text>
                            </View>
                            <Card.Content>
                                <Image style={innerStyles.product_img} source={require('./../assets/images/product_1.png')}/>
                                <Text style={[innerStyles.card_subtitle]} variant="displayLarge">
                                    جارو برقی وینسنت پلاس مدل FZFC7625
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[styles.col_6]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <View style={innerStyles.badge_aera}>
                                <Text style={innerStyles.badge}>
                                    3
                                </Text>
                            </View>
                            <Card.Content>
                                <Image style={innerStyles.product_img} source={require('./../assets/images/product_1.png')}/>
                                <Text style={[innerStyles.card_subtitle]} variant="displayLarge">
                                    جارو برقی وینسنت پلاس مدل FZFC7625
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
                <View style={[styles.col_6]}>
                    <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                        <Card style={styles.card}>
                            <View style={innerStyles.badge_aera}>
                                <Text style={innerStyles.badge}>
                                    4
                                </Text>
                            </View>
                            <Card.Content>
                                <Image style={innerStyles.product_img} source={require('./../assets/images/product_1.png')}/>
                                <Text style={[innerStyles.card_subtitle]} variant="displayLarge">
                                    جارو برقی وینسنت پلاس مدل FZFC7625
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableNativeFeedback>
                </View>
            </View>

        </View>
    );
}
const innerStyles = StyleSheet.create({
    product_img : {
        width : 80 ,
        height : 80,
        borderRadius : 100,
        marginLeft : 'auto',
        marginRight : 'auto',
    },
    card_subtitle: {
        fontSize: 11,
        textAlign : "center" ,
        fontFamily: "Medium",
    },
    badge_aera : {
        position : "absolute" ,
        right : 0 ,
        top : 0 ,
        backgroundColor : theme.colors.primary,
        width : 30 ,
        height : 30,
        borderTopRightRadius : 0,
        borderRadius : 5
    },
    badge : {
        textAlign : "center" ,
        color : '#fff',
        fontFamily : "Bold",

    } ,
    p0 : {
       padding : 0 ,
        margin : 0
    }
});
export default TopRateCard ;