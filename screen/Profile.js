import {Image, ScrollView, StyleSheet, View} from "react-native";
import {Button, Divider, Text} from "react-native-paper";
import theme from "../theme/theme";
import Wallet from "../components/Profile/Wallet";
import DiscountList from "../components/Profile/DiscountList";
import ProfileMenu from "../components/Profile/ProfileMenu";
import UserPorfile from "../components/Profile/UserPorfile";
import Orders from "../components/Profile/Orders";
import UserAddress from "../components/Profile/UserAddress";
import {useState} from "react";
import OrderInfo from "../components/Profile/OrderInfo";
const Profile = () => {
    const [menu , setMenu] = useState(2);
    return (
        <View>
            <View style={innerStyles.profileHeader}>
                <Text style={innerStyles.profile_title}>
                    پروفایل من
                </Text>
                <View>
                    <Image style={innerStyles.avatar} source={require('./../assets/images/profile.jpg')} />
                </View>
                <Text style={innerStyles.avatar_name}>
                    محمد محمدی
                </Text>
                <Text style={innerStyles.avatar_role}>
                    کاربر عادی
                </Text>
            </View>
            <ProfileMenu menu={menu} setMenu={setMenu} />
            <ScrollView>
                {
                    menu === 1 && <UserPorfile />
                }
                {
                    menu === 2 && <Orders />
                }
                {
                    menu === 2.1 && <OrderInfo />
                }
                {
                    menu === 3 && <Wallet />
                }
                {
                    menu === 4 && <DiscountList />
                }
                {
                    menu === 5 && <UserAddress />
                }

            </ScrollView>
        </View>
    ) ;
}

const innerStyles = StyleSheet.create({
    profileHeader : {
        // padding : 50 ,
        paddingVertical : 50 ,
        paddingBottom : 65 ,
        width : '100%' ,
        backgroundColor : theme.colors.primary,
        borderBottomRightRadius : 50 ,
        borderBottomLeftRadius : 50 ,
    },
    profile_title : {
        textAlign : "center" ,
        fontFamily : "Regular" ,
        fontSize : 18,
        color : "#fff"
    },
    profile_menu_title_text : {
        fontFamily : "Regular",
        textAlign: "center" ,
        fontSize : 12
    },
    profile_menu_item : {
        padding: 5 ,
    },
    avatar : {
        width : 120 ,
        height : 120 ,
        borderRadius : 200,
        backgroundColor : "#fff",
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : 10,
    },
    avatar_name : {
        fontFamily : "Bold",
        textAlign : "center",
        fontSize : 15,
        color : "#fff"
    },
    avatar_role : {
        fontFamily : "Light",
        textAlign : "center",
        fontSize : 13,
        color : "#fff"
    } ,
    profile_menu : {
        backgroundColor : "#fff",
        borderRadius : 50,
        marginHorizontal : 10,
        marginTop : -55 ,
    },

})

export default Profile ;