import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="col-[1_/_3] row-[1_/_2] bg-[#fbf5ed] flex justify-between items-center px-7 py-0 border-b-[rgba(0,0,0,0.05)] border-b border-solid">
      <Logo />
      <Counter />
    </header>
  );
}
