
interface AddModalProps {
    isAddModalVisible: boolean;
    setIsAddModalVisible: (value: boolean) => void;
    onAdd: (item: { label: string; price: number }) => void;
}

interface AddTabsProps {
    isAddTabsViisible: boolean;
    setIsAddTabsViisible: (value: boolean) => void;
}

export { AddModalProps, AddTabsProps };

