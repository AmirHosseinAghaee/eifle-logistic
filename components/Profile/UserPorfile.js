import {ScrollView,Image,StyleSheet, View} from "react-native";
import styles from "../styles/style";
import FormInput from "../FormInput";
import {AntDesign} from "@expo/vector-icons";

const UserPorfile = () => {
    return (
        <ScrollView>
            <View style={[styles.container , {marginBottom: 350}]}>
                {/*<View style={[styles.card,{padding : 15 , marginTop : 10}]}>
                    <FormInput
                        label={'نام و نام خانوادگی'}
                        placeholder={'نام و نام خانوادگی'}
                        keyboardType={'default'}
                        inputMode={'text'}
                        icon={<AntDesign name="user" size={24} color="black" />}
                    />

                    <FormInput
                        label={'شماره تلفن'}
                        placeholder={'شماره تلفن'}
                        keyboardType={'numeric'}
                        inputMode={'numeric'}
                        icon={<AntDesign name="phone" size={24} color="black" />}
                    />

                    <View style={[styles.row ]}>
                        <View style={styles.col}>
                            <FormInput
                                label={'آپلود تصویر درب منزل'}
                                placeholder={'آپلود تصویر درب منزل'}
                                keyboardType={'default'}
                                inputMode={'text'}
                                icon={<AntDesign name="camera" size={24} color="black" />}
                            />
                        </View>
                        <View style={styles.col_auto}>
                            <Image
                                style={innerStyles.door_img}
                                source={require('./../../assets/images/profile.jpg')}
                            />
                        </View>

                    </View>

                </View>*/}
                <UserPorfile />

            </View>
        </ScrollView>
    );
}
const innerStyles = StyleSheet.create({
    door_img : {
        width : 80,
        borderRadius : 10 ,
        height : 80,
    } ,
});

export default UserPorfile ;