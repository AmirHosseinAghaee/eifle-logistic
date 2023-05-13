import {ScrollView, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Button, Card, Chip, DataTable, Divider, Text} from "react-native-paper";
import Slider from "../components/Slider";
import styles from "../components/styles/style";
import theme from "../theme/theme";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CarouselCard from "../components/CarouselCard";

export default function Product (props) {
return (
    <>
    <ScrollView>
    <View style={ innerStyles.product_header}>
        <View style={[innerStyles.product_slider]} >
            <Slider/>
        </View>
        <View style={styles.container}>
            <Text style={innerStyles.product_name}>
                بافت راه راه قهوه ای کد مدل 2022145
            </Text>
            <Text style={innerStyles.product_send_detail}>
                ارسال توسط فروشگاه حداکثر 3 روز بعد از ثبت سفارش
            </Text>
            <Divider />
            <View style={styles.row}>
                <View style={[styles.col,innerStyles.user_type_normal]}>
                    <Text style={innerStyles.user_type_titr}>
                        کاربر معمولی
                    </Text>
                    <Text style={innerStyles.user_type_price_area}>
                        <Text style={innerStyles.user_type_price}>
                            1.250.000
                        </Text>
                          تومان
                    </Text>
                </View>
                <View style={innerStyles.horizintal_divider} />
                <View style={[styles.col,innerStyles.user_type_gray]}>
                    <Text style={innerStyles.user_type_titr}>
                        کاربر نقره ای
                    </Text>
                    <Text style={innerStyles.user_type_price_area}>
                        <Text style={innerStyles.user_type_price}>
                            1.250.000
                        </Text>
                        تومان
                    </Text>
                </View>
                <View style={innerStyles.horizintal_divider} />
                <View style={[styles.col,innerStyles.user_type_gold]}>
                    <Text style={innerStyles.user_type_titr}>
                        کاربر طلایی
                    </Text>
                    <Text style={innerStyles.user_type_price_area}>
                        <Text style={innerStyles.user_type_price_off}>
                            1.250.000
                        </Text>
                        <Text style={innerStyles.user_type_price_percent}>
                            20%
                        </Text>
                        تومان
                    </Text>
                    <Text style={innerStyles.user_type_price_area}>
                        <Text style={innerStyles.user_type_price}>
                            12.000.000
                        </Text>
                        تومان
                    </Text>
                </View>
            </View>
            <Divider style={{marginVertical : 10}} />
            <View>
                <Text style={innerStyles.product_title}>
                    رنگ بندی:
                </Text>
                <View style={styles.row}>
                    <View style={styles.col_auto}>
                        <TouchableNativeFeedback>
                        <View style={innerStyles.product_color_area}>
                            <Text style={{fontFamily : "Regular" , marginRight :5}}>
                                آبی تیره
                            </Text>
                            <View style={[ innerStyles.product_color , {backgroundColor : "#4B03A6"}]} />
                        </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={styles.col_auto}>
                        <TouchableNativeFeedback>
                            <View style={innerStyles.product_color_area}>
                                <Text style={{fontFamily : "Regular" , marginRight :5}}>
                                    نارنجی
                                </Text>
                                <View style={[ innerStyles.product_color , {backgroundColor : "#FF5C00"}]} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={styles.col_auto}>
                        <TouchableNativeFeedback>
                            <View style={innerStyles.product_color_area}>
                                <Text style={{fontFamily : "Regular" , marginRight :5}}>
                                    سرخابی
                                </Text>
                                <View style={[ innerStyles.product_color , {backgroundColor : "red"}]} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>
            </View>

            <Divider style={{marginVertical : 10}} />
            <View>
                <Text style={innerStyles.product_title}>
                    سایز:
                </Text>
                <View style={styles.row}>
                    <View style={styles.col_auto}>
                        <Chip mode={'outlined'} style={innerStyles.acitve} onPress={() => console.log('Pressed')}>
                            <Text style={innerStyles.acitve}>
                                S
                            </Text>
                        </Chip>
                    </View>

                    <View style={styles.col_auto}>
                        <Chip mode={'outlined'} onPress={() => console.log('Pressed')}>
                            <Text>
                                XXL
                            </Text>
                        </Chip>
                    </View>

                    <View style={styles.col_auto}>
                        <Chip mode={'outlined'} onPress={() => console.log('Pressed')}>
                            <Text>
                                XL
                            </Text>
                        </Chip>
                    </View>

                </View>
            </View>
        </View>
    </View>
        <View style={[styles.card,innerStyles.product_buy_detail]}>
            <View style={styles.container}>
                <View style={innerStyles.product_buy_detail_row}>
                    <Ionicons name="shield-checkmark-outline" size={24} color="black" style={{marginLeft:5}} />
                    <Text style={{fontFamily : "SemiBold" , textAlign : "right"}}>
                        گارانتی 18 ماهه ایفل
                    </Text>
                </View>
                <Divider />

                <View style={innerStyles.product_buy_detail_row}>
                    <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" style={{marginLeft:5}} />
                    <Text style={{fontFamily : "SemiBold" , textAlign : "right"}}>
                        امکان بازگشت کالا
                    </Text>
                </View>
                <Divider />

                <View style={{flexDirection:"row-reverse",alignItems:'center' , justifyContent : "space-between"}}>
                    <View style={innerStyles.product_buy_detail_row}>
                        <FontAwesome name="money" size={24} color="black" style={{marginLeft:5}}/>
                        <Text style={{fontFamily : "SemiBold" , textAlign : "right"}}>
                            شرایط خرید اقساطی
                        </Text>
                    </View>
                    <View style={[innerStyles.product_buy_detail_row]}>
                        <Text style={{fontFamily : "Regular" , fontSize : 12 , marginLeft : 3}}>
                            پیش پرداخت :
                        </Text>
                        <Chip onPress={() => console.log('Pressed')}>
                            <Text style={{fontFamily:"Medium",color :theme.colors.primary}}>
                                20 درصد
                                <MaterialIcons name="keyboard-arrow-down" size={24} color={theme.colors.primary} />
                            </Text>
                        </Chip>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection : "row-reverse" , marginBottom : 10}}>
                        <Ionicons name="md-ellipse" size={10} color={theme.colors.primary} style={{verticalAlign : "middle" , marginLeft : 5}} />
                        <Text style={{fontFamily : "Light" , textAlign: 'right', writingDirection : "rtl"}}>
                            ۱,۳۱۴,۶۱۰
                            تومان پیش پرداخت
                        </Text>
                    </View>
                    <View style={{flexDirection : "row-reverse"}}>
                        <Ionicons name="md-ellipse" size={10} color={theme.colors.primary} style={{verticalAlign : "middle" , marginLeft : 5}} />
                        <Text style={{fontFamily : "Light" , textAlign: 'right', writingDirection : "rtl"}}>
                            ۱,۳۱۴,۶۱۰
                            تومان پیش پرداخت
                        </Text>
                    </View>

                </View>

            </View>
        </View>
        <View style={[styles.card,innerStyles.product_buy_detail]}>
            <View style={styles.container}>
                <View style={innerStyles.product_buy_detail_row}>
                    <Text style={{fontFamily : "Black" , textAlign : "right"}}>
                        مشخصات کالا :
                    </Text>
                </View>
                <Divider />

                <View style={innerStyles.product_buy_detail_row}>
                    <DataTable>
                        <DataTable.Row>
                             <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular"}}>
                                    کتان
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular" , color :"#909090"}}>
                                    جنس
                                </Text>
                            </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular"}}>
                                    راه راه قهوه ای
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular" , color :"#909090"}}>
                                    طرح
                                </Text>
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row >
                            <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular"}}>
                                    بلند
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                <Text style={{textAlign : "center" , fontFamily : "Regular" , color :"#909090"}}>
                                    آستین
                                </Text>
                            </DataTable.Cell>
                        </DataTable.Row>

                        {/*<DataTable.Pagination*/}
                        {/*    page={page}*/}
                        {/*    numberOfPages={3}*/}
                        {/*    onPageChange={(page) => setPage(page)}*/}
                        {/*    label="1-2 of 6"*/}
                        {/*    optionsPerPage={optionsPerPage}*/}
                        {/*    itemsPerPage={itemsPerPage}*/}
                        {/*    setItemsPerPage={setItemsPerPage}*/}
                        {/*    showFastPagination*/}
                        {/*    optionsLabel={'Rows per page'}*/}
                        {/*/>*/}
                    </DataTable>
                </View>

            </View>
        </View>
        <View style={[styles.card,innerStyles.product_buy_detail]}>
            <View style={styles.container}>
                <View style={innerStyles.product_buy_detail_row}>
                    <Text style={{fontFamily : "Black" , textAlign : "right"}}>
                        توضیحات محصول :
                    </Text>
                </View>

                <View style={innerStyles.product_buy_detail_row}>
                    <Text style={{direction : "rtl" , textAlign : "right" ,fontFamily : "Light" , fontSize : 13}}>
                        این محصول فری سایز می باشد و می تواند برای افراد در سایزهای مختلف مورد استفاده قرار بگیرد. این بافت زیبا از الیاف طبیعی با بهترین کیفیت ساخته شده است و دارای کیفیت بسیار بالا و عالی می باشد .
                    </Text>
                </View>

            </View>
        </View>
        <View style={styles.container}>
            <View style={[styles.row, styles.justifyContentBetween]}>
                <Text style={styles.category_title} variant="displayLarge">
                    نظرات مشتریان
                </Text>
                <Button mode={'text'} onPress={() => console.log('more btn')}>
                    <Text style={styles.moreBtn}>مشاهده همه</Text>
                </Button>
            </View>
            <ScrollView horizontal={true} style={{width: "100%" , height: 300 ,transform: [{ scaleX: -1 }]}}>
                <View style={[styles.row,{transform: [{ scaleX: -1 }]}]}>
                    <View style={[innerStyles.product_comment_card]}>
                        <Card style={[styles.card]}>
                            <Card.Content>
                                <View style={[styles.row, styles.justifyContentBetween]}>
                                    <Text style={{textAlign : "right" , fontFamily :"Bold"}} >
                                        محمد محمدیان
                                    </Text>
                                    <Text style={{fontFamily : "Light"}} >1401/10/12</Text>
                                </View>
                                <Divider style={{marginVertical : 10}} />
                                <Text style={{fontFamily : "Light" , textAlign : "right"}} variant="bodyMedium">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </Card.Content>
                            <Card.Actions style={innerStyles.product_comment_card_action}>
                                    <View style={{flex : 1}}>
                                        <Text style={{fontFamily : "Light" , textAlign : "right"}}>
                                            امتیاز کاربر
                                        </Text>
                                    </View>
                                    <View style={[innerStyles.product_comment_card_subtitle ,styles.justifyContentBetween , {alignItem : "center"}]}>
                                        <Text style={{fontFamily : "Bold",color : theme.colors.primary,fontSize : 20 }}>
                                            4
                                        </Text>
                                        <Text style={{fontFamily : "Light"}}>
                                            /
                                        </Text>
                                        <Text style={{fontFamily : "Light"}}>
                                            10
                                        </Text>
                                    </View>
                            </Card.Actions>
                        </Card>
                    </View>
                    <View style={[innerStyles.product_comment_card]}>
                        <Card style={[styles.card]}>
                            <Card.Content>
                                <View style={[styles.row, styles.justifyContentBetween]}>
                                    <Text style={{textAlign : "right" , fontFamily :"Bold"}} >
                                        محمد محمدیان
                                    </Text>
                                    <Text style={{fontFamily : "Light"}} >1401/10/12</Text>
                                </View>
                                <Divider style={{marginVertical : 10}} />
                                <Text style={{fontFamily : "Light" , textAlign : "right"}} variant="bodyMedium">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </Card.Content>
                            <Card.Actions style={innerStyles.product_comment_card_action}>
                                <View style={{flex : 1}}>
                                    <Text style={{fontFamily : "Light" , textAlign : "right"}}>
                                        امتیاز کاربر
                                    </Text>
                                </View>
                                <View style={[innerStyles.product_comment_card_subtitle ,styles.justifyContentBetween , {alignItem : "center"}]}>
                                    <Text style={{fontFamily : "Bold",color : theme.colors.primary,fontSize : 20 }}>
                                        4
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        /
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        10
                                    </Text>
                                </View>
                            </Card.Actions>
                        </Card>
                    </View>
                    <View style={[innerStyles.product_comment_card]}>
                        <Card style={[styles.card]}>
                            <Card.Content>
                                <View style={[styles.row, styles.justifyContentBetween]}>
                                    <Text style={{textAlign : "right" , fontFamily :"Bold"}} >
                                        محمد محمدیان
                                    </Text>
                                    <Text style={{fontFamily : "Light"}} >1401/10/12</Text>
                                </View>
                                <Divider style={{marginVertical : 10}} />
                                <Text style={{fontFamily : "Light" , textAlign : "right"}} variant="bodyMedium">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </Card.Content>
                            <Card.Actions style={innerStyles.product_comment_card_action}>
                                <View style={{flex : 1}}>
                                    <Text style={{fontFamily : "Light" , textAlign : "right"}}>
                                        امتیاز کاربر
                                    </Text>
                                </View>
                                <View style={[innerStyles.product_comment_card_subtitle ,styles.justifyContentBetween , {alignItem : "center"}]}>
                                    <Text style={{fontFamily : "Bold",color : theme.colors.primary,fontSize : 20 }}>
                                        4
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        /
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        10
                                    </Text>
                                </View>
                            </Card.Actions>
                        </Card>
                    </View>
                    <View style={[innerStyles.product_comment_card]}>
                        <Card style={[styles.card]}>
                            <Card.Content>
                                <View style={[styles.row, styles.justifyContentBetween]}>
                                    <Text style={{textAlign : "right" , fontFamily :"Bold"}} >
                                        محمد محمدیان
                                    </Text>
                                    <Text style={{fontFamily : "Light"}} >1401/10/12</Text>
                                </View>
                                <Divider style={{marginVertical : 10}} />
                                <Text style={{fontFamily : "Light" , textAlign : "right"}} variant="bodyMedium">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </Card.Content>
                            <Card.Actions style={innerStyles.product_comment_card_action}>
                                <View style={{flex : 1}}>
                                    <Text style={{fontFamily : "Light" , textAlign : "right"}}>
                                        امتیاز کاربر
                                    </Text>
                                </View>
                                <View style={[innerStyles.product_comment_card_subtitle ,styles.justifyContentBetween , {alignItem : "center"}]}>
                                    <Text style={{fontFamily : "Bold",color : theme.colors.primary,fontSize : 20 }}>
                                        4
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        /
                                    </Text>
                                    <Text style={{fontFamily : "Light"}}>
                                        10
                                    </Text>
                                </View>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
        <CarouselCard title={'محصولات مشابه'} />
        <View style={{margin : 100}}></View>

    </ScrollView>
    <View style={[styles.row, innerStyles.product_footer]}>
        <View style={styles.col}>
            <Text style={{textAlign:"right",fontFamily : "Medium"}}>قیمت :</Text>
            <View style={styles.row}>
                <Text style={innerStyles.product_footer_price}>
                    1.250.000
                </Text>
                <Text style={{textAlign:"right",fontFamily : "Light" , marginHorizontal : 5}}>
                    ریال
                </Text>
            </View>
            <Text style={innerStyles.product_footer_title}>
                تنها 1 عدد باقیمانده است
            </Text>

        </View>
        <View style={styles.col_auto}>
            <Button mode={'contained'} onPress={() => props.navigation.push('Cart')}>
                <Text style={{fontFamily : 'Medium' , color : "#fff"}}>
                    افزودن به سبد خرید
                </Text>
            </Button>

        </View>
    </View>
    </>
);
}

const innerStyles = StyleSheet.create({
    product_header : {
        backgroundColor : "#fff",
        borderBottomRightRadius : 30 ,
        borderBottomLeftRadius : 30 ,
        elevation : 3,
        shadowColor : "rgba(204,204,204,0.49)",
        paddingBottom : 15
    },
    product_slider : {
        overflow : "hidden" ,
        borderBottomRightRadius : 30 ,
        borderBottomLeftRadius : 30 ,
    },
    product_name : {
        fontFamily : "Bold",
        textAlign : "right",
        fontSize : 15 ,
        paddingTop : 20,
    },
    product_send_detail : {
        fontFamily : "Medium",
        textAlign : "right",
        color : theme.colors.primary,
        fontSize : 13 ,
        paddingBottom : 8
    },
    user_type_titr : {
        fontFamily : "Medium",
        textAlign : "center",
        fontSize : 13 ,
        paddingBottom : 8
    } ,
    user_type_price_area : {
        fontFamily : "Regular",
        textAlign : "center",
        fontSize : 10 ,
        direction : "rtl",
        color : theme.colors.success
    },
    user_type_price : {
        fontFamily : "Bold",
        textAlign : "right",
        fontSize : 15 ,
        color : theme.colors.success
    } ,
    user_type_price_off : {
        fontFamily : "Light",
        textAlign : "right",
        fontSize : 10 ,
        textDecorationLine : "line-through",
        color : theme.colors.success
    } ,
    user_type_price_percent : {
        fontFamily : "Bold",
        textAlign : "right",
        fontSize : 10 ,
        backgroundColor : theme.colors.primary ,
        color : "#fff" ,
        borderRadius : 20,
        paddingHorizontal : 2
    } ,
    user_type_normal : {
        borderRadius : 10 ,
        marginTop : 10 ,
        backgroundColor : '#fff' ,
        borderColor : theme.colors.primary,
        borderWidth : 1,
        shadowColor : theme.colors.primary,
        elevation : 3,
    } ,
    user_type_gray : {
        borderRadius : 10 ,
        marginTop : 10 ,
        backgroundColor : theme.colors.gray ,
    } ,
    user_type_gold : {
        borderRadius : 10 ,
        marginTop : 10 ,
        backgroundColor : theme.colors.warning ,
    } ,
    horizintal_divider : {
        width : 1,
        height : '80%',
        backgroundColor: "rgba(246, 246, 246, 1)" ,
        marginHorizontal : 5
    },
    product_title : {
        fontFamily : "Bold",
        textAlign : "right"
    },
    product_color_area : {
        display:'flex' ,
        flexDirection : "row" ,
        borderColor : '#ccc' ,
        borderWidth : 1 ,
        borderRadius : 10 ,
        paddingHorizontal : 10,
        paddingVertical : 5,
    },
    product_color : {
        width :30,
        height : 30,
        borderRadius : 15 ,
    },
    acitve : {
        backgroundColor : theme.colors.primary,
        borderColor : theme.colors.primary,
        color : "#fff"
    } ,
    product_buy_detail : {
        marginTop : 20 ,
        paddingVertical : 15
    },
    product_buy_detail_row : {
        display: "flex" ,
        alignItems : "center",
        flexDirection:  "row-reverse",
        paddingVertical : 10
    },
    product_comment_card: {
        width: 250,
        paddingHorizontal : 3,
    },
    product_comment_card_subtitle: {
        display : "flex" ,
        flexDirection : "row" ,
        alignItems : "center"
    },
    product_comment_card_action: {
        display : "flex" ,
        flexDirection : "row-reverse" ,
        justifyContent : "center" ,
        width : "100%" ,
        // backgroundColor : "blue" ,
        paddingHorizontal : 10
    },
    product_footer : {
        paddingVertical : 10 ,
        position : "absolute" ,
        bottom : 0 ,
        paddingHorizontal : 20 ,
        backgroundColor : "#fff",
    },
    product_footer_title : {
        textAlign:"right",
        fontFamily : "Light" ,
        color : theme.colors.primary
    },
    product_footer_price : {
        textAlign:"right",
        fontFamily : "Medium",
        fontSize : 20 ,
        color : theme.colors.success
    }
});