import {Image, ScrollView, StyleSheet, View} from "react-native";
import styles from "../styles/style";

function NewsStory() {
    return (
        <ScrollView horizontal={true} style={{width: "100%", marginTop : 10 , height: 100 ,transform: [{ scaleX: -1 }]}}>
            <View style={[styles.row,{transform: [{ scaleX: -1 }]}]}>

                {[...Array(10)].map((e, i) => (
                    <View style={[innerStyles.product_img_area]} key={i}>
                        <Image
                            style={innerStyles.product_img}
                            source={require('./../../assets/images/product_1.png')}
                        />
                    </View>
                ) )}
            </View>
        </ScrollView>
    );
}

const innerStyles = StyleSheet.create({
    product_img_area : {
        width : 70 ,
        height : 70,
        borderRadius : 120,
        padding : 3,
        marginLeft : 10 ,
        backgroundColor : "#fff",
        shadowColor : "#ccc",
        elevation: 3,
    },
    product_img : {
        width : '100%' ,
        height : 60
    },
    new_img : {
        width : 90 ,
        height : 90
    }
})

export default NewsStory;