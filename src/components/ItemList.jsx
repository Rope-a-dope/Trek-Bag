import { useMemo, useState } from "react";
import Select from "react-select";
import { useItems, useItemsActions } from "../stores/itemsStore";
import EmptyView from "./EmptyView";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const { deleteItem, toggleItem } = useItemsActions();
  const items = useItems();
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="col-[1_/_2] row-[2_/_3] bg-white overflow-y-scroll">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="text-[13px] px-7 py-[15px] border-b-[rgba(0,0,0,0.05)] border-b border-solid">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex relative h-[50px] text-sm border-b-[rgba(0,0,0,0.06)] border-b border-solid">
      <label className="cursor-pointer flex-1 h-full flex items-center px-7 py-0">
        <input
          className="h-[15px] w-[15px] appearance-none border outline-none duration-[0.3s] bg-white cursor-pointer box-content mr-[13px] rounded-sm border-solid border-[#d3d3d3] hover:border-[#8f8474] checked:bg-[#6e6251] checked:border-[#6e6251]"
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>

      <button
        className="text-[13px] uppercase absolute text-[#231d15] h-full transition-all duration-[0.1s] right-7 top-0 hover:scale-[1.2] focus:scale-[1.2]"
        onClick={() => onDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
