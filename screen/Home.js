import {ScrollView, StyleSheet, View} from 'react-native';
import ThreeCard from "../components/ThreeCard";
import TopRateCard from "../components/TopRateCard";
import Slider from "../components/Slider";
import TwoColBanner from "../components/TwoColBanner";
import CategoryCard from "../components/CategoryCard";
import BrandCard from "../components/BrandCard";
import CarouselCard from "../components/CarouselCard";
import FullWidthBanner from "../components/FullWidthBanner";

export default function Home(props) {

    const handelProductPage = () => {
        props.navigation.navigate('Product')
        // console.log("login : " , props);
    }

    return (
            <ScrollView>
                <View>
                    {/* Main Slider */}
                    <Slider />

                    {/* Min image  */}
                    <TwoColBanner />

                    {/* Categories  */}
                    <CategoryCard navigation={props.navigation} />

                    {/* Brands  */}
                    <BrandCard />


                    {/* Top sell product  */}
                    <CarouselCard title={'پرفروش ترین محصولات'} />


                    {/* Banners  */}
                    <FullWidthBanner />


                    {/* Top sell product  */}
                    <ThreeCard title={'پرفروش ترین محصولات'} more_link={'/'} items={null} />

                    {/* Top Rate product  */}
                    <TopRateCard title={'پر طرفدارترین محصولات'} more_link={'/'} items={null} />

                    {/* Top sell product  */}
                    <CarouselCard title={'محبوب ترین محصولات'} />


                    <View style={{margin: 30}}>

                    </View>
                </View>
            </ScrollView>
    );
}

const innerStyles = StyleSheet.create({
});
