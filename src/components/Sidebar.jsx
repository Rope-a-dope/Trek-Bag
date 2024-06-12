import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  console.log("Sidebar rendering...");

  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
}
