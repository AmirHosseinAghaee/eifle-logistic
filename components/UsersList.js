import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import styles from "./styles/style";
import {Avatar, Button} from "react-native-paper";
import React from "react";
import {ScrollView} from "react-native-gesture-handler";

function UsersList({setDrawer,handleClosePress}) {
    return (
        <View style={{paddingBottom: 200}}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.col_12}>
                        <View style={[styles.row, {justifyContent: "space-between"}]}>
                            <Text style={{fontFamily: "Black"}}>تحویل بسته به ایفل یار </Text>
                            <Button title="Close Sheet" onPress={() => {handleClosePress();setDrawer('false')}}>
                                close
                            </Button>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView style={[styles.col_12]}>
                        <View style={{paddingBottom: 200}}>
                            {
                                [...Array(10)].map((el, index) => (
                                    <TouchableNativeFeedback key={index} onPress={() => {setDrawer('false')}}>
                                        <View style={[styles.row , innerStyles.user_card , {marginBottom : 10}]}>
                                            <View style={styles.col_auto}>
                                                <Avatar.Image size={50}
                                                              source={require('../assets/images/profile.jpg')}/>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={{textAlign: "right", fontFamily: "Bold"}}>
                                                    محمد محمدی
                                                </Text>
                                                <Text
                                                    style={{textAlign: "right", fontFamily: "Light", fontSize: 12}}>
                                                    ایفل یار شماره :
                                                    {index}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
const innerStyles = StyleSheet.create({
    user_card : {
        backgroundColor : "#f6f6f6",
        borderRadius : 10 ,
    }
});
export default UsersList;