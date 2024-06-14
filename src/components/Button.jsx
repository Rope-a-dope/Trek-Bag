import { cn } from "../utils";

export default function Button({ onClick, buttonType, children }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-[45px] w-full bg-[#473a2b] text-white text-base cursor-pointer flex justify-center items-center transition-all duration-[0.2s] rounded-[5px] border-[none] hover:bg-[#322618]",
        {
          "opacity-[0.85] text-sm": buttonType === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
}
