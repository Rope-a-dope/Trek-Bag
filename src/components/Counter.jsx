import { useItems } from "../stores/itemsStore";

export default function Counter() {
  const items = useItems();
  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
