import { useItems } from "../stores/itemsStore";

export default function Counter() {
  const items = useItems();
  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <p className="text-[#231d15] text-sm">
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
