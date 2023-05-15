import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from "react-native-paper";
import BottomSheet from '@gorhom/bottom-sheet';

const CustomDrawer = ({height = '60%' , children}) => {
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => [height, '70%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
/*

    const handleSnapPress = useCallback((index) => {
        bottomSheetRef.current.snapToIndex(index);
    }, []);
*/

    const handleClosePress = () => bottomSheetRef.current.close()


    // renders
    return (
        <View style={innertStyles.container}>
            {/*<Button title="Close Sheet" onPress={() => handleSnapPress(0)}>
                <Text>
                    Open
                </Text>
            </Button>*/}
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                {children}

            </BottomSheet>
        </View>
    );
};

const innertStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        // backgroundColor: 'grey',
    },
});

export default CustomDrawer;