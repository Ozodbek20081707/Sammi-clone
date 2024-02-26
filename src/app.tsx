import { Input } from "@/components/common";

export const App = () => {
  return (
    <div>
      <Input label="Email" placeholder="enter please email" />
      <Input className="text-[red]" />
    </div>
  );
};
