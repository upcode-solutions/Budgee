import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useThemeContext } from '../context/ThemeContext';

import AddModal from '@/components/modals/AddModal';


export default function Index() {

  const { colors } = useThemeContext()
  
  const [list, setList] = useState<{ label: string; price: number }[]>([
    { label: 'Item 1', price: 10 },
    { label: 'Item 2', price: 20 },
    { label: 'Item 3', price: 30 },
  ])

  const [isAddModalVisible, setIsAddModalVisible] = useState(false)

  console.log(list)


  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View>
        { list.length === 0 ? 
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <MaterialCommunityIcons name="clipboard-list-outline" size={100} color={colors.text} />
          <Text style={{ color: colors.text, fontSize: 18, marginTop: 10 }}>No items added yet</Text>
        </View>
        :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {list.map((item, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ color: colors.text, fontSize: 16 }}>{item.label}: ${item.price}</Text>
            </View>
          ))}
        </View>
      }
      </View>
      <View style={{ position: 'absolute', bottom: 30, right: 30 }}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={60}
          color={colors.primary}
          onPress={() => setIsAddModalVisible(true)}
        />
      </View>
      <AddModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
        onAdd={(item) => setList([...list, item])}
      />
    </View>
  )
}

const styles = StyleSheet.create({})