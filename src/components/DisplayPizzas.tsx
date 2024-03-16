import Pizza from "../models/Pizza";
import React, { FC } from "react";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[],
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglePizza 
            key={pizza.id} 
            deletePizza={deletePizza}
            pizza={pizza}
            updatePizza={updatePizza}
            />
      })}
    </div>
  );
};

export default DisplayPizzas;
