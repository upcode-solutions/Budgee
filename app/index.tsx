import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";


import MainView from "@/components/Views/MainView";

import TabsContainer from "@/components/Tabs/TabsContainer";
import { TabsContainerProps } from "@/types/components/TabsTypes";

import MainCard from "@/components/Cards/MainCard";
import { MainCardProps } from "@/types/components/CardTypes";

import AddTabModal from "@/components/Modals/AddTabModal";

export default function Index() {

  const data: MainCardProps = {
    tab_name: "Groceries",
    spent: 100,
    budget: 200,
  };

  /* const tabData: TabsContainerProps = {
    tabNames: [],
    activeTabIndex: 0,
  }; */

  const [tabData, setTabData] = useState<TabsContainerProps>({
    tabNames: [{ tabName: "Groceries" }, { tabName: "Entertainment" }, { tabName: "Utilities" }, { tabName: "Groceries" }],
    activeTabIndex: 0
  })

  const [isAddTabsViisible, setIsAddTabsViisible] = useState(false);

  return (
    <MainView>
      <View style={{ height: 45, flexDirection: 'row', gap: 10 }}>
        <TabsContainer {...tabData} />
      </View> 
      <MainCard {...data} />
      <TouchableOpacity onPress={() => setIsAddTabsViisible(true)}>
        <Text>Add Tab</Text>
      </TouchableOpacity>
      <AddTabModal isAddTabsViisible={isAddTabsViisible} setIsAddTabsViisible={setIsAddTabsViisible} />
    </MainView>
  );
}
