import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import Modal from "react-native-modal";

interface PriceModalProps {
  isModalVisible: boolean;
  price: number;
  setIsModalVisible: (value: boolean) => void;
  setPrice: (value: number) => void;
}

export default function PriceModal({
  isModalVisible,
  setIsModalVisible,
  price,
  setPrice,
}: PriceModalProps) {
  const [inputValue, setInputValue] = React.useState<string>(price.toString());

  const handleSave = (newPrice: number) => {
    setPrice(newPrice);
    setIsModalVisible(false);
  };

  return (
    <Modal
      isVisible={isModalVisible}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={90}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => setIsModalVisible(false)}
    >
      <View style={styles.modelBackground}>
        <TextInput
          placeholder="Enter Price"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
        />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text style={styles.closeModalText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSave(parseFloat(inputValue))}>
            <Text style={styles.closeModalText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modelBackground: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  closeModalText: {
    color: "black",
    fontSize: 18,
  },
});
