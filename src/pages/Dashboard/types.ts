export type FoodsProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  available: boolean;
};

export type EditFoodData = Omit<FoodsProps, "id" | "available">;
