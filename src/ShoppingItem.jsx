function ShoppingItem({ name, price, onDelete }) {
  return (
    <li>
      {name} — {price} сом
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}

export default ShoppingItem;