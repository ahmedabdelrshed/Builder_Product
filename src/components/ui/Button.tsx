import { ButtonHTMLAttributes, memo, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

// eslint-disable-next-line react-refresh/only-export-components
const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} p-2 rounded-lg font-medium text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Button);
