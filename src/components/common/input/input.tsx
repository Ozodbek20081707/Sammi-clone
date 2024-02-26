import { cn } from "@/lib/utils";
import { Props } from "./types";

export const Input = ({ label, placeholder, className }: Props) => {
  return (
    <div>
      <label htmlFor="">
        {label && <span>{label}</span>}
        <input
          className={cn(className)}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
