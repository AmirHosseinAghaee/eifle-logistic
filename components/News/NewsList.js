import {ScrollView, View} from "react-native";
import NewsCard from "./NewsCard";

const NewsList = ({navigation}) => {
    return(
        <ScrollView>
            <View style={{paddingBottom : 200}}>
                {
                    [...Array(10)].map((el,index) => (
                        <NewsCard navigation={navigation} key={index} />
                    ))
                }
            </View>
        </ScrollView>
    );
}
export default NewsList ;