import React from "react";

const MyButton = ({
                    description,
                    className
                  }) => {
  return (
    <button className={className}>
      {description}
    </button>
  );
};

export default MyButton;