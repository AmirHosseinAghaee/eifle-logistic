import styles from "../styles/style";
import AccordionItem from "./AccordionItem";
import {View} from "react-native";
import FormInput from "../FormInput";
import {AntDesign} from "@expo/vector-icons";
import {Button, Text} from "react-native-paper";

function UserProfile(props) {
    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            <View style={[styles.card , {padding : 10}]}>
                <View style={styles.row}>
                    <View style={styles.col_12}>
                    <FormInput
                        label={'نام و نام خانوادگی'}
                        placeholder={'نام و نام خانوادگی'}
                        keyboardType={'default'}
                        inputMode={'text'}
                        icon={<AntDesign name="user" size={24} color="black" />}
                    />

                        <FormInput
                            label={'شماره تماس'}
                            placeholder={'شماره تماس'}
                            keyboardType={'default'}
                            inputMode={'text'}
                            icon={<AntDesign name="phone" size={24} color="black" />}
                        />

                    </View>
                    <View style={[styles.col_6 , {marginLeft : "auto"}]}>
                        <Button style={styles.rounded} mode={'contained'}  onPress={() => console.log('press')}>
                            <Text style={{fontFamily : "Medium" , color : "#fff"}}>
                                ذخیره تغییرات
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default UserProfile;