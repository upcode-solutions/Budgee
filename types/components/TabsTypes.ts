interface TabsProps {
    tabName: string;
}

interface TabsContainerProps {
    tabNames: TabsProps[];
    activeTabIndex: number;
}

export { TabsContainerProps, TabsProps };

