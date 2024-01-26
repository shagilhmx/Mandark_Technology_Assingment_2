import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./NestedLisrComponent.module.css";
import { Each } from "../../utils/EachLoop";
import CommonFolder from "../../common/components/CommonFolder/CommonFolder";

interface NestedListComponentProps {
  data: Array<any>;
}

const NestedListComponent: React.FC<NestedListComponentProps> = (props) => {
  const { containerStyle } = styles;
  const [selectedFolder, setSelectedFolder] = useState<any>();
  const [key, setKey] = useState(0);

  //   function to move to the child of the folder tree
  const handleExpand = (index: any, item: any) => {
    setSelectedFolder({ index: index, item: item });
  };

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [selectedFolder]);

  //   checking if the child or the parent itself is empty do not render anything
  if (props?.data == undefined || props?.data?.length == 0) return null;
  else
    return (
      <Fragment key={key}>
        <div className={containerStyle}>
          <Each
            data={props?.data}
            handleClick={handleExpand}
            selectedFolder={selectedFolder}
          >
            {CommonFolder}
          </Each>
        </div>
        {selectedFolder ? (
          <NestedListComponent
            data={selectedFolder?.item?.children}
            key={key}
          />
        ) : null}
      </Fragment>
    );
};

export default NestedListComponent;
