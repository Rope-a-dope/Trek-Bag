import { useRef, useState } from "react";
import { useItemsActions } from "../stores/itemsStore";
import Button from "./Button";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const { addItem } = useItemsActions();
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[#231d15] text-base font-medium">Add an item</h2>
      <input
        className="h-[45px] w-full border text-sm mt-3 mb-2 mx-0 px-4 py-0 rounded-[5px] border-solid border-[rgba(0,0,0,0.12)] placeholder:italic"
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
