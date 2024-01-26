import React, { useState } from "react";
import styles from "./Bucket.module.css";
import { Each } from "../../../utils/EachLoop";

interface BucketProps {
  data: any;
  events?: any;
  selected?: any;
  setSelected?: any;
}

const Bucket: React.FC<BucketProps> = (props) => {
  const { containerStyle, cardStyle, selectedStyle } = styles;

  //selecting the items
  const handleSelected = (item: any) => {
    var updateList = [...props?.selected];
    if (!updateList.find((e: any) => e?.key == item?.key)) {
      updateList = [...props?.selected, item];
    } else {
      updateList.splice(
        props?.selected.findIndex((e: any) => e?.key == item?.key),
        1,
      );
    }
    props?.setSelected(updateList);
  };

  //checking for if the selected one if found for applying css
  const isFound = (item: any) =>
    props?.selected.find((e: any) => e?.key == item?.key);

  const renderChild = (item: any, index: number) => {
    return (
      <div
        key={`${index}_${item?.key}`}
        className={`${cardStyle} ${
          props?.events == "none" ? "" : isFound(item) ? selectedStyle : ""
        }`}
        onClick={() => (props?.events == "none" ? null : handleSelected(item))}
      >
        <p>{item?.name}</p>
      </div>
    );
  };
  return (
    <div className={containerStyle}>
      <Each data={props?.data}>{renderChild}</Each>
    </div>
  );
};

export default Bucket;
