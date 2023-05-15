import styles from "../styles/style";
import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Text} from "react-native-paper";
import {AntDesign,FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import theme from "../../theme/theme";

const ProfileMenu = ({navigation ,menu ,setMenu}) => {
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
                        <Entypo name="shop" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 2 ? innerStyles.profile_menu_title_text_active : {}]}>
                        انبار
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(3)}>
                <View style={[innerStyles.profile_menu_item , menu === 3 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 3 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>

                        <MaterialCommunityIcons name="clipboard-list-outline" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 3 ? innerStyles.profile_menu_title_text_active : {}]}>
                        لیست انتظار
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => setMenu(4)}>
                <View style={[innerStyles.profile_menu_item , menu === 4 ? innerStyles.profile_menu_item_active : {}]}>
                    <Text style={[menu === 4 ? innerStyles.profile_menu_title_text_active : {} ,{textAlign: "center"}]}>
                        <FontAwesome5 name="boxes" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text , menu === 4 ? innerStyles.profile_menu_title_text_active : {}]}>
                        بسته های من
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.col}>
            <TouchableNativeFeedback onPress={() => navigation.push('/login')}>
                <View style={[innerStyles.profile_menu_item ]}>
                    <Text style={[{textAlign: "center"}]}>
                        <Ionicons name="exit-outline" size={24} />
                    </Text>
                    <Text style={[innerStyles.profile_menu_title_text]}>
                        خروج
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