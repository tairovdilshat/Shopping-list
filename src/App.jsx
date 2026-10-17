import { useState } from "react";
import ShoppingItem from "./ShoppingItem";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (!name || !price) return;
    setItems([...items, { id: Date.now(), name, price: Number(price) }]);
    setName("");
    setPrice("");
  };

  const deleteItem = (id) => setItems(items.filter((i) => i.id !== id));

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div>
      <h1>Список покупок</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" type="number" />
      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            name={item.name}
            price={item.price}
            onDelete={() => deleteItem(item.id)}
          />
        ))}
      </ul>

      <h3>Итого: {total} сом</h3>
    </div>
  );
}

export default App;