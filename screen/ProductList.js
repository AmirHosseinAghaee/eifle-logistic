import {Image, ScrollView, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Button, Card, Chip, DataTable, Divider, Text} from "react-native-paper";
import Slider from "../components/Slider";
import styles from "../components/styles/style";
import { FontAwesome,AntDesign } from '@expo/vector-icons';

import theme from "../theme/theme";
import ProductCard from "../components/ProductCard";

export default function ProductList (props) {
return (
    <View>
        <View>
            <Image
                style={innerStyles.banner}
                source={require('./../assets/images/bismark.jpg')}/>
            <View style={{display : "flex", flexDirection : "row-reverse", alignItems : "center"}}>
                <Image
                    style={innerStyles.logo}
                    source={require('./../assets/images/brand_panasonic.png')}/>

                <Text style={innerStyles.logo_text}>
                    محصولات شرکت پاناسونیک
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={[styles.row , {marginTop : 10}]}>
                <View style={[styles.col , {display : "flex" , flexDirection : "row-reverse"}]}>
                    <Button mode="contained" buttonColor={'#fff'} onPress={() => console.log("test")}>
                        <Text style={{fontFamily : "Medium" , fontSize : 12 }}>
                            <AntDesign name="filter" size={12} />
                            فیلتر
                        </Text>
                    </Button>
                    <Button mode="contained" buttonColor={'#fff'} onPress={() => console.log("test")}>
                        <Text style={{fontFamily : "Medium" , fontSize : 12 }}>
                            <FontAwesome name="sort-amount-desc" size={12} />
                            پربازدید ترین ها
                        </Text>
                    </Button>
                </View>
                <View style={styles.col_auto}>
                    <Text style={{fontFamily : "Bold"}}>
                        22 کالا
                    </Text>
                </View>
            </View>

        </View>
        <ScrollView>
            <View style={[styles.container , {paddingVertical : 10 , marginBottom : 100}]}>
                <ProductCard navigation={props.navigation} />
                <ProductCard navigation={props.navigation} />
                <ProductCard navigation={props.navigation} />
                <ProductCard navigation={props.navigation} />

            </View>

        </ScrollView>
    </View>
);
}

const innerStyles = StyleSheet.create({
    banner : {
        backgroundColor : '#ccc',
        width : '100%' ,
        height : 150 ,
        resizeMode : "cover",
    } ,
    logo : {
        width : 100 ,
        height : 100 ,
        backgroundColor : "#fff" ,
        resizeMode : "contain",
        borderRadius : 15 ,
        marginTop : -50 ,
        marginRight : 20
    },
    logo_text : {
        fontFamily : "Bold" ,
        fontSize : 12 ,
        paddingHorizontal : 10
    }
});