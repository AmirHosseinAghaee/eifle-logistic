import {Image, StyleSheet, View} from "react-native";
import styles from "./styles/style";

const FullWidthBanner = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <Image style={innerStyles.banner_image}
                   source={require('./../assets/images/banner.png')}/>
            </View>
        </View>
    );
}

const innerStyles = StyleSheet.create({
    banner_image : {
        marginVertical : 10 ,
        width : '100%',
        height : 100 ,
        borderRadius : 12
    },
});

export default FullWidthBanner ;