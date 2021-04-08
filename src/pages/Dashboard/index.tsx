import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import Food from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";
import ModalEditFood from "../../components/ModalEditFood";
import { FoodsContainer } from "./styles";
import { EditFoodData, FoodsProps } from "./types";

const Dashboard = () => {
  const [foods, setFoods] = useState<FoodsProps[]>([]);
  const [editingFood, setEditingFood] = useState<FoodsProps>({} as FoodsProps);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleAddFood = async (food: EditFoodData) => {
    try {
      const { data } = await api.post("/foods", {
        ...food,
        available: true,
      });

      setFoods([...foods, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateFood = async (food: EditFoodData) => {
    try {
      const { data } = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const foodsUpdated = foods.map((f) =>
        f.id !== editingFood.id ? f : { ...data }
      );
      setFoods(foodsUpdated);
      setEditingFood({} as FoodsProps);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleEditFood = (food: FoodsProps) => {
    setEditingFood(food);
    setEditModalOpen(true);
  };

  useEffect(() => {
    const loadFoods = async () => {
      const { data } = await api.get("/foods");
      setFoods(data);
    };
    loadFoods();
  }, []);

  return (
    <>
      <Header openModal={() => setModalOpen((prev) => !prev)} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={() => setModalOpen((prev) => !prev)}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={() => setEditModalOpen((prev) => !prev)}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
