import {StyleSheet, View} from "react-native";
import styles from "../styles/style";
import AccordionItem from "./AccordionItem";

function Store(props) {

    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            {
                [...Array(10)].map((el,index) => (
                    <AccordionItem type={'store'} key={index} />
                ))
            }
        </View>
    );
}

const innerStyles = StyleSheet.create({
    headerAccordion: {}
})
export default Store;