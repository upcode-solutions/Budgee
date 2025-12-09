import React from "react";

import MainView from "@/components/Views/MainView";

import TabsContainer from "@/components/Tabs/TabsContainer";

import MainCard from "@/components/Cards/MainCard";
import { MainCardProps } from "@/types/CardTypes";

import { TabsContainerProps } from "@/types/components/TabsTypes";

export default function index() {

  const data: MainCardProps = {
    tab_name: "Groceries",
    spent: 100,
    budget: 200,
  };

  const tabData: TabsContainerProps = {
    tabNames: [{ tabName: "Groceries" }, { tabName: "Clothes" }, { tabName: "Bills" }, { tabName: "Entertainment" }, { tabName: "Other" }],
    activeTabIndex: 0,
  };

  return (
    <MainView>
      <TabsContainer {...tabData} />
      <MainCard {...data} />
    </MainView>
  );
}
