import {Image, ScrollView, StyleSheet, View} from "react-native";
import styles from "../components/styles/style";
import {Text,Button} from "react-native-paper";
import theme from "../theme/theme";
import NewsCard from "../components/News/NewsCard";
import NewsList from "../components/News/NewsList";
import NewsStory from "../components/News/NewsStory";
import NewsNav from "../components/News/NewsNav";

const News = (props) => {
    return (
        <View style={[styles.container , {marginTop : 10}]}>
           <NewsNav />
            <NewsStory />
           <NewsList navigation={props.navigation} />
        </View>
    );
}

const innerStyles = StyleSheet.create({


})

export default News ;