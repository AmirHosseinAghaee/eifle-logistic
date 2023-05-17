import {StyleSheet, View} from "react-native";
import styles from "../styles/style";
import AccordionItem from "./AccordionItem";
import CustomDrawer from "../../screen/CustomDrawer";
import UsersList from "../UsersList";

function Store({setDrawer}) {

    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            {
                [...Array(10)].map((el,index) => (
                    <AccordionItem setDrawer={setDrawer} type={'store'} key={index} />
                ))
            }
        </View>
    );
}

const innerStyles = StyleSheet.create({
    headerAccordion: {}
})
export default Store;