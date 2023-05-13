import {Image,ScrollView, StyleSheet, View} from "react-native";
import styles from "../styles/style";
import {Button, Chip, Text} from "react-native-paper";
import theme from "../../theme/theme";
import Price from "../Price";
import Order from "./Order";

const Orders = () => {
    return (
        <ScrollView>
        <View style={[styles.container , {marginTop : 10 , paddingBottom : 350}]}>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />

        </View>
        </ScrollView>
    ) ;
}

const innerStyles = StyleSheet.create({

})

export default Orders ;