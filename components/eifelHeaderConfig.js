import {View} from "react-native";
import {Badge, IconButton} from "react-native-paper";
import styles from "./styles/style";

const eifleConfigHeader = ({navigation}) =>  ({
    title: 'اپ',
        headerStyle: {
    backgroundColor: '#fff',
},
    contentStyle: { backgroundColor: '#FAFAFF' },
    headerTitleAlign: "center",
    headerTintColor: '#231F20',
    headerTitleStyle: {
        fontFamily: 'Regular',
    },
    headerLeft: (props) => (
        <View {...props} style={{flexDirection: "row", display: "flex"}}>
            <IconButton icon="card-search" style={{marginVertical: 1}}
                        onPress={(e) => console.log('searchBar')}/>
            <View>
                <IconButton icon="bell" style={{marginVertical: 1}}
                            onPress={() => navigation.push('News')}/>
                <Badge style={styles.bellHeaderBadge}>3</Badge>
            </View>
        </View>
    ),
        headerRight: () => (
    <View>
        <IconButton icon="menu" style={{marginVertical: 1}}
                    onPress={() => console.log('barBar')}/>
    </View>
),
})

export default eifleConfigHeader ;