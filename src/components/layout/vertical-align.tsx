import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

const VerticalAlign = ({ children, className }: LayoutProps) => {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
};

export default VerticalAlign;
