import { FoodProps } from "../../pages/Dashboard/types";

export type FoodProps = {
  food: FoodsProps;
  handleDelete: (id: number) => Promise<void>;
  handleEditFood: (food: FoodProps) => void;
};

export type FoodStyledProps = {
  available: boolean;
};
