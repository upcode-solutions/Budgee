interface TabsProps {
    tabName: string;
    expand?: boolean;
}

interface TabsContainerProps {
    tabNames: TabsProps[];
    activeTabIndex: number;
}

export { TabsContainerProps, TabsProps };

