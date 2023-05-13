import {Image, StyleSheet, View} from "react-native";

const TwoColBanner = () => {
    return(<View style={{display: 'flex', flexDirection: "row", marginVertical: 8}}>
        <View style={{flex: 1, paddingHorizontal: 4}}>
            <Image
                style={innerStyles.min_image}
                source={require('./../assets/images/azur.jpg')}/>
        </View>
        <View style={{flex: 1, paddingHorizontal: 4}}>
            <Image
                style={innerStyles.min_image}
                source={require('./../assets/images/bismark.jpg')}/>
        </View>
    </View>);
}
const innerStyles = StyleSheet.create({
    min_image: {
        width: '100%',
        height: 80,
        borderRadius: 10
    },
});

export default TwoColBanner;