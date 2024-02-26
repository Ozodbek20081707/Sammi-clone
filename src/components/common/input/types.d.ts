export type Props = {
  type?: "text" | "password";
  className?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: () => void;
};
