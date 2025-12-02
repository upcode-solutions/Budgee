
interface AddModalProps {
    isAddModalVisible: boolean;
    setIsAddModalVisible: (value: boolean) => void;
    onAdd: (item: { label: string; price: number }) => void;
}

export default AddModalProps;
