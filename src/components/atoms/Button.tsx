import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Button = ({
  children,
  className,
  ...props
}: Props &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return (
    <button
      {...props}
      className={`${!!className ? `${className} ` : ""}text-accent select-none text-4xl font-medium hover:text-primary`}
    >
      {children}
    </button>
  );
};

export default Button;
