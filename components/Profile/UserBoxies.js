import styles from "../styles/style";
import AccordionItem from "./AccordionItem";
import {View} from "react-native";

function UserBoxies({setDrawer,setDrawerHeight}) {
    return (
        <View style={[styles.container , {paddingTop : 10 , paddingBottom : 350}]}>
            {
                [...Array(7)].map((el,index) => (
                    <AccordionItem setDrawerHeight={setDrawerHeight} setDrawer={setDrawer} type={'my_box'} key={index} index={index} />
                ))
            }

        </View>
    );
}

export default UserBoxies;