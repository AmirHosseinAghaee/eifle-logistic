import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from "react-native-paper";
import BottomSheet from '@gorhom/bottom-sheet';

const CustomDrawer = ({height = '15%' , children , status}) => {

    const [DrawerStatus , setDrawerStatus] = useState(status);
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => [height ,'55%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        // handleSnapPress(index);
    }, []);

    const handleSnapPress = useCallback((index) => {
        bottomSheetRef.current.snapToIndex(index);
    }, []);

    const handleClosePress = () => {
        setDrawerStatus('close')
        bottomSheetRef.current.close()
    }
    useEffect(() => {
        console.log("i am here")
    },[])

    useEffect( () => {
        if(status && status ==='open')
        {
            setDrawerStatus('open');
            setTimeout(()=> {
                handleSnapPress(1);
            },500)


        }
        else
        {
            bottomSheetRef.current.close()
            setDrawerStatus('close')
        }

    },[status])


    // renders
    return (
        <View style={DrawerStatus && DrawerStatus ==='open' ? innertStyles.container : ""}>
        {/*<View>*/}
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                {children(handleClosePress)}
            </BottomSheet>
        </View>
    );
};

const innertStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        position : "absolute",
        backgroundColor : "rgba(0,0,0,0.28)",
        bottom : 0,
        left : 0 ,
        right : 0 ,
        top : 0,
        // backgroundColor: 'grey',
    },
});

export default CustomDrawer;