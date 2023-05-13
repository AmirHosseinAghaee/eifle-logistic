import styles from "./styles/style";
import CartItem from "./CartItem";
import {View} from "react-native";

const CartItems = () => {
    return (
        <View style={[styles.container , {paddingTop : 10, paddingBottom : 100}]}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </View>
    ) ;
}

export default CartItems ;