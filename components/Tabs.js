
import {useEffect, useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from "../screen/Home";
import Login from "../screen/Login";
import {View} from "react-native";


const AlbumsRoute = () => <Text> دسته بندی</Text>;



const ShopRoute = () => <Text>Shoping Card</Text>;





const Tabs = (props) => {
        const HomeRoute = () => <Home navigation={props.navigation} />;
        const LoginRoute = () => <Login navigation={props.navigation} />;
        const [index, setIndex] = useState(2);
        const [isLogin, setLogin] = useState(false);
        const [routes] = useState([
            { key: isLogin ? 'shop' : 'Login', title: isLogin ?  'سبد خرید' : 'ورود/عضویت', focusedIcon: isLogin ? 'shopping' : 'account' },
            { key: 'category', title: 'دسته بندی', focusedIcon: 'view-list' },
            { key: 'Home', title: 'خانه', focusedIcon: 'home', unfocusedIcon: 'home'},
        ]);

    // const RecentsRoute = () => {
    //     props.navigation.navigate('Login')
    // };
    //     useEffect(() => {
    //         if(index === 0)
    //         {
    //             props.navigation.navigate('Login');
    //             setIndex(2);
    //         }
    //     },[index])

        const renderScene = BottomNavigation.SceneMap({
            Home:HomeRoute,
            category: AlbumsRoute,
            Login:LoginRoute,
            shop: ShopRoute,
        });
        const handelIndexChange = (index) => {
            console.log("index " , index);

            setIndex(index)
        }

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
}
export default Tabs ;