import styles from "./styles/style";
import {Image, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Button, Card} from "react-native-paper";
import theme from "../theme/theme";

const CategoryCard = ({navigation}) => {
    return (<View style={styles.container}>
        <View style={[styles.row, styles.justifyContentBetween]}>
            <Text style={styles.category_title} variant="displayLarge">دسته بندی محصولات</Text>

            <Button mode={'text'} onPress={() => console.log('more btn')}>
                <Text style={styles.moreBtn}>مشاهده همه</Text>
            </Button>

        </View>
        <View style={styles.row}>
            <View style={[styles.col_4, innerStyles.cardBorderRadius]}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>
                    <Card style={innerStyles.category_card}>
                        <Card.Cover style={innerStyles.category_card_image}
                                    source={require('./../assets/images/jacket.png')}/>
                        <Card.Content>
                            <Text style={[innerStyles.category_card_subtitle]}
                                  variant="displayLarge">پوشاک</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.col_4}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>

                    <Card style={innerStyles.category_card}>
                        <Card.Cover style={innerStyles.category_card_image}
                                    source={require('./../assets/images/lavazem.png')}/>
                        <Card.Content>
                            <Text style={[innerStyles.category_card_subtitle]} variant="displayLarge">لوازم
                                خانگی</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.col_4}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>

                    <Card style={innerStyles.category_card}>
                        <Card.Cover style={innerStyles.category_card_image}
                                    source={require('./../assets/images/atr.png')}/>
                        <Card.Content>
                            <Text style={[innerStyles.category_card_subtitle]}
                                  variant="displayLarge">آرایشی</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.col_4}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>

                    <Card style={innerStyles.category_card}>
                        <Card.Cover style={innerStyles.category_card_image}
                                    source={require('./../assets/images/mokamel.png')}/>
                        <Card.Content>
                            <Text style={[innerStyles.category_card_subtitle]} variant="displayLarge">مکمل
                                بدنسازی</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.col_4}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>

                    <Card style={innerStyles.category_card}>
                        <Card.Cover style={innerStyles.category_card_image}
                                    source={require('./../assets/images/nescafe.png')}/>
                        <Card.Content>
                            <Text style={[innerStyles.category_card_subtitle]} variant="displayLarge">مواد
                                غذایی</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.col_4}>
                <TouchableNativeFeedback  onPress={() => navigation.navigate('ProductList')}>
                    <Card style={innerStyles.category_card}>
                        {/*<Card.Cover style={innerStyles.category_card_more_image} source={require('./../assets/images/more-circle.png')} />*/}
                        <Card.Content>
                            <Image
                                style={innerStyles.category_card_more_image}
                                source={require('./../assets/images/more-circle.png')}/>
                            <Text style={[innerStyles.category_card_subtitle]}
                                  variant="displayLarge">بیشتر</Text>
                        </Card.Content>
                    </Card>
                </TouchableNativeFeedback>
            </View>
        </View>


    </View>) ;
}

const innerStyles = StyleSheet.create({
    category_card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        // shadowOffset: {width: 0, height: 4},
        // shadowOpacity: 0.06,
        // shadowRadius: 8,
        // elevation: 20,
    },
    category_card_image: {
        padding: 10,
        backgroundColor: theme.colors.inversePrimary,
        margin: 5,
        height: 120,
        resizeMode: "contain"
    },
    category_card_more_image: {
        width: '100%',
        height: 120,
        resizeMode: "contain"
    },
    category_card_subtitle: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: "Bold",
    },
});


export default CategoryCard ;