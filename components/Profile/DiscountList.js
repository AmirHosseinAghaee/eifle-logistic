import {ScrollView, StyleSheet, View} from "react-native";
import styles from "../styles/style";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Text} from "react-native-paper";
import Discount from "./Discount";

const DiscountList = () => {
    return (
        <View style={styles.container}>
            <View style={[ styles.row ,  {marginTop : 20}]}>
                <MaterialCommunityIcons style={{marginLeft : 5}} name="ticket-percent-outline" size={24} color="black" />
                <Text style={innerStyles.title}>
                    تخفیفات ایفل جزیره
                </Text>
            </View>
            <ScrollView style={{paddingBottom : 350}}>
                <Discount
                title={'25 درصد تخفیف خرید جاروبرقی'}
                discritpion={'برای خرید بالای 100 هزارتومان'}
                expire_time={' 2 روز '}
                code={' ASDFLKJOISVGG '}
                />

                <Discount
                    title={'25 درصد تخفیف خرید جاروبرقی'}
                    discritpion={'برای خرید بالای 100 هزارتومان'}
                    expire_time={' 2 روز '}
                    code={' ASDFLKJOISVGG12 '}
                />

                <Discount
                    title={'25 درصد تخفیف خرید جاروبرقی'}
                    discritpion={'برای خرید بالای 100 هزارتومان'}
                    expire_time={' 2 روز '}
                    code={' ASDFLKJOISVGG '}
                />

                <Discount
                    title={'25 درصد تخفیف خرید جاروبرقی'}
                    discritpion={'برای خرید بالای 100 هزارتومان'}
                    expire_time={' 2 روز '}
                    code={' ASDFLKJOISVGG '}
                />

                <Discount
                    title={'25 درصد تخفیف خرید جاروبرقی'}
                    discritpion={'برای خرید بالای 100 هزارتومان'}
                    expire_time={' 2 روز '}
                    code={' ASDFLKJOISVGG '}
                />

                <Discount
                    title={'25 درصد تخفیف خرید جاروبرقی'}
                    discritpion={'برای خرید بالای 100 هزارتومان'}
                    expire_time={' 2 روز '}
                    code={' AMIRHOSSEIN '}
                />
            </ScrollView>

        </View>
    );
}

const innerStyles = StyleSheet.create({
    title : {
        fontFamily : "ExtraBold" ,
        textAlign : "right"
    } ,
});

export default DiscountList ;