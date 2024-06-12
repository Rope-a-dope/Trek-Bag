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
      <h2>Add an item</h2>
      <input
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