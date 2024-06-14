import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  return (
    <div className="col-[2_/_3] row-[2_/_3] bg-[#fffcf9] flex flex-col pt-[18px] pb-7 px-[25px] border-l-[rgba(0,0,0,0.07)] border-l border-solid">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
}
