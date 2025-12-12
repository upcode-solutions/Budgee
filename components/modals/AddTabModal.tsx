import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Modal from "react-native-modal";

//system
import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

//props
import { AddTabsProps } from '../../types/components/ModalTypes';


export default function AddTabModal(props: AddTabsProps) {

    const { colors } = useThemeContext()
    const design = styles(colors)

  return (
    <Modal
      isVisible={props.isAddTabsViisible}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={90}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => props.setIsAddTabsViisible(false)}
    >
        <View style={design.container}>
            <Text>AddTabModal</Text>
        </View>
    </Modal>
  )
}

const styles = (colors: ColorScheme) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',

    }
})