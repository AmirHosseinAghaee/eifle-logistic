import styles from "../styles/style";
import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Text} from "react-native-paper";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import theme from "../../theme/theme";

const ProfileMenu = ({menu ,setMenu}) => {
    return (<View style={[styles.row ,innerStyles.profile_menu]}>

        <View style={[styles.col]}>
            <TouchableNativeFeedback onPress={() => setMenu(1)}>
                <View style={[innerStyles.profile_menu_item , menu === 1 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 1 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <AntDesign name="user" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 1 ? innerStyles.profile_menu_title_text_active : {}]}>
                        پروفایل
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(2)}>
                <View style={[innerStyles.profile_menu_item , menu === 2 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 2 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <Entypo name="list" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 2 ? innerStyles.profile_menu_title_text_active : {}]}>
                        سفارشات
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(3)}>
                <View style={[innerStyles.profile_menu_item , menu === 3 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 3 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <Ionicons name="wallet-outline" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 3 ? innerStyles.profile_menu_title_text_active : {}]}>
                        کیف پول
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(4)}>
                <View style={[innerStyles.profile_menu_item , menu === 4 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 4 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <MaterialCommunityIcons name="ticket-percent-outline" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 4 ? innerStyles.profile_menu_title_text_active : {}]}>
                        تخفیفات
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(5)}>
                <View style={[innerStyles.profile_menu_item , menu === 5 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 5 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <Ionicons name="location-outline" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 5 ? innerStyles.profile_menu_title_text_active : {}]}>
                        آدرس ها
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    </View>) ;
}
const innerStyles = StyleSheet.create({

    profile_menu_title_text : {
        fontFamily : "Regular",
        textAlign: "center" ,
        fontSize : 12
    },
    profile_menu_item : {
        padding: 5 ,
    },
    profile_menu_item_active : {
      backgroundColor : '#FFF5F8',
        borderRadius : 10,
    },
    profile_menu_title_text_active : {
        color : theme.colors.primary
    },
    profile_menu : {
        backgroundColor : "#fff",
        borderRadius : 50,
        overflow : "hidden",
        marginHorizontal : 10,
        marginTop : -55 ,
    },

})
export default ProfileMenu ;