import {Button, Dialog, Portal, Text} from "react-native-paper";
import {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import theme from "../theme/theme";

function CustomAlert({status=false,setStatus , title,text ,accept_text,reject_text,icon , color,handelConfirm}) {
    const [visible, setVisible] = useState(status);
    const hideDialog = () => setVisible(false);
    useEffect(() => {
        setVisible(status)
        // setStatus(status)
        // console.log("Status" , visible)
        if(status)
            setStatus('false')

    } , [status])

    const getColor = () => {
        switch (color){
            case 'primary' :
                return theme.colors.primary ;
            case 'success' :
                return theme.colors.success ;
            case 'info' :
                return '#37a1cb' ;
            case 'warning' :
                return "#e8b700" ;
            case 'error' :
                return theme.colors.error ;
        }
    }
    const getIcons = () => {
        switch (color){
            case 'success' :
                return 'check-circle-outline' ;
            case 'info' :
                return 'alert-circle-outline' ;
            case 'warning' :
                return 'alert-outline' ;
            case 'error' :
                return 'close-circle-outline' ;
            default:
                return icon;
        }
    }
    return (
        <Portal>
            <Dialog
                style={{backgroundColor: "#fff"}}
                visible={visible} onDismiss={hideDialog}>
                {
                    getIcons() && (
                        <Dialog.Icon icon={getIcons()} color={getColor()} size={50}/>
                    )
                }

                <Dialog.Title style={{textAlign:"center" , fontSize : 20}}>
                    <Text style={{fontFamily : "Bold"}}>
                        {title}
                    </Text>
                </Dialog.Title>
                {
                    text &&
                    (
                        <Dialog.Content>
                            <Text style={{fontFamily : "Regular",textAlign : "center"}} variant="bodyMedium">
                                {text}
                            </Text>
                        </Dialog.Content>
                    )
                }

                <Dialog.Actions style={{justifyContent : "center"}}>
                    {
                        accept_text && (
                            <Button mode={'contained'} style={innerStyles.btn_primary} onPress={handelConfirm}>
                                <Text style={{fontFamily : "Light" , color : "#fff"}}>
                                    {accept_text}
                                </Text>
                            </Button>
                        )
                    }

                    {
                        reject_text && (
                            <Button mode={'contained'} style={innerStyles.btn_reject} onPress={hideDialog}>
                                <Text style={{fontFamily : "Light"}}>
                                    {reject_text}
                                </Text>
                            </Button>
                        )
                    }

                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}
const innerStyles = StyleSheet.create({
    btn_primary : {
        paddingHorizontal : 15 ,
        borderRadius : 10 ,
    },
    btn_reject : {
        paddingHorizontal : 15 ,
        borderRadius : 10 ,
        backgroundColor : "#f5f5f5"
    }
})
export default CustomAlert;