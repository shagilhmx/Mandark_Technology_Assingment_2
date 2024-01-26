import React, { useState } from "react";
import styles from "./css/BoxSplit.module.css";

interface BoxSplitProps {
  identifier?: string;
}

const BoxSplit: React.FC<BoxSplitProps> = ({ identifier = "1" }) => {
  const { square, split } = styles;
  const [isSplit, setIsSplit] = useState(false);

  const handleSplit = () => {
    setIsSplit(true);
  };

  return (
    <div
      className={`${square} ${isSplit ? split : ""}`}
      onClick={handleSplit}
      data-id={identifier}
    >
      {isSplit ? (
        <>
          <BoxSplit identifier={identifier + 1} />
          <BoxSplit identifier={identifier + 2} />
          <BoxSplit identifier={identifier + 3} />
          <BoxSplit identifier={identifier + 4} />
        </>
      ) : null}
    </div>
  );
};

export default BoxSplit;
