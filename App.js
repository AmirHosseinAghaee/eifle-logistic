import {useFonts} from 'expo-font';
import {Provider as PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Product from "./screen/product";
import theme from "./theme/theme";
import eifleConfigHeader from "./components/eifelHeaderConfig";
import Tabs from "./components/Tabs";
import Login from "./screen/Login";
import Otp from "./screen/Otp";
import Issue from "./screen/Issue";
import Invoice from "./screen/Invoice";
import Cart from "./screen/Cart";
import ProductList from "./screen/ProductList";
import Filter from "./components/Filter";
import Profile from "./screen/Profile";
import News from "./screen/News";
import NewsInfo from "./screen/NewsInfo";


const Stack = createNativeStackNavigator();

export default function App() {

    const [loadedFonts] = useFonts({
        ExtraLight: require('./assets/fonts/Vazirmatn-RD-FD-ExtraLight.ttf'),
        Light: require('./assets/fonts/Vazirmatn-RD-FD-Light.ttf'),
        Regular: require('./assets/fonts/Vazirmatn-RD-FD-Regular.ttf'),
        Medium: require('./assets/fonts/Vazirmatn-RD-FD-Medium.ttf'),
        Bold: require('./assets/fonts/Vazirmatn-RD-FD-Bold.ttf'),
        ExtraBold: require('./assets/fonts/Vazirmatn-RD-FD-ExtraBold.ttf'),
        Black: require('./assets/fonts/Vazirmatn-RD-FD-Black.ttf'),
        SemiBold: require('./assets/fonts/Vazirmatn-RD-FD-SemiBold.ttf'),
        Thin: require('./assets/fonts/Vazirmatn-RD-FD-Thin.ttf'),
    });
    //
    if (!loadedFonts) {
        return false;
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions ={{
                        // gestureEnable: true,
                        // gestureDirection : "horizontal"
                    }}
                >
                    <Stack.Screen name="Home" component={Profile} options={eifleConfigHeader}/>
                    {/*<Stack.Screen name="Home" component={NewsCard} options={{headerShown:false}}/>*/}
                    <Stack.Screen name="Product" component={Product} options={eifleConfigHeader}/>
                    <Stack.Screen name="ProductList" component={ProductList} options={eifleConfigHeader}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                    <Stack.Screen name="Issue" component={Issue} options={eifleConfigHeader}/>
                    <Stack.Screen name="Invoice" component={Invoice} options={eifleConfigHeader}/>
                    <Stack.Screen name="News" component={News} options={eifleConfigHeader}/>
                    <Stack.Screen name="NewsInfo" component={NewsInfo} options={eifleConfigHeader}/>
                    <Stack.Screen name="Cart" component={Cart} options={eifleConfigHeader}/>
                    <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
                    <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}