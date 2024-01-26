import React, { useState } from "react";
import styles from "./css/ElementTransferImpl.module.css";
import Bucket from "../common/components/Bucket/Bucket";

interface ElementTransferImplProps {}

const ElementTransferImpl: React.FC<ElementTransferImplProps> = (props) => {
  const { containerStyle, transferBoardStyle } = styles;
  const [bucket1Data, setBucket1Data] = useState<any>([
    { name: "item 1", key: "item1" },
    { name: "item 2", key: "item2" },
    { name: "item 3", key: "item3" },
    { name: "item 4", key: "item4" },
    { name: "item 5", key: "item5" },
  ]);
  const [bucket2Data, setBucket2Data] = useState<any>([]);
  const [selected, setSelected] = useState<any>([]);

  //   to transfer the selected element
  const handleTransfer = () => {
    const keysToMove = selected.map((item: any) => item?.key);

    const itemsToMove = bucket1Data.filter((each: any) =>
      keysToMove.includes(each?.key),
    );

    setBucket2Data((prevBucket2Data: any) => [
      ...prevBucket2Data,
      ...itemsToMove,
    ]);

    const remainingItems = bucket1Data.filter(
      (each: any) => !keysToMove.includes(each?.key),
    );
    setBucket1Data(remainingItems);
  };

  //   to transfer all the elements
  const handleTransferAll = () => {
    setBucket2Data([...bucket1Data]);
    setBucket1Data([]);
  };

  //   to delete a selected element
  const handleDelete = () => {
    const keysToDelete = selected.map((item: any) => item?.key);

    const newArray = bucket1Data.filter(
      (each: any) => !keysToDelete.includes(each?.key),
    );

    setBucket1Data(newArray);
  };

  //   to delete all the elements
  const handleDeleteAll = () => {
    setBucket1Data([]);
  };
  return (
    <div className={containerStyle}>
      <Bucket
        data={bucket1Data}
        selected={selected}
        setSelected={setSelected}
      />
      <div className={transferBoardStyle}>
        <button onClick={handleTransfer}>Add</button>
        <button onClick={handleDelete}>Remove</button>
        <button onClick={handleTransferAll}>Add All</button>
        <button onClick={handleDeleteAll}>Remove All</button>
      </div>
      <Bucket data={bucket2Data} events="none" />
    </div>
  );
};

export default ElementTransferImpl;
