import {View} from "react-native";
import styles from "./styles/style";
import FormInput from "./FormInput";

const BoxResiveCode = () => {
    return (
        <View style={styles.row}>
            <View style={styles.col}>
                <FormInput/>
            </View>
            <View style={styles.col}>
                <FormInput/>
            </View>
            <View style={styles.col}>
                <FormInput/>
            </View>
            <View style={styles.col}>
                <FormInput/>
            </View>
            <View style={styles.col}>
                <FormInput/>
            </View>
        </View>
    );
};

export default BoxResiveCode;