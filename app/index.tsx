import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useThemeContext } from '../context/ThemeContext';

import ListItemView from '@/components/Cards/ListCard';
import AddModal from '@/components/Modals/AddModal';

import MainCard from '@/components/Cards/MainCard';


export default function Index() {

  const { colors } = useThemeContext()
  
  const [list, setList] = useState<{ label: string; price: number }[]>([
    { label: 'Sample Item 1', price: 10 },
  ])

  const [isAddModalVisible, setIsAddModalVisible] = useState(false)

  console.log(list)


  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>

      <MainCard 
        tab_name='Main'
        spent={50}
        budget={200}
      />
      <View>
        { list.length === 0 ? 
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <MaterialCommunityIcons name="clipboard-list-outline" size={100} color={colors.text} />
          <Text style={{ color: colors.text, fontSize: 18, marginTop: 10 }}>No items added yet</Text>
        </View>
        :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', gap: 10 }}>
          {list.map((item, index) => (
            <ListItemView key={index} items={item}/>
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