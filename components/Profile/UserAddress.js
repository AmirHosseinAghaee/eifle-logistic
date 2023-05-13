import {View,ScrollView, StyleSheet} from "react-native";
import Location from "../Location";
import styles from "../styles/style";

const UserAddress = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Location />
            </View>
        </ScrollView>
    ) ;
}

const innerStyles = StyleSheet.create({

})

export default UserAddress ;