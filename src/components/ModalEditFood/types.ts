import { EditFoodData, FoodsProps } from "../../pages/Dashboard/types";

export type ModalEditFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodsProps;
  handleUpdateFood: (food: EditFoodData) => Promise<void>;
};
