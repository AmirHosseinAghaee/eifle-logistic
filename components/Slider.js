import Swiper from "react-native-swiper";
import theme from "../theme/theme";
import {Image, StyleSheet, View} from "react-native";
import styles from "./styles/style";

const Slider = () => {
    return (<View style={innerStyles.slider}>
        <Swiper
            style={innerStyles.wrapper}
            showsButtons={false}
            dotColor={theme.colors.primaryContainer}
            activeDotColor={theme.colors.primary}
            autoplay={true}
            slidesPerView={3}
            spaceBetween={30}
        >
            <View style={styles.slide}>
                <Image
                    style={innerStyles.slide_image}
                    source={require('./../assets/images/chocolateBarBanner.jpg')}/>
            </View>
            <View style={styles.slide}>
                <Image
                    style={innerStyles.slide_image}
                    source={require('./../assets/images/onixLandBanner.jpg')}/>
            </View>
            <View style={innerStyles.slide}>
                <Image
                    style={innerStyles.slide_image}
                    source={require('./../assets/images/onixLandBanner.jpg')}/>
            </View>
        </Swiper>
    </View>) ;
}

const innerStyles = StyleSheet.create({
    wrapper: {},
    slider: {
        height: 200,
        position: "relative",
    },
    slide: {
        fontFamily: "Light"
    },
    slide_image: {
        width: '100%',
        height: 200
    },

});
export  default  Slider ;