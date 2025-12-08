import React from "react";

import MainView from "@/components/Views/MainView";

import MainCard from "@/components/Cards/MainCard";
import { MainCardProps } from "@/types/CardTypes";

export default function index() {

  const data: MainCardProps = {
    tab_name: "Groceries",
    spent: 100,
    budget: 200,
  };

  return (
    <MainView>
      <MainCard {...data} />
    </MainView>
  );
}
