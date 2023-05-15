import {View} from "react-native";
import styles from "../styles/style";
import AccordionItem from "./AccordionItem";

function WatingList(props) {

    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            {
                [...Array(7)].map((el,index) => (
                    <AccordionItem type={'wating'} key={index} />
                ))
            }

        </View>
    );
}

export default WatingList;