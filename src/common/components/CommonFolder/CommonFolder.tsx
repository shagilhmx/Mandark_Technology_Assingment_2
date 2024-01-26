import React from "react";
import styles from "./CommonFolder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";

const CommonFolder = (
  item: { name: any; children: Array<any> },
  index: any,
  handleClick: any,
  selectedFolder: any,
) => {
  const { containerStyle, IconTextStyle, selected } = styles;
  return (
    <div
      className={`${containerStyle} ${
        `${index}_${item?.name}` ==
        `${selectedFolder?.index}_${selectedFolder?.item?.name}`
          ? selected
          : ""
      }`}
      key={`${index}_${item?.name}`}
      onClick={() => handleClick(index, item)}
    >
      <div className={IconTextStyle}>
        <FontAwesomeIcon icon={faFolderClosed} />
        <span>{item?.name}</span>
      </div>
      <FontAwesomeIcon icon={faCaretRight} />
    </div>
  );
};

export default CommonFolder;
