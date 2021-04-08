import { EditFoodData } from "../../pages/Dashboard/types";

export type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: EditFoodData) => Promise<void>;
};
