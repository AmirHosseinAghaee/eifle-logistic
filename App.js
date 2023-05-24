import {useEffect, useState} from "react";
import {useFonts} from 'expo-font';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AnimatedSplash from "react-native-animated-splash-screen";
import theme from "./theme/theme";
import Login from "./screen/Login";
import Profile from "./screen/Profile";



const Stack = createNativeStackNavigator();

export default function App() {
    const [Loading , setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
            console.log("a ima here ...." + Loading)
        } , 2000)
    },[])

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
        <AnimatedSplash
            translucent={true}
            isLoaded={false}
            logoImage={require("./assets/splash.png")}
            backgroundColor={theme.colors.primary}
            logoHeight={200}
            logoWidth={200}
        >
        <PaperProvider theme={theme}>

                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions ={{
                            // gestureEnable: true,
                            // gestureDirection : "horizontal"
                        }}
                    >
                        <Stack.Screen name="Home" component={Login} options={{headerShown:false}}/>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
                    </Stack.Navigator>
                </NavigationContainer>

        </PaperProvider>
    </AnimatedSplash>
    );
}