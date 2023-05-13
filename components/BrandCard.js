import styles from "./styles/style";
import {Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {Button} from "react-native-paper";

const BrandCard = () => {
    return (<View style={styles.container}>
        <View style={[styles.row, styles.justifyContentBetween]}>
            <Text style={styles.category_title} variant="displayLarge">محبوب ترین برند ها</Text>

            <Button mode={'text'} onPress={() => console.log('more btn')}>
                <Text style={styles.moreBtn}>مشاهده همه</Text>
            </Button>

        </View>
        <View style={[innerStyles.brand_area]}>
            <ScrollView horizontal={true}>
                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_feller.png')}/>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_panasonic.png')}/>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_feller.png')}/>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_panasonic.png')}/>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_feller.png')}/>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => console.log("touch press")}>
                    <Image style={innerStyles.brand_slide_image}
                           source={require('./../assets/images/brand_panasonic.png')}/>
                </TouchableNativeFeedback>

            </ScrollView>
        </View>
    </View>) ;
}

const innerStyles = StyleSheet.create({
    brand_slide_image: {
        height: 30,
        resizeMode: "contain",
        width: 120
    },
    brand_area: {
        flexWrap: "nowrap",
        height: 40,
        width: "100%"
    },
});

export default BrandCard;
