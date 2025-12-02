import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Modal from "react-native-modal";

import AddModalProps from "../../types/Model_Types";

export default function AddModal({
  isAddModalVisible,
  setIsAddModalVisible,
  onAdd,
}: AddModalProps) {

    const [label, setLabel] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);

  const HandleSave = () => {
    onAdd({ label, price });
    setIsAddModalVisible(false);
  };

  return (
    <Modal
      isVisible={isAddModalVisible}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={90}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => setIsAddModalVisible(false)}
    >
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Add New Item</Text>
        <TextInput
            placeholder="Item Label"
            value={label}
            onChangeText={setLabel}
            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 20 }}
        />
        <TextInput
            placeholder="Item Price"
            value={price.toString()}
            onChangeText={(text) => setPrice(Number(text))}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 20 }}
        />
        <TouchableOpacity onPress={HandleSave} style={{ backgroundColor: '#007BFF', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
        </TouchableOpacity>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
