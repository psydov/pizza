import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import "./App.css";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {

    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  console.log("pizzasList>>>>>", pizzasList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas 
        pizzasList={pizzasList} 
        deletePizza={deletePizza}
        updatePizza={updatePizza} />
      </div>
    </div>
  );
};

export default App;

// type X = {
//   a: string,
//   b: number
// }

// type Y = X & {
//   c: string,
//   d: number
// }

// let y: Y = {
//   c: 'test',
//   d: 5,
//   a: 'one',
//   b: 10
// }

// interface Auto {
//   country: string,
// }

// interface BMW extends Auto {
//   model: string,
//   year: number
// }

// const bmw: BMW = {
//   model: '5',
//   year: 2023,
//   country: 'Germany'
// }

// type Order = {
//   title: string,
//   quantity?: number
// }

// interface MyOrder {
//   title: string,
//   quantity?: number
// }

// type PrintTitle = (title: string) => string;

// const printTitle: PrintTitle = (title) => {
//   return title;
// }
// printTitle('salami')

// const test: string = 'test'
// console.log(test.trim());

// type Order = {
//   title: string,
//   quantity?: number
// }

// const order: Order = {title: 'margarita', quantity: 10}

// const orders: Order[] = [
//   {title: 'margarita'},
//   {title: 'salami', quantity: 10},
// ];

// let number: null | number = null;
// number = 10;
