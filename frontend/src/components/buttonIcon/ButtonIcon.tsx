import React from "react";
import "./styles.css";

const ButtonIcon: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <button className="button-icon">
      {children}
    </button>
  );
};

export default ButtonIcon;
