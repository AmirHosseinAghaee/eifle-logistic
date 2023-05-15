import styles from "../styles/style";
import AccordionItem from "./AccordionItem";
import {View} from "react-native";

function UserBoxies(props) {
    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            {
                [...Array(7)].map((el,index) => (
                    <AccordionItem type={'my_box'} key={index} />
                ))
            }

        </View>
    );
}

export default UserBoxies;