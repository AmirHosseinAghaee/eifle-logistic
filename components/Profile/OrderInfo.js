import {Image, ScrollView, StyleSheet, View} from "react-native";
import styles from "../styles/style";
import {Button, DataTable, Divider, ProgressBar, Text} from "react-native-paper";
import theme from "../../theme/theme";
import Price from "../Price";

const OrderInfo = () => {
    return (
        <ScrollView>
            <View style={[styles.container , {marginTop : 10 , paddingBottom : 350}] }>
                <View style={[styles.card , {padding : 10}]}>
                    <View style={[styles.row , {alignItems: 'center'}]}>
                        <View style={styles.col_auto}>
                            <View style={[innerStyles.product_img_area]}>
                                <Image
                                    style={innerStyles.product_img}
                                    source={require('../../assets/images/product_1.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.col}>
                            <Text style={{textAlign : "right" , fontFamily : "Medium"}}>
                                جارو برقی وینسنت پلاس مدل FZFC7625
                            </Text>
                            <View>
                                <Button mode={'contained-tonal'}
                                        style={{borderRadius : 5 , width : 120} }
                                >
                                    <Text style={{color : theme.colors.primary, fontFamily :"Medium"}}>
                                        مرجوع کردن
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <Divider/>
                    <View style={[styles.row , {alignItems: 'center'}]}>
                        <View style={styles.col_auto}>
                            <View style={[innerStyles.product_img_area]}>
                                <Image
                                    style={innerStyles.product_img}
                                    source={require('../../assets/images/product_1.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.col}>
                            <Text style={{textAlign : "right" , fontFamily : "Medium"}}>
                                سرخ کن 5.7 لیتری آزور مدل AZ-409AF
                            </Text>
                            <Button mode={'contained-tonal'}
                                    style={{borderRadius : 5 , width : 120} }
                            >
                                <Text style={{color : theme.colors.primary, fontFamily :"Medium"}}>
                                    مرجوع کردن
                                </Text>
                            </Button>
                        </View>
                    </View>

                </View>

                <View style={[styles.card , {padding : 10 , marginTop : 10}]}>
                    <View style={[styles.row , {alignItems: 'center'}]}>
                        <View style={styles.col_12}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    در حال پردازش
                                </Text>
                                <Text style={{fontFamily :"Light"}}>
                                    وضعیت سفارش
                                </Text>
                            </View>
                            <ProgressBar
                            style={{marginVertical : 10}}
                                progress={0.5} color={theme.colors.primary} />
                        </View>
                        <View style={[styles.col_12]}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    کد سفارش:
                                </Text>
                                <Text style={{fontFamily :"Bold"}}>
                                    307131242
                                </Text>
                            </View>
                            <Divider style={{marginVertical: 5}}/>
                        </View>

                        <View style={styles.col_12}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    تاریخ ثبت :
                                </Text>
                                <Text style={{fontFamily :"Bold"}}>
                                    1401/09/023
                                </Text>
                            </View>
                            <Divider style={{marginVertical: 5}}/>
                        </View>

                        <View style={styles.col_12}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    تحویل گیرنده:
                                </Text>
                                <Text style={{fontFamily :"Bold"}}>
                                    محمد محمدی
                                </Text>
                            </View>
                            <Divider style={{marginVertical: 5}}/>
                        </View>
                        <View style={styles.col_12}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    شماره تماس :
                                </Text>
                                <Text style={{fontFamily :"Bold"}}>
                                    09175622596
                                </Text>
                            </View>
                            <Divider style={{marginVertical: 5}}/>
                        </View>
                        <View style={styles.col_12}>
                            <View style={[styles.row , {justifyContent : "space-between"}]}>
                                <Text style={{fontFamily :"Light"}}>
                                    زمان تحویل:
                                </Text>
                                <Text style={{fontFamily :"Bold"}}>
                                    یک شنبه 27 آذر
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={[styles.card , {padding : 10 , marginTop : 10}]}>
                    <Text style={innerStyles.card_title}>
                        صورت حساب
                    </Text>
                    <View>
                        <DataTable>
                            <DataTable.Row>
                                <DataTable.Cell style={{justifyContent : "flex-start"}} >
                                    <Text style={{fontFamily : "Bold"}}>
                                        اقساط
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                    <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                                        نوع خرید:
                                    </Text>
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell style={{justifyContent : "flex-start"}} >
                                    <Text style={{fontFamily : "Bold"}}>
                                        4,500,000 تومان
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                    <Text style={{textAlign : "center" , fontFamily : "Light"}}>
                                        پیش پرداخت :
                                    </Text>
                                </DataTable.Cell>
                            </DataTable.Row>


                            <DataTable.Row>
                                <DataTable.Cell style={{justifyContent : "flex-start"}} >
                                    <View>
                                        <Text style={{textAlign : "left" , fontFamily : "Light"}}>
                                            1402/01/01
                                        </Text>
                                        <Text style={{
                                            textAlign : "right" ,
                                            fontFamily : "Medium" ,
                                            backgroundColor : "rgba(55, 125, 113, 0.13)",
                                            borderRadius : 5 ,
                                            fontSize : 11,
                                            color : theme.colors.success,
                                        }}>
                                            پرداخت شده
                                        </Text>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                    <View>
                                        <Text style={{textAlign : "right" , fontFamily : "Light"}}>
                                            قسط اول :
                                        </Text>
                                        <Text style={{textAlign : "right" , fontFamily : "Medium"}}>
                                            1,200,000 تومان
                                        </Text>
                                    </View>

                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell style={{justifyContent : "flex-start"}} >
                                    <View>
                                        <Text style={{textAlign : "left" , fontFamily : "Light"}}>
                                            1402/01/01
                                        </Text>
                                        <Text style={{
                                            textAlign : "right" ,
                                            fontFamily : "Medium" ,
                                            backgroundColor : "#FFF5F8",
                                            borderRadius : 5 ,
                                            fontSize : 11,
                                            color : theme.colors.primary,
                                        }}>
                                            پرداخت نشده
                                        </Text>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={{justifyContent : "flex-end"}} >
                                    <View>
                                        <Text style={{textAlign : "right" , fontFamily : "Light"}}>
                                            قسط دوم :
                                        </Text>
                                        <Text style={{textAlign : "right" , fontFamily : "Medium"}}>
                                            1,200,000 تومان
                                        </Text>
                                    </View>

                                </DataTable.Cell>
                            </DataTable.Row>


                        </DataTable>
                    </View>
                    <View style={[styles.row,innerStyles.price_area]}>
                        <View style={styles.col}>
                            <Text style={{textAlign:"right",fontFamily : "Medium" , color : theme.colors.success}}>
                                مبلغ پرداخت شده:
                            </Text>
                        </View>
                        <View style={styles.col_auto}>
                            <Price
                                price={1250000}
                            />
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
    ) ;
}
const innerStyles = StyleSheet.create({
    product_img_area : {
        width : 90 ,
        height : 90
    },
    product_img : {
        width : '100%' ,
        height : 90
    },
    card_title : {
        fontFamily:'Black' ,
        textAlign : "right" ,
        paddingVertical : 10 ,
        paddingHorizontal : 15,
    },
})

export default OrderInfo ;