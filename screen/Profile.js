import {Image, ScrollView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import theme from "../theme/theme";
import ProfileMenu from "../components/Profile/ProfileMenu";
import {useState} from "react";
import Store from "../components/Profile/Store";
import WatingList from "../components/Profile/WatingList";
import UserBoxies from "../components/Profile/UserBoxies";
import UserProfile from "../components/Profile/UserProfile";
import UsersList from "../components/UsersList";
import CustomDrawer from "./CustomDrawer";
const Profile = ({navigation}) => {
    const [menu , setMenu] = useState(2);
    const [Drawer , setDrawer] = useState('close');
    return (
        <View style={{flex: 1}}>
            <View style={innerStyles.profileHeader}>
                <View>
                    <Image style={innerStyles.avatar} source={require('./../assets/images/profile.jpg')} />
                </View>
                <Text style={innerStyles.avatar_name}>
                    محمد محمدی
                </Text>
                <Text style={innerStyles.avatar_role}>
                    انبار دار
                </Text>
            </View>
            <ProfileMenu navigation={navigation} menu={menu} setMenu={setMenu} />
            <ScrollView>
                {
                    menu === 1 && <UserProfile  />
                }
                {
                    menu === 2 && <Store  setDrawer={setDrawer} />
                }
                {
                    menu === 3 && <WatingList  setDrawer={setDrawer} />
                }
                {
                    menu === 4 && <UserBoxies setDrawer={setDrawer} />
                }

            </ScrollView>

            <CustomDrawer status={Drawer}>
                {(handleClosePress) => (
                    <UsersList setDrawer={setDrawer} handleClosePress={handleClosePress}/>
                )}
            </CustomDrawer>
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
    CustomDrawer : {
        position  : 'absolute',
        top :0 ,
    }

})

export default Profile ;